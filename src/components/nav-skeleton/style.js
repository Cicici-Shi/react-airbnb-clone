import styled from 'styled-components'

export const NavbarSkeletonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: #fff;

  .logo-skeleton {
    width: 100px;
    height: 20px;
    background-color: #e0e0e0;
    border-radius: 4px;
  }

  .search-skeleton {
    width: 300px;
    height: 40px;
    background-color: #e0e0e0;
    border-radius: 20px;
  }

  .icon-skeleton-container {
    display: flex;
    align-items: center;

    .icon-skeleton {
      width: 24px;
      height: 24px;
      background-color: #e0e0e0;
      border-radius: 50%;
      margin-right: 8px;

      &:last-child {
        margin-right: 0;
      }
    }
  }
`
