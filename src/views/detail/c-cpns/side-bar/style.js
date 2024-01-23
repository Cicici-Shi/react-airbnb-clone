import styled from 'styled-components'

export const SidebarContainer = styled.div`
  position: sticky;
  max-width: 20rem; // Example width, adjust as needed
  padding: 1.25rem;
  background-color: #fff;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  overflow: hidden;
  right: 2rem;
  top: 1rem;
  z-index: 10;

  .flex {
    display: flex;
  }
  .items-center {
    align-items: center;
    gap: 5px;
  }

  .price {
    font-size: 1.125rem;
    font-weight: 500;
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
