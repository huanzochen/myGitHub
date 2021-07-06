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
        console.log('載入更多資料中...')
        next()
        setIsLoading(true)
      }
    }
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [next, hasMore])

  useEffect(() => {
    if (checkDataLenth !== dataLength) {
      console.log('資料已經有變動...')
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