import styled from 'styled-components'

export const DetailWrapper = styled.div`
  color: #484848;
  font-size: 1rem;

  hr {
    border: none;
    border-top: 1px solid #ddd;
    margin: 30px 0;
  }
  a {
    color: #00848a;
    font-weight: bold;
    text-decoration: underline;
    float: right;
  }

  .detail-info {
    margin: 20px 50px 0;
  }
  nav {
    display: flex;
    font-weight: 700;
    margin: 20px 0;
    padding: 10px 0 10px 50px;
    position: sticky;
    top: 0;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    z-index: 99;
    div {
      margin-right: 10px;
      cursor: pointer;
    }
    .active .nav-name {
      border-bottom: 3px solid #333;
      color: #333;
    }
  }
  .nav-name {
    padding: 8px 0;
    color: ${(props) => props.theme.color.secondaryColor};
    width: 60%;
    &:hover {
      text-decoration: underline;
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
    margin: 80px 0 30px;
  }
  .left {
    width: 58%;
  }
  .right {
    width: 33%;
    padding-left: 5%;
  }
  .price {
    font-size: 1.125rem;
    font-weight: 700;
  }

  .price span {
    font-size: 0.875rem;
  }

  .rating {
    display: flex;
    align-items: center;
    margin-top: 0.5rem;
  }

  .rating-info {
    color: #4b5563;
    margin-left: 0.5rem;
  }

  .booking-btn {
    margin-top: 1rem;
    width: 100%;
    background-color: #ef4444;
    color: #fff;
    padding: 0.75rem;
    border-radius: 0.375rem;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #dc2626;
    }

    &:focus {
      outline: none;
      ring: 2px;
      ring-color: #ef4444;
      ring-opacity: 50%;
    }
  }
  footer {
    display: none;
  }
  @media screen and (max-width: 768px) {
    footer {
      display: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100vw;
      height: 100px;
      background-color: #fff;
      position: fixed;
      bottom: 0;
      border-top: 1px solid #ddd;
      z-index: 100;
      .footer-left {
        margin-left: 50px;
      }
      .booking-btn {
        width: 158px;
        height: 50px;
        margin-right: 50px;
      }
    }
    .right {
      display: none;
    }
    .left {
      width: 100%;
    }
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
    margin: 25px 0;
  }
`
