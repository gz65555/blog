/**
 * Created by husong on 18/03/2018.
 */
import {Context} from "koa";
import {service} from "../service";

export async function login(ctx:Context, next) {
  ctx.body = await service.user.login(ctx.request.body.unionId)
}