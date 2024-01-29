import React from 'react'
import { Wrapper } from './style'
import Skeleton from '@mui/material/Skeleton'

const EntireSkeleton = () => {
  return (
    <Wrapper>
      {Array.from(new Array(10)).map((_, index) => (
        <div className="item-skeleton" key={index}>
          <Skeleton variant="rectangular" className="image-skeleton" />{' '}
          <Skeleton variant="text" className="text-skeleton" />
          <Skeleton variant="text" className="title-skeleton" />
          {Array.from(new Array(2)).map((_, subIndex) => (
            <Skeleton key={subIndex} variant="text" className="text-skeleton" />
          ))}
        </div>
      ))}
    </Wrapper>
  )
}

export default EntireSkeleton
