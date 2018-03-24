import { Context } from '../utils'
import { Query } from './Query'
import { post } from './Mutation/post'
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
    ...post,
    ...price
  }
}
