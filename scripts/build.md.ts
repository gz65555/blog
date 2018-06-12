/**
 * Created by husong on 11/06/2018.
 */
import * as mongoose from 'mongoose'
import config from "../src/config/db.config";
import * as fs from 'fs'
import * as path from 'path';
import {service} from "../src/service";

mongoose.connect('mongodb://localhost/blog', config).then(connection => {
  parseMarkdown().then(()=>{
    //todo disconnect
  });
});

async function parseMarkdown() {
  const files = fs.readdirSync(path.join(__dirname, '../md'), {encoding: 'utf-8'});
  const promises = []
  for (const filename of files) {
    const info = parseFilename(filename);
    const filepath = path.join(__dirname, '../md', filename as string)
    const content = fs.readFileSync(filepath, {encoding: 'utf-8'})
    promises.push(service.blog.postBlog(info.title, content, info.tags, info.date))
  }
  return Promise.all(promises)
}

function parseFilename(filename) {
  const strs = filename.split('&&')
  const title = strs[0]
  const date = strs[1]
  let tags = []
  if (strs[2]) {
    tags = strs[2].split(',')
  }
  return {title, date: date, tags}
}