/**
 * Created by husong on 05/06/2018.
 */
import {Context} from "koa";
import {generateArticle} from "../utils/utils";
import {service} from "../service";

export function article(ctx: Context) {
  ctx.body = generateArticle('README.md')
}

export async function getArticle(ctx: Context) {
  const id = parseInt(ctx.params.id)
  ctx.body = await service.blog.getPostById(id)
}