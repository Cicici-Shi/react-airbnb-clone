import styled from 'styled-components'

export const NoticeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  a {
    float: left;
  }

  .notice-item {
    flex-direction: row;
  }
  .notice-subtitle {
    width: 27%;
    float: left;
  }
  .notice-description {
    width: 73%;
    float: left;
    margin-bottom: 20px;
    p {
      margin-bottom: 20px;
      line-height: 1.2;
    }
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
`
