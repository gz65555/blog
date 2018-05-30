/**
 * Created by husong on 17/03/2018.
 */
import * as mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: String,
  sex: Number,
  unionId: {type: String, index: true},
  avatarUrl: String,
  joinDate: {type: Date, default: Date.now}
})
const User = mongoose.model('User', userSchema);
export default User

