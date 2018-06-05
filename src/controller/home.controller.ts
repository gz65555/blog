import {Context} from "koa";
import {service} from "../service";

const stringToDom = require('string-to-dom')

export async function home(ctx: Context) {
  let page = ctx.query['page']
  if (!page) page = 1;
  const data = await service.blog.getBlogsByPage(parseInt(page))
  await ctx.render('index', data)
}

export async function pages(ctx: Context) {
  ctx.body = generateNav(3, 10).join("");
}

function generateNav(current: number, total: number) {
  const result = []
  for (let i = current - 2; i < current + 3; i++) {
    if (i < 1 || i > total) {
      continue;
    }
    let template = ''
    if (i !== current) {
      template = '<a class="page-number" href="#">$1</a>';
    } else {
      template = '<span class="page-current">$1</span>';
    }
    result.push(template.replace('$1', i.toString()))
  }
  if (current < total) {
    result.push('<a class="page-number" href="#">NEXT</a>')
  }
  if (current > 1) {
    result.unshift('<a class="page-number" href="#">PREV</a>')
  }
  return result;
}