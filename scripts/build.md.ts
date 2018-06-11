/**
 * Created by husong on 11/06/2018.
 */
import * as mongoose from 'mongoose'
import config from "../src/config/db.config";
import {service} from "../src/service";
import * as fs from 'fs'
import * as path from 'path';

mongoose.connect('mongodb://localhost/blog', config).then(connection => {
  // service.blog.postBlog();
  connection.disconnect();
});

function parseMarkdown() {
  const files = fs.readdirSync(path.join(__dirname, '../md'), {encoding: 'utf-8'});
  console.log(files)
}

parseMarkdown();
