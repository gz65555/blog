import {dao, Word} from '../db';
import axios from 'axios';
import {MessageError, ResultUtil} from "../utils/result.util";
import {Types} from "mongoose";

/**
 * Created by husong on 18/03/2018.
 */

/**
 * 在一本notebook里找所有的单词
 * @param {number} notebookId
 * @returns {Promise<any>}
 */
export async function findAllWordByNotebookId(notebookId: Types.ObjectId) {
  const res = dao.word.findAllWordByNotebookId(notebookId)
  return ResultUtil.success(res)
}

/**
 * 删除一个收藏的单词
 * @param {"mongoose".Types.ObjectId} id
 * @param {"mongoose".Types.ObjectId} uid
 * @returns {Promise<any>}
 */
export async function deleteWord(id: Types.ObjectId, uid: Types.ObjectId) {
  const word: any = await dao.word.findWordById(id)
  if (word.uid.equals(uid)) {
    const res = await dao.word.deleteWord(id)
    return ResultUtil.success(res)
  } else {
    return ResultUtil.error(MessageError.NO_PERMISSION)
  }
}

/**
 * 添加单词到一本notebook里
 * @param {string} word
 * @param {number} notebookId
 * @param uid
 * @returns {Promise<any>}
 */
export async function addWordToNotebook(word: string, notebookId: Types.ObjectId, uid: Types.ObjectId) {
  try {
    const notebook: any = await dao.notebook.findOneById(notebookId);
    if (notebook.uid === uid) {
      const wordObject = findWordFromShanBay(word);
      const wordRes = await dao.word.addWord(wordObject, uid, notebookId)
      return ResultUtil.success(wordRes)
    } else {
      return ResultUtil.error(MessageError.NO_PERMISSION)
    }
  } catch (e) {
    console.log(e);
    return ResultUtil.error(MessageError.ADD_WORD_FAIL)
  }
}

export async function findWord(word: string) {
  return ResultUtil.success(await findWordFromShanBay(word))
}

/**
 *
 * @param {string} word
 * @returns {Promise<"mongoose".Document>}
 */
async function findWordFromShanBay(word: string) {
  const res = await axios.get('https://api.shanbay.com/bdc/search/', {params: {word}})
  const result = res.data.data
  const exampleRes = await axios.get('https://api.shanbay.com/bdc/example/', {
    params: {
      type: 'sys',
      vocabulary_id: result.id
    }
  })
  return copyRequestResultToWord(result, exampleRes.data.data);
}


function copyRequestResultToWord(result: any, exampleResult: any) {
  const enDefinitions = parseEnDefinition(result.en_definitions);
  const cnDefinition = parseCnDefinition(result.cn_definition);
  const example = parseExample(exampleResult);
  return new Word({
    shanbay_id: result.id,
    en_definitions: enDefinitions,
    cn_definitions: cnDefinition,
    content: result.content,
    uk_audio: result.uk_audio,
    us_audio: result.us_audio,
    pron: result.pron,
    example: example
  })
}

function parseCnDefinition(cnDefinition) {
  return cnDefinition.defn.split('\n').map(item => {
    const arr = item.split('.')
    return {type: arr[0].trim(), explain: arr[1].trim()}
  })
}

function parseEnDefinition(enDefinitions) {
  const map = []
  for (let k in enDefinitions) {
    map.push({type: k, explain: enDefinitions[k].join(';')})
  }
  return map
}

function parseExample(example: any) {
  return example.map(item => ({
    translation: item.translation,
    sentence: item.first + item.mid + item.last,
    point: item.mid
  }))
}