/**
 * Created by husong on 04/06/2018.
 */
import * as template from 'art-template';
const fs = require('fs')
const md = require('markdown-it')()
template('/welcome.art', 'hi, <%=value%>.');

// use
const view = require('/Users/husong/Documents/svnProject/js/blog/views/article.art');
const html = view()
const mdText = fs.readFileSync('./README.md',{encoding:'utf-8'})
const res = md.render(mdText)

fs.writeFileSync('./test.html', html.replace('$$content$$', res), {encoding:'utf-8'})

