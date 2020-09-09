import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  width: 100%;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.15);
  background: ${props => props.theme.colors.header};
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  max-width: 70rem;
  width: 70rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 15px 20px;
  flex-flow: wrap;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  flex-shrink: 0;

  @media only screen and (max-width: 600px) {
    margin-bottom: 20px;
  }
`;

export const LogoText = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;

  h1 {
    color: ${props => props.theme.colors.text};
    margin: 0;
    padding: 0;
    font-size: 2rem;
    letter-spacing: 0.15rem;
  }

  span {
    color: ${props => props.theme.colors.text};
    font-size: 0.8rem;
    letter-spacing: 0.1rem;
  }
`;

export const SearchForm = styled.form`
  margin: 0;
  padding: 0;
  /* width: 100%; */

  input {
    background: ${props => props.theme.colors.header};
    color: ${props => props.theme.colors.text};
    outline: 0;
    border: 1px solid ${props => props.theme.colors.text};
    border-radius: 6px;
    padding: 7px 12px;
    width: 200px;
    font-style: italic;

    &:focus {
      width: 300px;
    }

    transition: width 200ms ease-out;
  }

  @media only screen and (max-width: 600px) {
    margin-bottom: 10px;
  }
`;

export const StyledLink = styled.a`
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  /* text-decoration: none; */

  /* &:hover {
    font-weight: 600;
  }

  transition: font-weight 100ms ease-in-out; */
  &:hover {
    transform: scale(1.1);
  }

  transition: scale 100ms ease-in-out;
`;
