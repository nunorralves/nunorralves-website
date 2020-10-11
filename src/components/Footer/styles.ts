import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  margin: 4rem auto 1rem auto;
  align-items: center;
  p {
    font-size: 0.8rem;
  }
`;

export const SocialMedia = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 32px);
  grid-gap: 10px;
  margin-bottom: 1rem;
`;

export const StyledLink = styled.a`
  color: ${props => props.theme.colors.textPrimary};
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  transition: scale 100ms ease-in-out;
`;

export const Linkedin = styled(FaLinkedin)`
  width: 32px;
  height: 32px;
  color: ${props => props.theme.colors.textPrimary};
  flex-shrink: 0;
`;
export const Github = styled(FaGithub)`
  width: 32px;
  height: 32px;
  color: ${props => props.theme.colors.textPrimary};
  flex-shrink: 0;
`;
export const Twitter = styled(FaTwitter)`
  width: 32px;
  height: 32px;
  color: ${props => props.theme.colors.textPrimary};
  flex-shrink: 0;
`;
export const Youtube = styled(FaYoutube)`
  width: 32px;
  height: 32px;
  color: ${props => props.theme.colors.textPrimary};
  flex-shrink: 0;
`;
