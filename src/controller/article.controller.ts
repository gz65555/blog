/**
 * Created by husong on 05/06/2018.
 */
import {Context} from "koa";
import {generateArticle} from "../utils/utils";

export function article(ctx: Context) {
  ctx.body = generateArticle('README.md')
}