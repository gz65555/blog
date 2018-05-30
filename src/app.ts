/**
 * Created by husong on 17/03/2018.
 */
import * as Koa from 'koa'
import './service/word.service'
import {router} from "./controller";
import {verifyTokenMiddleware} from "./auth";
import * as bodyParser from 'koa-bodyparser';
import * as render from 'koa-art-template';
import * as path from "path";
import * as serve from 'koa-static';

const app = new Koa()
//art template
render(app, {
  root: path.join(__dirname, '../views'),
  extname: '.art',
});

//static
app.use(serve(path.join(__dirname,'../static')));

//body parser
app.use(bodyParser())

//获取用户
app.use(verifyTokenMiddleware())
//路由
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log('server start')
})
