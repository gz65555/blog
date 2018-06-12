/**
 * Created by husong on 01/06/2018.
 */
import {Blog} from "../";

export async function addBlog(title: string, content: string, tags: Array<any>, date?: Date) {
  let blog;
  if (date) {
    blog = new Blog({
      title,
      content,
      tags,
      date
    })
  } else {
    blog = new Blog({
      title,
      content,
      tags
    })
  }
  return blog.save();
}

export async function getPostById(id: number) {
  return new Promise((resolve, reject) => {
    Blog.findById(id, ((err, res) => {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    }))
  })
}

export async function getAllTags() {
  return new Promise((resolve, reject) => {
    Blog.distinct('tags', function (err, res) {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}

export async function getPostsByTag(tag: string) {
  return new Promise((resolve, reject) => {
    Blog.find({
      "tags": tag
    }, function (err, res) {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    }).sort({
      date: -1
    })
  })
}

export async function getIndexPostsByPage(page: number = 1) {
  const countPromise = new Promise((resolve, reject) => {
    Blog.count({}, (err, count) => {
      if (err) {
        reject(err)
      } else {
        resolve(count)
      }
    })
  })
  const postPromise = new Promise((resolve, reject) => {
    Blog.find({}, {
      _id: 1,
      title: 1,
      date: 1,
      tags: 1
    }, (err, res) => {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    }).skip((page - 1) * 10).limit(10).sort({
      date: -1
    })
  })
  const res = await Promise.all([countPromise, postPromise])
  return {total: Math.ceil(<any>res[0] / 10), page: page, data: res[1]}
}

// getPostsByTag('node').then(value => {
//   console.log(value)
// })

// addBlog('测试1', '测试1', [
//   'node',
//   'typescript',
//   'javascript',
// ])
// getAllTags().then(value => {
//   console.log(value)
// })