import React, { memo } from 'react'
import { TitleSection } from './style'

export default memo(function index(props) {
  const { name, reviews_count } = props
  return (
    <TitleSection>
      <div className="title">{name}</div>
      <div className="badges">
        <div className="badge highlight">5分 · {reviews_count}条评价</div>
        <div className="badge highlight">超赞房东</div>
        <div className="badge">中文咨询</div>
        <div className="badge">接受咨询</div>
        <div className="badge">自助入住</div>
        <div className="badge">免费停车</div>
        <div className="badge">可以做饭</div>
      </div>
    </TitleSection>
  )
})
