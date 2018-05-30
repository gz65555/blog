/**
 * Created by husong on 18/03/2018.
 */
function success(data?: any) {
  return {code: 0, data}
}

function error(error: MessageError) {
  return {code: error}
}

export enum MessageError {
  NOT_LOGIN = 1001,
  AUTH_ERROR = 1002,
  NO_PERMISSION = 1003,
  ADD_WORD_FAIL = 1101,
  ADD_NOTEBOOK_FAIL = 1102,
  NOTEBOOK_EXIST = 1103,
  FINDALL_NOTEBOOK_FAIL = 1104
}

export const ResultUtil = {
  success,
  error
}