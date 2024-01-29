import React from 'react'
import { NavbarSkeletonWrapper } from './style'

const NavbarSkeleton = () => {
  return (
    <NavbarSkeletonWrapper>
      <div className="logo-skeleton"></div>
      <div className="search-skeleton"></div>
      <div className="icon-skeleton-container">
        <div className="icon-skeleton"></div>
        <div className="icon-skeleton"></div>
        <div className="icon-skeleton"></div>
      </div>
    </NavbarSkeletonWrapper>
  )
}

export default NavbarSkeleton
