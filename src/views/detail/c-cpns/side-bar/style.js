import styled from 'styled-components'

export const SidebarContainer = styled.div`
  position: sticky;
  max-width: 20rem;
  padding: 1.25rem;
  background-color: #fff;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  overflow: hidden;
  top: 50px;
  z-index: 10;

  .flex {
    display: flex;
  }
  .items-center {
    align-items: center;
    gap: 5px;
  }

  .date-picker,
  .guest-picker {
    margin-top: 1rem;
  }

  .date-picker input[type='text'],
  .guest-picker select {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #d1d5db;
    border-radius: 0.375rem;
    margin-top: 0.25rem;
  }

  .guest-picker {
    position: relative;
  }

  .details {
    margin-top: 1rem;
    font-size: 0.875rem;
    color: #4b5563;

    p {
      margin: 10px 0;
    }
  }

  .details a {
    color: #00848a;
    text-decoration: none;

    &:hover {
      color: #00848a;
      text-decoration: underline;
    }
  }
`
