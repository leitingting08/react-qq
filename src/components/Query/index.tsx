import React, { useState, useEffect } from "react";
import QueryInput from '../QueryInput'
import QueryItem from '../QueryItem'
import { useDebounce } from './useDebounce'
import axios from 'axios'
import { qqInfo } from '../../types/query'


const Query = () => {
  const [query, setQuery] = useState<string>('')
  const debounceQuery = useDebounce(query, 500)
  const [loading, setLoading] = useState<boolean>(false)
  const [errorTip, setErrorTip] = useState<string>('')
  const [userinfo, setUserInfo] = useState<qqInfo>({name: '', qq: '', qlogo: ''})
  
  const queryQQ = async () => {
    const res = await axios.get('https://api.uomg.com/api/qq.info', {
      params: {qq: query}
    })
    console.log(res.data)
    const {code, name, qlogo, qq, msg} = res.data
    setLoading(false)
    if(code===1) { // 正常
      setErrorTip('')
      setUserInfo({
        name, qlogo, qq
      })
    } else { // 异常
      setErrorTip(msg)
    }
  }
  const onSearch =  (value:string) => {
    setQuery(value)
    setLoading(true)
  }

  useEffect(()=>{
    if(!debounceQuery) {
      setLoading(false) 
      setErrorTip('')
      setUserInfo({name: '', qq: '', qlogo: ''})
    }else {
      queryQQ()
    }
  }, [debounceQuery])

  return <>
    <label>QQ</label><QueryInput query={query} onSearch={onSearch} placeholder="请输入QQ号查询" />
    <QueryItem loading={loading} userinfo={userinfo} errorTip={errorTip} />
  </>;
}

export default Query;