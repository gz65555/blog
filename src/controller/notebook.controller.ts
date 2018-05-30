/**
 * Created by husong on 18/03/2018.
 */
import {Context} from "koa";
import {service} from "../service";

export async function addNoteBook(ctx:Context, next) {
  const user = ctx.user;
  ctx.body = await service.notebook.createNotebook(  ctx.request.body.name, user.uid);
  await next()
}

export async function deleteNotebook(ctx:Context, next) {
  const user = ctx.user;
  ctx.body = await service.notebook.deleteNotebook(ctx.params.id, user.uid);
  await next()
}

export async function updateNotebook(ctx:Context, next) {
  const user = ctx.user;
  const body = ctx.request.body
  ctx.body = await service.notebook.updateNotebook(body.id, body.name, user.uid)
  await next()
}

export async function getAllNotebook(ctx:Context, next) {
  const user = ctx.user;
  ctx.body = await service.notebook.findAllNotebooksByUid(user.uid);
  await next()
}