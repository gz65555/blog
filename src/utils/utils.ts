/**
 * Created by husong on 05/06/2018.
 */

const fs = require('fs')
const md = require('markdown-it')()
const markdown = require( "markdown" ).markdown;
const path = require('path')

export function generateArticle(filename) {
  const template = require('art-template')
  const view = template(path.join(__dirname, '../../views/article.art'));
  const html = view()
  const mdText = fs.readFileSync(path.join(__dirname, '../../md', filename), {encoding: 'utf-8'})
  const res = markdown.toHTML(mdText)
  return html.replace('$$content$$', res)
  // return html
}