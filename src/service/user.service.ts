/**
 * Created by husong on 18/03/2018.
 */
import {dao} from "../db";
import {MessageError, ResultUtil} from "../utils/result.util";
import {generaterToken} from "../auth/token";

export async function login(unionId:string) {
  try {
    const res:any = await dao.user.findUserByUnionId(unionId)
    if(res) {
      return ResultUtil.success({token: generaterToken(res._id)})
    } else {
      return ResultUtil.error(MessageError.AUTH_ERROR)
    }
  } catch (e) {
    return ResultUtil.error(MessageError.AUTH_ERROR)
  }
}