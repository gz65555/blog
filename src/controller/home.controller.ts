import {Context} from "koa";

export async function home(ctx: Context) {
  await ctx.render('index')
}