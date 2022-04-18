import { useEffect, useState } from 'react'
/**
 * 添加 debounce 优化查询接口
*/
export const useDebounce = (value: string, delay: number) => {
  const [query, setQuery] = useState(value)
  useEffect(()=> {
    const timer = setTimeout(() => setQuery(value), delay);
    return () => clearTimeout(timer)
  }, [value, delay])
  return query
}