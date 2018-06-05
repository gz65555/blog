/**
 * Created by husong on 31/05/2018.
 */
import * as mongoose from 'mongoose'
import {Schema} from 'mongoose'

const tagSchema = new mongoose.Schema({
  name: String,
  articles: Schema.Types.Array
})

export const Tag = mongoose.model('tag', tagSchema);