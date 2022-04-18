import React from "react";
import "./index.css";
import { queryItemProps } from '../../types/query'

const QueryItem = (props: queryItemProps) => {
  const { loading, userinfo, errorTip } = props
  const { qlogo, qq, name } = userinfo
  return loading? <div data-testid="loading">loading...</div>: 
     errorTip? <div data-testid="errorTip">{errorTip}</div>: qlogo && qq && name ? <div className="qqitem" data-testid="qqitem">
    <img src={qlogo} alt="qq头像"/>
    <div>
      <p>{name}</p>
      <p className="qq">{qq}</p>
    </div>
  </div>:null;
}

export default QueryItem;