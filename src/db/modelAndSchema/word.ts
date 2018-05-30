/**
 * Created by husong on 17/03/2018.
 */
import * as mongoose from 'mongoose'
import {Schema} from "mongoose";

const wordSchema = new mongoose.Schema({
  shanbay_id: Number,
  notebookId: {type: Number, index: true},
  uid: Schema.Types.ObjectId,
  pron:String,
  en_definitions: [
    {
      type: String,
      explain: String,
    }
  ],
  cn_definitions: [
    {
      type: String,
      explain: String,
    }
  ],
  content: String,
  uk_audio: String,
  us_audio: String,
  example: [
    {
      translation: String,
      sentence: String,
      point:String
    }
  ]
})
export default mongoose.model('word', wordSchema);