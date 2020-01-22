/**
 * @author  x521320930@gmail.com
 * @describe  // 通用接口
 * @example 模块名称_接口 命名 comment_dept_getDepList4Tree
 * 'application/json;charset=UTF-8'
 * 'application/x-www-form-urlencoded;charset=UTF-8'
 * api.post(接口，参数，类型头)
 */
import Axios from '@/utils/axios';
// const upLoad:string = ''
const json: string = 'application/json;charset=UTF-8';
// const form:string = ''
export const h5_channel_do = (param = {}) => {
  const URL = `/facade/h5channel.do`;
  return Axios.post(URL, param, json);
};

export const h5_do = (param = {}) => {
  const URL = `/facade/h5.do`;
  return Axios.post(URL, param, json);
};
