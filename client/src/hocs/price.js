
import { withStateHandlers } from 'recompose';
import moment from 'moment';
import _ from 'lodash';

const PRICE_MAP = {
    B: (price, state) => ({
        buying: {
            ...state['buying'],
            [moment(price.createdAt).valueOf()]: price
        },
    }),
    D: (price, state) => ({
        selling: {
            ...state['selling'],
            [moment(price.createdAt).valueOf()]: price
        }
    })
};

const withPriceState = withStateHandlers(
    () => ({
        selling: {},
        buying: {}
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


export {
    withPriceState,
};