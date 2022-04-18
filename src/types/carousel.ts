/**
 * 轮播item配置
* @param id 轮播图id 必填
* @param src 轮播图链接 必填
* @param title 轮播图标题 必填
* @param desc 轮播图描述 可选
* @param style 轮播图样式 可选
*/

export interface CarouselItem {
  id: number
  src: string
  title: string
  desc?: string
  style?: {}
}

/**
 * 轮播组件配置
* @param imgList 轮播图列表 必填
* @param time 轮播时间 可选 默认3s 
*/
export interface CarouselProps {
 imgList: CarouselItem[]
 time?: number
}

/**
 * 下方进度条配置
* @param time 轮播时间 必填
* @param count 轮播图总数 必填
* @param activeIndex 当前轮播图索引 必填
* @param changeIndex 点击改变索引 必填
*/
export interface ProcessProps {
   time: number
   count: number
   activeIndex: number
   changeIndex: Function
}

