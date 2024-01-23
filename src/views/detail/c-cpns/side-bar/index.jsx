/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo } from 'react'
import Rating from '@mui/material/Rating'
import { SidebarContainer } from './style'

const RatingSection = ({ reviews }) => {
  return (
    <div className="rating">
      <Rating
        readOnly
        value={5}
        precision={0.1}
        size="small"
        sx={{ fontSize: '12px', color: '#00848A' }}
      />
      <div className="rating-info">{`评论数 ${reviews}`}</div>
    </div>
  )
}

const DatePicker = () => {
  return (
    <div className="date-picker">
      <label
        htmlFor="date-picker"
        className="block text-sm font-medium text-gray-700"
      >
        日期
      </label>
      <div className="flex items-center mt-1">
        <input type="text" id="date-picker" placeholder="入住日期" />
        <span className="mx-2 text-gray-500">→</span>
        <input type="text" placeholder="退房日期" />
      </div>
    </div>
  )
}

const GuestPicker = () => {
  return (
    <div className="guest-picker">
      <label
        htmlFor="quantity"
        className="block text-sm font-medium text-gray-700"
      >
        人数
      </label>
      <select id="quantity">
        <option>1人</option>
        <option>2人</option>
        <option>3人</option>
        <option>4人</option>
      </select>
    </div>
  )
}

const BookingButton = () => {
  return <button className="booking-btn">查看可订状态</button>
}

const Sidebar = memo((props) => {
  const { reviews_count, price } = props

  return (
    <SidebarContainer>
      <div className="price">
        ￥{price} <span>/晚</span>
      </div>
      <RatingSection reviews={reviews_count} />
      <DatePicker />
      <GuestPicker />
      <BookingButton />
      <div className="details">
        <strong>放心预订该房源</strong>
        <p> 预定后24小时内付款，可退订或免费改期</p>
        <a href="#">了解更多</a>
      </div>
    </SidebarContainer>
  )
})

export default Sidebar
