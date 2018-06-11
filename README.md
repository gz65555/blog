# 个人博客项目

##命令

```shell
#安装依赖
npm install
#启动
npm start
#构建(todo)
npm run build
#编译markdown
npm run build:md
```

## 技术栈

- koa2 （服务器）
- koa-router （路由）
- koa-bodyparser （body解析）
- jsonwebtoken （基于token）
- mongoose（ODM框架）
- mongodb（数据库）
- arttemplate（模板引擎）

## Markdown编写规则

markdown文件存放在md文件夹中，采用title&&date&&tag,tag...方式命名

使用 `npm run build:md`把md文件编译并写入mongodb中。

## 路线图

- 展示首页
- 链接到文章
- 根据标签查找文章