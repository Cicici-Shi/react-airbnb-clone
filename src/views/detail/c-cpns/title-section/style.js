import styled from 'styled-components'

export const TitleSection = styled.section`
  .title {
    font-size: 2em;
    font-weight: 700;
    color: #484848;
    margin: 10px 0 20px;
  }

  .badges {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5em;
    margin-top: 1em;

    .badge {
      background-color: #f2f2f2;
      padding: 0.5em 1em;
      border-radius: 20px;
      font-size: 0.8em;
      font-weight: 700;
      color: #333;
    }
    .highlight {
      background-color: rgb(247, 243, 234);
      color: rgb(110, 72, 0);
    }
  }
`
