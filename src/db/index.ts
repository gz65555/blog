/**
 * Created by husong on 18/03/2018.
 */
// import n from './modelAndSchema/notebook';
// import User from './modelAndSchema/user'
// import w from './modelAndSchema/word'
// import * as _dao from './dao'
import {connect} from './db'
//
connect()
//
// export const Notebook = n;
// export const Word = w;
// export const dao = _dao
// export const model = {
//   User
// }
export * from './modelAndSchema/blog'
export * from './modelAndSchema/tag'
export * from './dao/blog.dao'