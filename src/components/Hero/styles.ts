import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    ),
    url('/images/hero6.jpg');
  border-radius: 5px;
  margin-top: 20px;
`;

export const HeroWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Description = styled.div`
  width: 50%;
  color: ${props => props.theme.colors.white};
  padding: 2rem;

  h1 {
    font-size: 3rem;
    font-weight: 600;
  }
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 20px;
    @media only screen and (max-width: 320px) {
      margin-top: 1rem;
    }
  }

  p {
    @media only screen and (max-width: 320px) {
      display: none;
    }
  }
  @media only screen and (max-width: 700px) {
    width: 100%;
  }
`;
