import React from "react";
import "./index.css";
import { queryProps } from '../../types/query'

const QueryInput = (props: queryProps) => {
  const { query, onSearch, placeholder } = props
  return <input type="text" value={query} onChange={(e)=>onSearch(e.target.value)} placeholder={placeholder} />;
}

export default QueryInput;