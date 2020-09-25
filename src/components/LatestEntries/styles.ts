import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const LatestWrapper = styled.div`
  max-width: 70rem;
  width: 70rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: top;
  padding-bottom: 25px;
  border-bottom: 1px solid lightgray;
  margin: 15px 20px;

  h1 {
    color: ${props => props.theme.colors.text};
    font-weight: 600;
    font-size: 1.6rem;
  }
`;

export const CardsWrapper = styled.div`
  /* width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  margin-top: 15px;
*/
  /* @media only screen and (max-width: 500px) {
    flex-direction: column;
  } */

  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

export const StyledLink = styled.a``;
