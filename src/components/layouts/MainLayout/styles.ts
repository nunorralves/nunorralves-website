import styled from 'styled-components';

export const MainLayoutContainer = styled.main`
  // Adjustement due to sticky header & navbar - START
  padding-top: 8rem;

  @media only screen and (max-width: 500px) {
    padding-top: 12rem;
  }
  // Adjustement due to sticky header & navbar - END

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: space-between; */

  padding: 8rem 1rem 0 1rem;

  margin: 0 auto;
  min-height: 100vh;
  max-width: 900px;
`;
