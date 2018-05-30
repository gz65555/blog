/**
 * Created by husong on 24/03/2018.
 */
import {service} from "../service";
import {Context} from "koa";

export async function getAllWordsFromNotebook(ctx:Context, next) {
  ctx.body = await service.word.findAllWordByNotebookId(ctx.params.notebookId)
  await next()
}

export async function addWordToNotebook(ctx:Context, next) {
  const word = ctx.request.body.word;
  const notebookId = ctx.request.body.notebookId;
  const user = ctx.user;
  ctx.body = await service.word.addWordToNotebook(word, notebookId, user.uid)
  await next()
}

export async function deleteWordFromNotebook(ctx:Context, next) {
  const user = ctx.user;
  const id = ctx.params.id;
  ctx.body = await service.word.deleteWord(id, user.uid);
  await next()
}

export async function findWord(ctx:Context, next) {
  ctx.body = await service.word.findWord(ctx.params.word)
  await next()
}