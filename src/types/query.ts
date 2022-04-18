/**
 * 查询字符串
* @param placeholder 输入框提示语
* @param query 查询字符串
* @param onSearch 查询字符串搜索事件
*/

export interface queryProps {
  placeholder?: string
  query: string
  onSearch: Function
}

/**
 * 信息内容
* @param name qq名字
* @param qlogo qq头像
* @param qq qq号
*/
export interface qqInfo {
  name: string
  qlogo: string
  qq: string
}

/**
 * 展示item
* @param loading 是否正在加载
* @param errorTip 错误提示
* @param qlogo qq头像
*/
export interface queryItemProps {
  loading: boolean
  errorTip: string
  userinfo: qqInfo
}


