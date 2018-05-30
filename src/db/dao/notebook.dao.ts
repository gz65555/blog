/**
 * Created by husong on 19/03/2018.
 */
import {Notebook} from '../'
import {Types} from "mongoose";

export function findAllNotebooksByUid(uid:Types.ObjectId) {
  return new Promise((resolve, reject) => {
    Notebook.find({uid}, (err, res) => {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}

export async function createNotebook(name:string, uid:Types.ObjectId) {
  const notebook = new Notebook({
    name:name,
    uid:uid
  });
  return notebook.save();
}

export async function findOneByUidAndName(uid, name) {
  return new Promise((resolve, reject) => {
    Notebook.findOne({
      uid:uid,
      name: name
    }, (err, res) => {
      if(err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}

export function  findOneById(id) {
  return new Promise((resolve, reject) => {
    Notebook.findById(id, (err, res) => {
      if(err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}

export function deleteNotebook(id) {
  return new Promise((resolve, reject) => {
    Notebook.deleteOne({_id:id}, err => {
      if(err) {
        reject(err)
      } else {
        resolve(err)
      }
    })
  })
}

export async function updateNotebook(id,name) {
  return new Promise((resolve, reject) => {
    Notebook.updateOne({_id:id}, {name:name},(err, raw) => {
      if(err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
}