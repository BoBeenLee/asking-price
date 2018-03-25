
import { withStateHandlers, lifecycle, compose } from 'recompose';
import moment from 'moment';
import _ from 'lodash';

const PRICE_MAP = {
    B: (price, state) => ({
        buying: {
            ...state['buying'],
            [price.id]: price
        },
        buyingSortByCreatedAt: [
            _.pick(price, ['id', 'createdAt']),
            ...state['buyingSortByCreatedAt']
        ],
    }),
    S: (price, state) => ({
        selling: {
            ...state['selling'],
            [price.id]: price
        },
        sellingSortByCreatedAt: [
            _.pick(price, ['id', 'createdAt']),
            ...state['sellingSortByCreatedAt']
        ]
    })
};

const lifecyclePrice = lifecycle({
    componentWillReceiveProps(nextProps) {
        const { price, addPrice } = this.props;
        const { price: nextPrice } = nextProps;
        if (!price || (nextPrice && price.id !== nextPrice.id)) {
            addPrice(nextPrice);
        }
    }
})

const withPriceState = withStateHandlers(
    () => ({
        selling: {},
        sellingSortByCreatedAt: [],
        buying: {},
        buyingSortByCreatedAt: []
    }),
    {
        addPrice: (state) => (price) => {
            const typeFunc = PRICE_MAP[price.type];
            if (!typeFunc) {
                return state;
            }
            return typeFunc(price, state);
        },
        reset: (_, { initialCounter = 0 }) => () => ({
            selling: {},
            buying: {}
        }),
    }
);

export default compose(withPriceState, lifecyclePrice);