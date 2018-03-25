
import { withStateHandlers } from 'recompose';
import moment from 'moment';

const withPriceState = withStateHandlers(
    () => ({
        selling: {},
        buying: {}
    }),
    {
        addPrice: ({ selling, buying }) => (price) => price.type === 'B' ? ({
            buying: {
                ...buying,
                [moment().valueOf()]: price
            },
        }) : ({
            selling: {
                ...selling,
                [moment().valueOf()]: price
            }
        }),
        reset: (_, { initialCounter = 0 }) => () => ({
            selling: {},
            buying: {}
        }),
    }
);


export {
    withPriceState,
};