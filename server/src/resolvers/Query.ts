import { Context } from '../utils'

export const Query = {
  prices(parent, args, ctx: Context, info) {
    return ctx.db.query.prices({}, info);
  }
}
