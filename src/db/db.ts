/**
 * Created by husong on 17/03/2018.
 */
import * as mongoose from 'mongoose';
import config from './../config/db.config'
import {dao, model} from "./index";
import {findUserByUnionId} from "./dao/user.dao";


export async function connect() {
  // await mongoose.connect('mongodb://localhost/word', config);
  // const res = await dao.user.findUserByUnionId('husongggg')
  // console.log(res)
}