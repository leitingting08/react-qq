import React, { useRef, useState, useEffect } from "react";
import "./index.css";
import { CarouselProps } from '../../types/carousel'
import Process from '../Process'

const Carousel = (props: CarouselProps) => {
  const { imgList, time = 3 } = props
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const timer = useRef<ReturnType<typeof setInterval>>()
  /**
   * 自动轮播
   */
  const autoLoop = () => {
    if(timer.current) clearInterval(timer.current)
    timer.current = setInterval(()=>{
      setActiveIndex((currentIndex:number) => currentIndex === imgList.length - 1 ? 0 : currentIndex + 1)
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
        return <div style={{...style, ...{transform: `translateX(${-activeIndex * 100}%)`}}} key={index}>
          <h1>{title}</h1>
          <h3>{desc}</h3>
          <img src={src} alt={title} key={index} />
        </div>
      })
    }
    </div>
   <Process count={imgList.length} time={time} activeIndex={activeIndex} changeIndex={changeIndex}/>
  </div>;
}

export default Carousel;