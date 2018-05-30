/**
 * Created by husong on 18/03/2018.
 */
import {dao} from '../db'
import {MessageError, ResultUtil} from "../utils/result.util";
import {ObjectID} from "bson";

export async function findAllNotebooksByUid(uid: ObjectID) {
  try{
    const res = await dao.notebook.findAllNotebooksByUid(uid)
    return ResultUtil.success(res);
  } catch(e) {
    return ResultUtil.error(MessageError.FINDALL_NOTEBOOK_FAIL)
  }
}

export async function createNotebook(name: string, uid: ObjectID) {
  try {
    const notebook = await dao.notebook.findOneByUidAndName(uid, name);
    if (notebook) {
      return ResultUtil.error(MessageError.NOTEBOOK_EXIST)
    }
    const res = await dao.notebook.createNotebook(name, uid)
    return ResultUtil.success(res)
  } catch (e) {
    console.log(e)
    return ResultUtil.error(MessageError.ADD_NOTEBOOK_FAIL)
  }
}



export async function deleteNotebook(id, uid) {
  const notebook:any = await dao.notebook.findOneById(id)
  if(notebook.uid.equals(uid)) {
    const res = await dao.notebook.deleteNotebook(id)
    return ResultUtil.success(res);
  } else {
    return ResultUtil.error(MessageError.NO_PERMISSION)
  }
}

export async function updateNotebook(id, name, uid) {
  const notebook:any = await dao.notebook.findOneById(id)
  if(notebook.uid.equals(uid)) {
    const res = await dao.notebook.updateNotebook(id, name)
    return ResultUtil.success(res)
  } else {
    return ResultUtil.error(MessageError.NO_PERMISSION)
  }
}


