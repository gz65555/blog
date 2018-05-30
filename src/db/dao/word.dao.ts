import {Word} from "../index";
import {Types} from "mongoose";

/**
 * 在一本notebook里找所有的单词
 * @param {number} notebookId
 * @returns {Promise<any>}
 */
export function findAllWordByNotebookId(notebookId: Types.ObjectId) {
  return new Promise((resolve, reject) => {
    Word.find({notebookId}, (err, res) => {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}

/**
 * 删除一个收藏的单词
 * @param {number} wordId
 */
export function deleteWord(wordId: Types.ObjectId) {
  return new Promise((resolve, reject) => {
    Word.deleteOne({_id: wordId}, (err => {
      if (err) {
        reject(err)
      } else {
        resolve(err)
      }
    }))
  })
}

/**
 *
 * @param word 已经存在的word对象
 * @param uid 用户id
 */
export async function addWord(word, uid, notebookId) {
  word.uid = uid;
  word.notebookId = notebookId;
  return await word.save()
}

/**
 * 根据id查单词
 * @param id
 * @returns {Promise<any>}
 */
export async function findWordById(id) {
  return new Promise((resolve, reject) => {
    Word.findById(id, (err, res) => {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}