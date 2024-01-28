import styled from 'styled-components'

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0;
  .info-section {
    margin-bottom: 16px;
  }

  .info-title {
    font-size: 1.3em;
    font-weight: bold;
    width: 26%;
    float: left;
  }

  .info-content {
    font-size: 1.1em;
    width: 73%;
    float: left;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
`

export const IconContainer = styled.div`
  .footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 14px;
    margin: 30px 0;

    .icon-text {
      display: flex;
      flex-direction: column;
      flex: 1;
      align-items: center;

      svg {
        margin-bottom: 10px;
        font-size: 30px;
      }
    }
  }
`
