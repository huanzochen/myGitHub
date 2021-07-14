import React, { useState, useEffect } from 'react'

function InfiniteScroll({
  dataLength,
  next,
  hasMore,
  loader,
  children
}) {
  const refDiv = React.useRef()
  let [isLoading, setIsLoading] = useState(false)
  let [checkDataLenth, setCheckDataLenth] = useState(dataLength)

  const isBottom = (ref) => { 
    if (!ref.current) {
      return false
    }
    return ref.current.getBoundingClientRect().bottom <= window.innerHeight
  }

  useEffect(() => {
    // 被綁定 ref 的該原生 DOM 是否已經觸底.
    const onScroll = () => {
      if (hasMore && isBottom(refDiv)) {
        // 載入更多資料中...
        next()
        setIsLoading(true)
      }
    }
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [next, hasMore])

  useEffect(() => {
    if (checkDataLenth !== dataLength) {
      // 資料已經有變動...
      setIsLoading(false)
      setCheckDataLenth(dataLength)
    }
  }, [checkDataLenth, dataLength])

  return (
    <div ref={refDiv}>
      {children}
      {isLoading ? loader : ''}
    </div>
  )

}

export default InfiniteScroll


/**
 * 
 * 可以考慮 Intersection Observer API
 * 後續優化 https://medium.com/%E9%BA%A5%E5%85%8B%E7%9A%84%E5%8D%8A%E8%B7%AF%E5%87%BA%E5%AE%B6%E7%AD%86%E8%A8%98/%E8%AA%8D%E8%AD%98-intersection-observer-api-%E5%AF%A6%E4%BD%9C-lazy-loading-%E5%92%8C-infinite-scroll-c8d434ad218c
 * https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
 * 
 * 
 */