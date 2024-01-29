import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  padding: 16px;

  .item-skeleton {
    padding: 8px;

    .image-skeleton {
      height: 200px;
    }

    .title-skeleton {
      margin-top: 8px;
      height: 30px;
      width: 80%;
    }

    .text-skeleton {
      margin-top: 8px;
      height: 14px;
      width: 60%;
    }
  }
`
