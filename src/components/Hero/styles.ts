import styled from 'styled-components';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { CgMail } from 'react-icons/cg';

export const Container = styled.div`
  max-width: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const HeroWrapper = styled.div`
  max-width: 70rem;
  width: 70rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 300px;
  margin: 15px 20px;
  border-bottom: 1px solid lightgray;

  @media only screen and (max-width: 500px) {
    flex-direction: column-reverse;
    height: 100%;
  }
`;

export const Description = styled.div`
  width: 50%;
  color: ${props => props.theme.colors.text};
  h1 {
    font-size: 2rem;
    font-weight: 600;
  }
  h2 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 20px;
  }

  @media only screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const SocialMedia = styled.div`
  margin: 40px 0 0 0;
  display: grid;
  grid-template-columns: repeat(6, 32px);
  grid-gap: 10px;

  @media only screen and (max-width: 500px) {
    margin-bottom: 20px;
  }
`;

export const LinkedIn = styled(FaLinkedin)`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
`;
export const Twitter = styled(FaTwitter)`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
`;
export const Github = styled(FaGithub)`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
`;
export const Email = styled(CgMail)`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
`;

export const Photo = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  /* box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.585); */

  @media only screen and (max-width: 500px) {
    margin: 20px 0;
  }
`;

export const StyledLink = styled.a`
  color: ${props => props.theme.colors.text};
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  transition: scale 100ms ease-in-out;
`;
