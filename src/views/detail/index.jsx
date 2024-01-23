/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from 'classnames'
import { changeHeaderConfigAction } from '@/store/features/main'
import React, { memo, useRef, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import DetailPictures from './c-cpns/detail-pictures'
import Sidebar from './c-cpns/side-bar'
import TitleSection from './c-cpns/title-section'
import { DetailWrapper, ReviewCard } from './style'
import detail from '@/store/features/detail'

const Detail = memo((props) => {
  const descRef = useRef()
  const commentRef = useRef()
  const noticeRef = useRef()
  const [currentRef, setCurrentRef] = useState(null)

  const handleClick = (refName) => {
    setCurrentRef(refName)
    const ref = { descRef, commentRef, noticeRef }[refName]
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }

  const { detailInfo } = useSelector(
    (state) => ({
      detailInfo: state.detail.detailInfo,
    }),
    shallowEqual
  )
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: false, isHome: false }))
  }, [dispatch])

  const navItems = [
    { name: '详情', refName: 'descRef' },
    { name: '评价', refName: 'commentRef' },
    { name: '须知', refName: 'noticeRef' },
  ]
  return (
    <DetailWrapper>
      <DetailPictures pictureUrls={detailInfo.picture_urls} />
      <div className="detail-info">
        <nav>
          {navItems.map((item) => (
            <div
              key={item.refName}
              className={classNames({ active: currentRef === item.refName })}
              onClick={() => handleClick(item.refName)}
            >
              {item.name} {item.refName !== 'noticeRef' && '·'}
            </div>
          ))}
        </nav>
        <div className="room-info">
          <div className="left">
            <div className="desc" ref={commentRef}>
              <span className="verify-info">
                {JSON.parse(detailInfo.verify_info).messages.join('·')}
              </span>
              <TitleSection
                name={detailInfo.name}
                reviews_count={detailInfo.reviews_count}
              />
            </div>
            <hr></hr>
            <div className="comment" ref={commentRef}>
              <h2 className="comment-title">房客评价</h2>
              <ReviewCard>
                <div className="review-header">
                  <div className="avatar">
                    <img
                      src={detailInfo.reviews[0].reviewer_image_url}
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="name">Cici</p>
                    <p className="date">
                      {detailInfo.reviews[0].localized_date}
                    </p>
                  </div>
                </div>
                <p className="review-content">
                  {detailInfo.reviews[0].comments}
                </p>
              </ReviewCard>
            </div>
            <div className="notice">
              <h2 className="notice-title">预订须知</h2>
              <div className="notice-item">
                <h4 className="item-title">房屋守则</h4>
                <p className="item-description">不允许携带宠物</p>
                <p className="item-description">不允许举办派对和活动</p>
                <p className="item-description">禁止吸烟</p>
                <a href="#">房屋守则</a>
              </div>
              <div className="notice-item">
                <h4 className="item-title">取消政策</h4>
                <strong className="item-description">
                  添加入住退房日期后，可查看取消政策详情
                </strong>
              </div>
              <div className="notice-item">
                <h4 className="item-title">安全须知</h4>
                <p className="item-description">不适合儿童和婴儿入住</p>
                <p className="item-description">可能遇到有潜在危险的动物</p>
                <p className="item-description">附近的湖泊、河流、其他水体</p>
                <a href="#">阅读详情</a>
              </div>
              <div className="notice-item">
                <h4 className="item-title">安全预订</h4>
                <span className="item-description">
                  为了保护您的账号隐私及付款安全，请勿妄信第三方预订代理提供的折扣或礼金券，也不要在爱彼迎网站或App之外汇款或沟通。
                </span>
                <p className="item-description">附近的湖泊、河流、其他水体</p>
                <a href="#">阅读详情</a>
              </div>
            </div>
          </div>
          <div className="right">
            <Sidebar
              price={detailInfo.price}
              reviews_count={detailInfo.reviews_count}
            />
          </div>
        </div>
      </div>
    </DetailWrapper>
  )
})

Detail.propTypes = {}

export default Detail
