import styled from 'styled-components'

export const DetailWrapper = styled.div`
  color: #484848;
  hr {
    border: none; /* 移除默认边框 */
    border-top: 1px solid #ddd; /* 设置顶部边框 */
    margin: 20px 0; /* 设置上下边距 */
  }

  .detail-info {
    margin: 20px 0 0 50px;
  }
  nav {
    div {
      font-weight: 700;
      color: ${(props) => props.theme.color.secondaryColor};
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .room-info {
    display: flex;
    .verify-info {
      color: #585a3a;
      font-weight: 800;
      font-size: 13px;
    }
  }
  .comment-title,
  .notice-title {
    font-size: 1.5rem;
    margin: 30px 0;
  }
  .left {
    width: 58%;
  }
  .right {
    width: 33%;
    margin-left: 2rem;
  }
`
export const ReviewCard = styled.div`
  .avatar img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #ccc;
    margin-right: 10px;
  }

  .review-header {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    .name {
      font-weight: bold;
      margin-right: 5px;
      margin-bottom: 5px;
    }

    .date {
      font-size: 0.8rem;
      color: #666;
    }
  }

  .review-content {
    line-height: 1.4;
    color: #333;
  }
`
