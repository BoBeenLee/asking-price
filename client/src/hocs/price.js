
import { withStateHandlers, lifecycle, setPropTypes, compose } from 'recompose';
import PropTypes from 'prop-types';
import moment from 'moment';
import _ from 'lodash';
import { getTargetContracts, isTargetContract, isDiffPrice } from './priceHelper';

const initialState = {
    selling: {},
    sellingSortByCreatedAt: [],
    buying: {},
    buyingSortByCreatedAt: [],
    contract: {}
};

const plusPrice = (name, price, state) => ({
    [name]: {
        ...state[name],
        [price.id]: price
    },
    [`${name}SortByCreatedAt`]: [
        _.pick(price, ['id', 'createdAt']),
        ...state[`${name}SortByCreatedAt`]
    ],
});

const substractPrice = (name, price, state) => {
    return {
        [name]: _.reduce(state[name], (res, item) => {
            if (item.id !== price.originId) {
                return { ...res, [item.id]: item };
            }
            if (item.count > price.count) {
                return {
                    ...res, [item.id]: {
                        ...item,
                        count: item.count - price.count
                    }
                };
            }
            return res;
        }, {}),
        [`${name}SortByCreatedAt`]: _.filter(state[`${name}SortByCreatedAt`], item => item.id !== price.id && item.count !== price.count)
    }
}

const makeContracts = (price) => (targetContracts) => {
    let count = price.count;
    const contracts = _.reduce(targetContracts, (res, contract) => {
        if (count <= 0) {
            return res;
        }
        count -= contract.count;
        const updateCount = count > 0 ? contract.count : contract.count + count;
        return [...res, {
            ...contract,
            id: contract.id + moment().valueOf(),
            originId: contract.id,
            count: updateCount
        }];
    }, []);
    return {
        nextPrice: {
            ...price,
            count
        },
        contracts
    };
};

const addContracts = (name, price, state, orderBy) => {
    const { selling, buying, contract } = state;
    const targetContracts = getTargetContracts(selling, buying, price);
    const targetContractsByAmount = _.orderBy(_.map(targetContracts, _.identity), ['amount'], [orderBy]);
    const { nextPrice, contracts } = makeContracts(price)(targetContractsByAmount);
    let localState = { ...state };
    localState = _.reduce(contracts, (res, contract) => {
        return { ...res, ...priceTypeMap[contract.type].substractPrice(contract, res) };
    }, localState);
    localState = _.reduce(contracts, (res, contract) => ({ ...res, contract: { ...res.contract, [contract.id]: contract } }), localState);
    if (nextPrice.count > 0) {
        localState = { ...localState, ...plusPrice(name, nextPrice, state) };
    }
    return localState;
};

const priceTypeMap = {
    B: {
        plusPrice: _.partial(plusPrice, 'buying'),
        substractPrice: _.partial(substractPrice, 'buying'),
        addContracts: _.partial(addContracts, 'buying', _, _, 'asc')
    },
    S: {
        plusPrice: _.partial(plusPrice, 'selling'),
        substractPrice: _.partial(substractPrice, 'selling'),
        addContracts: _.partial(addContracts, 'selling', _, _, 'desc')
    }
};

const setPropTypesPrice = setPropTypes({
    selling: PropTypes.object,
    sellingSortByCreatedAt: PropTypes.array,
    buying: PropTypes.object,
    buyingSortByCreatedAt: PropTypes.array,
    contract: PropTypes.object
});

const withPriceState = withStateHandlers(
    () => (initialState),
    {
        plusPrice: (state) => (price) => {
            const typeFunc = _.get(priceTypeMap[price.type], 'plusPrice');
            if (!typeFunc) {
                return state;
            }
            return typeFunc(price, state);
        },
        addContracts: (state) => (price) => {
            const typeFunc = _.get(priceTypeMap[price.type], 'addContracts');
            if (!typeFunc) {
                return state;
            }
            return typeFunc(price, state);
        },
        reset: (_, args) => () => (initialState)
    }
);

export {
    initialState,
    makeContracts,
    addContracts,
    substractPrice,
    setPropTypesPrice,
    withPriceState
};
export default compose(withPriceState, setPropTypesPrice);