/**
 * Created by husong on 01/06/2018.
 */
import {getIndexPostsByPage} from "../db";

export async function postBlog(title: string, content: string, tags: Array<string>) {

}

export async function getBlogsByPage(page: number = 1) {
  const res = await getIndexPostsByPage(page)
  const data: any = res.data
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    item.simDate = item.date.toJSON().substr(0, 10);
  }
  return res;
}