import React, { memo } from 'react'
import WifiIcon from '@mui/icons-material/Wifi'
import DiningIcon from '@mui/icons-material/Restaurant'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'
import PoolIcon from '@mui/icons-material/Pool'
import PlusIcon from '@mui/icons-material/Add'
import { InfoContainer, IconContainer } from './style'

export default memo(function index() {
  return (
    <IconContainer>
      <InfoContainer>
        <div className="info-section">
          <div className="info-title">整套房源</div>
          <div className="info-content">独享所有空间，无需与他人共用</div>
        </div>
        <div className="info-section">
          <div className="info-title">超赞房东</div>
          <div className="info-content">
            超赞房东经验丰富、评分高，致力于为房客提供优质的住宿体验。
          </div>
        </div>
        <div className="info-section">
          <div className="info-title">入住/退房</div>
          <div className="info-content">
            入住时间 下午2:00后、退房时间 上午11:00
          </div>
        </div>
        <div className="info-section">
          <div className="info-title">自助入住</div>
          <div className="info-content">通过密码钥匙盒自助入住 </div>
        </div>
      </InfoContainer>
      <hr />
      <div className="footer">
        <div className="icon-text">
          <WifiIcon /> <p>无线网络</p>
        </div>
        <div className="icon-text">
          <DiningIcon /> <p>厨房</p>
        </div>
        <div className="icon-text">
          <FitnessCenterIcon /> <p>健身房</p>
        </div>
        <div className="icon-text">
          <PoolIcon /> <p>泳池</p>
        </div>
        <div
          className="icon-text"
          style={{ cursor: 'pointer', color: '#00848a', fontWeight: 700 }}
        >
          <PlusIcon /> <p>更多设施</p>
        </div>
      </div>
    </IconContainer>
  )
})
