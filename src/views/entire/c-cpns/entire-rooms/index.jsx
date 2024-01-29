import RoomItem from '@/components/room-item'
import { changeDetailInfoActon } from '@/store/features/detail'
import React, { memo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RoomsWrapper } from './style'
import EntireSkeleton from '../entire-skeleton'

const EntireRooms = memo(() => {
  const { roomList, isLoading } = useSelector(
    (state) => ({
      roomList: state.entire.roomList,
      isLoading: state.entire.isLoading,
    }),
    shallowEqual
  )

  const navitate = useNavigate()
  const dispatch = useDispatch()
  function handleItemClick(item) {
    navitate('/detail')
    dispatch(changeDetailInfoActon(item))
  }

  return (
    <RoomsWrapper>
      <div className="list">
        {isLoading ? (
          <EntireSkeleton />
        ) : roomList.length > 0 ? (
          roomList.map((item) => {
            return (
              <RoomItem
                itemData={item}
                itemWidth="20%"
                key={item.id}
                itemClick={(e) => handleItemClick(item)}
              />
            )
          })
        ) : (
          <div>暂无数据</div>
        )}
      </div>
    </RoomsWrapper>
  )
})

export default EntireRooms
