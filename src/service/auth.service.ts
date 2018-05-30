/**
 * Created by husong on 18/03/2018.
 */
import {generaterToken} from "../auth/token";
import {MessageError, ResultUtil} from "../utils/result.util";
import {findUserByUnionId} from "../db/dao/user.dao";

export async function verifyUser(unionId:string) {
  const res:any = await findUserByUnionId(unionId)
  if(res) {
    return ResultUtil.success({token:generaterToken(res._id)})
  }
  return ResultUtil.error(MessageError.AUTH_ERROR);
}