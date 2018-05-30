/**
 * Created by husong on 18/03/2018.
 */
import {verify} from "./token";
import {MessageError, ResultUtil} from "../utils/result.util";

export function verifyTokenMiddleware() {
  return async function (ctx, next) {
    const token = <string>ctx.request.req.headers['authenticated']
    if (token) {
      ctx.user = verify(token)
    }
    await next()
  }
}

export function needUserMiddleware() {
  return async function (ctx, next) {
    if(!ctx.user) {
      ctx.body = ResultUtil.error(MessageError.NOT_LOGIN)
    } else {
      await next()
    }
  }
}