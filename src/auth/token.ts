/**
 * Created by husong on 18/03/2018.
 */
import * as jwt from 'jsonwebtoken'
import {authConfig} from "../config";
import {Schema} from "mongoose";

export function generaterToken(uid: Schema.Types.ObjectId) {
  return jwt.sign({uid}, authConfig.secretKey, {expiresIn: authConfig.tokenExpire})
}

export function verify(token: string): object | string {
  try {
    return jwt.verify(token, authConfig.secretKey)
  } catch (e) {
    console.log(e);
    return null
  }
}