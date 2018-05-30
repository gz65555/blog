/**
 * Created by husong on 17/03/2018.
 */
import * as mongoose from 'mongoose'
import {Schema} from 'mongoose'

const notebookSchema = new mongoose.Schema({
  name: String,
  uid: {type: Schema.Types.ObjectId, index: true}
})

export default mongoose.model('notebook', notebookSchema);