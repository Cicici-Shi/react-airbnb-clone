/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from 'classnames'
import { changeHeaderConfigAction } from '@/store/features/main'
import React, { memo, useRef, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import DetailPictures from './c-cpns/detail-pictures'
import Sidebar from './c-cpns/side-bar'
import TitleSection from './c-cpns/title-section'
import RoomIcon from './c-cpns/room-icon'
import DetailNotice from './c-cpns/detail-notice'
import { DetailWrapper, ReviewCard } from './style'
import detail from '@/store/features/detail'
import Rating from '@mui/material/Rating'

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

    const handleScroll = () => {
      const sections = {
        descRef: descRef.current,
        commentRef: commentRef.current,
        noticeRef: noticeRef.current,
      }
      const scrollPosition = window.pageYOffset

      for (const refName in sections) {
        const ref = sections[refName]
        const offsetTop = ref.offsetTop
        const offsetHeight = ref.offsetHeight

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setCurrentRef(refName)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [dispatch])

  const navItems = [
    { name: '详情', refName: 'descRef' },
    { name: '评价', refName: 'commentRef' },
    { name: '须知', refName: 'noticeRef' },
  ]
  return (
    <DetailWrapper>
      <DetailPictures pictureUrls={detailInfo.picture_urls} />{' '}
      <nav>
        {navItems.map((item) => (
          <div
            key={item.refName}
            className={classNames({ active: currentRef === item.refName })}
            onClick={() => handleClick(item.refName)}
          >
            <span className="nav-name"> {item.name} </span>
            {item.refName !== 'noticeRef' && '·'}
          </div>
        ))}
      </nav>
      <div className="detail-info">
        <div className="room-info">
          <div className="left">
            <div className="desc" ref={descRef}>
              <span className="verify-info">
                {JSON.parse(detailInfo.verify_info).messages.join('·')}
              </span>
              <TitleSection
                name={detailInfo.name}
                reviews_count={detailInfo.reviews_count}
              />
            </div>
            <hr />
            <RoomIcon />
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
                <hr />
                <a href="#">房东收到的其他评价</a>
              </ReviewCard>
            </div>
            <div className="notice" ref={noticeRef}>
              <h2 className="notice-title">预订须知</h2>
              <DetailNotice />
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
      <footer>
        <div className="footer-left">
          <div className="price">
            ￥{detailInfo.price} <span>/晚</span>
          </div>
          <div className="rating">
            <Rating
              readOnly
              value={5}
              precision={0.1}
              size="small"
              sx={{ fontSize: '12px', color: '#00848A' }}
            />
            <div className="rating-info">{`${detailInfo.reviews_count}条`}</div>
          </div>
        </div>
        <button className="booking-btn">查看可订状态</button>
      </footer>
    </DetailWrapper>
  )
})

Detail.propTypes = {}

export default Detail
