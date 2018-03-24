import { Context } from '../utils'
import { Query } from './Query'
import { price } from './Mutation/price'

export default {
  Subscription: {
    price: {
      subscribe: async (parent, args, ctx: Context, info) => {
        return ctx.db.subscription.price({}, info);
      }
    }
  },
  Query,
  Mutation: {
    ...price
  }
}
