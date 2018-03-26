import { Context } from '../../utils';
import { forwardTo } from 'prisma-binding';
import * as P from 'bluebird';
import * as _ from 'lodash';

const datas = [
    {
        id: 1,
        type: "B",
        amount: 150,
        count: 1000
    },
    {
        id: 2,
        type: "S",
        amount: 160,
        count: 800
    },
    {
        id: 3,
        type: "B",
        amount: 151,
        count: 1000
    },
    {
        id: 4,
        type: "S",
        amount: 170,
        count: 800
    },
    {
        id: 5,
        type: "B",
        amount: 140,
        count: 1000
    },
    {
        id: 6,
        type: "S",
        amount: 200,
        count: 800
    },
    {
        id: 7,
        type: "B",
        amount: 170,
        count: 1200
    }
];

export const price = {
    createPrice: forwardTo('db'),

    async makePrices(parent, args, ctx: Context, info) {
        await P.each(datas, async data => {
            await P.delay(1000);
            const price = await ctx.db.mutation.createPrice(
                {
                    data: _.pick(data, ['type', 'count', 'amount'])
                },
                null);
            console.log(price);
        });
        return {
            isSuccess: true,
            error: null
        };
    }
}
