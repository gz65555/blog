/**
 * Created by husong on 01/06/2018.
 */
import * as db from '../db';
import {ResultUtil} from "../utils/result.util";

export async function postBlog(title: string, content: string, tags: Array<string>, date?: Date) {
  return await db.addBlog(title, content, tags, date)
}

export async function getBlogsByPage(page: number = 1) {
  const res = await db.getIndexPostsByPage(page)
  const data: any = res.data
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    item.simDate = item.date.toJSON().substr(0, 10);
  }
  return res;
}

export async function getPostById(id: number) {
  try {
    const res = await db.getPostById(id);
    return ResultUtil.success(res);
  } catch (e) {
    return ResultUtil.error(e);
  }
}