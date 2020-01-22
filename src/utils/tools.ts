/**
 * @author  x521320930@gmail.com
 * @describe  // 通用方法
 */
// 生成具体树形结构的对象
export function formTree(nodes: Array<any>, id: any, link: number | string): Array<any> {
  return nodes
    .filter((item) => item[link] === id)
    .map((item) => ({ ...item, children: formTree(item, item.id, link) }));
}

// 处理Axios.all 返回参数整理
export const spread = function(callback: Function) {
  return function wrap(arr: any) {
    return callback.apply(null, arr);
  };
};
// export function formTree <T, [K in keyof T]> (nodes: T[], id: null | number | string, link: K) {
//   return nodes.filter(item => item[link] === id)
// }
// const nestedComments = formTree(comments, null, 'parent_id')
