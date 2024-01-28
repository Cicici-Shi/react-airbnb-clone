/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo } from 'react'
import { NoticeWrapper } from './style'

export default memo(function index() {
  return (
    <NoticeWrapper>
      <div className="notice-item">
        <h3 className="notice-subtitle">房屋守则</h3>
        <div className="notice-description">
          <p>安静时段： 晚上10:00 - 上午7:00</p>
          <p>不允许携带宠物</p>
          <p>禁止商业拍摄</p>
          <p>不允许举办派对和活动</p>
          <p>禁止吸烟</p>
          <a href="#">房屋守则</a>
        </div>
      </div>
      <div className="notice-item">
        <h3 className="notice-subtitle">取消政策</h3>
        <strong className="notice-description">
          添加入住退房日期后，可查看取消政策详情
        </strong>
      </div>
      <div className="notice-item">
        <h3 className="notice-subtitle">安全须知</h3>
        <div className="notice-description">
          <p>无门或无门锁的泳池/热水浴池</p>
          <p>已安装一氧化碳报警器</p>
          <p>已安装烟雾报警器</p>
          <a href="#">阅读详情</a>
        </div>
      </div>
      <div className="notice-item">
        <h3 className="notice-subtitle">安全预订</h3>
        <div className="notice-description">
          <p>
            为了保护您的账号隐私及付款安全，请勿妄信第三方预订代理提供的折扣或礼金券，也不要在爱彼迎网站或App之外汇款或沟通。
          </p>
          <a href="#">查看详情</a>
        </div>
      </div>
    </NoticeWrapper>
  )
})
