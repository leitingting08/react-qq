import React from "react";
import "./index.css";
import { ProcessProps } from '../../types/carousel'

const Process = (props: ProcessProps) => {
  const { count, activeIndex, changeIndex, time } = props

  return <ol className="process">
      {
        
        Array(count).fill(0).map((item,index)=>{
          return <li key={index} onClick={()=>changeIndex(index)} aria-label="li">
            { index === activeIndex && <span className="process_active" data-testid="process_active" style={{animation: `progress ${time}s linear`}}/>}
          </li>
        })
        
      }
      </ol>;
}

export default Process;