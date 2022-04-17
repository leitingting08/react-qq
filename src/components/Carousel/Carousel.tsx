import React, { useRef, useState, useEffect } from "react";
import "./Carousel.css";
/**
 * @param imgList 轮播图列表 title 标题 desc 描述 src 图片链接
 * @param time 轮播时间 默认3s
*/
interface CarouselProps {
  imgList: Array<{src: string, title: string, desc: string, style: object}>,
  time?: number
}

function Carousel(props: CarouselProps) {
  const { imgList, time = 3 } = props
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const timer = useRef<ReturnType<typeof setInterval>>()
  /**
   * 自动轮播
   */
  const autoLoop = () => {
    if(timer.current) clearInterval(timer.current)
    timer.current = setInterval(()=>{
      setActiveIndex(currentIndex=>currentIndex === imgList.length - 1 ? 0 : currentIndex + 1)
    }, time * 1000)
  }

  /** 
   * 点击手动切换
   */
  const changeIndex = (index: number) => {
    setActiveIndex(index)
    autoLoop()
  }
  
  /**
   * 初始开启自动轮播
  */
  useEffect(()=>{
    autoLoop()
    return () => {
      if (timer.current) clearInterval(timer.current)
    }
  }, [])

  return <div className="carousel">
    <div className="carousel-container">
    {
      imgList.map(({ src, title, desc, style }, index)=>{
        return <div className="item" style={{...style, ...{transform: `translateX(${-activeIndex * 100}%)`}}} key={index}>
          <h1>{title}</h1>
          <h3>{desc}</h3>
          <img src={src} alt={title} key={index} />
        </div>
      })
    }
    </div>
    <ol className="process">
    {
      
      imgList.map((item,index)=>{
        return <li key={index} onClick={()=>changeIndex(index)} aria-label="li">
          { index === activeIndex && <span className="process_active" data-testid="process_active" style={{animation: `progress ${time}s linear`}}/>}
        </li>
      })
      
    }
    </ol>
  </div>;
}

export default Carousel;