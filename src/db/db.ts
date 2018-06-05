/**
 * Created by husong on 17/03/2018.
 */
import * as mongoose from 'mongoose';
import config from './../config/db.config'


export async function connect() {
  await mongoose.connect('mongodb://localhost/blog', config);
  // const res = await dao.user.findUserByUnionId('husongggg')
  // console.log(res)
}