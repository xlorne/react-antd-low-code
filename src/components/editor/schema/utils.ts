
/**
 * 判断是否为容器节点
 * @returns 
 */
export function isParentNode(type: string) {
  return ['div', 'Grid', 'Form', 'Form.Item'].indexOf(type) > -1
}
