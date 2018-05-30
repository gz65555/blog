/**
 * Created by husong on 19/03/2018.
 */
import {model} from "../index";

export function createUser(object) {
  const user = new model.User(object)
  return user.save()
}

export function findUserByUnionId(unionId) {
  return new Promise((resolve, reject) => {
    model.User.findOne({
      unionId
      // sex:1
    }, (err, res) => {
      if(err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}