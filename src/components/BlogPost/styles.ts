import styled from 'styled-components';
import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaWhatsapp,
  FaReddit
} from 'react-icons/fa';
import { FcLike } from 'react-icons/fc';

export const ContainerArticle = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  /* padding: 1rem; */

  h1 {
    font-size: 3rem;
    line-height: 1.5;
    font-weight: 600;
  }

  h3 {
    font-size: 1.5rem;
    line-height: 1.25;
    font-weight: 400;
    margin-bottom: 1rem;
  }

  h4,
  h5,
  span {
    color: ${props => props.theme.colors.textSecondary};
    font-weight: 400;
    font-size: 1rem;
    line-height: 1rem;
  }


  }

  h5 {
    font-size: 0.8rem;
    line-height: 0.8rem;
  }

  p {
    margin-top: 5px;
  }
`;

export const SubTitle = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 10px 0;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 0;
  }
`;

export const SubTitleAuthor = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 500px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const ViewsLikesContainer = styled.div`
  @media only screen and (max-width: 500px) {
    margin-top: 15px;
  }
`;

export const AuthorImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  /* box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.585); */
  margin-right: 10px;
`;

export const SubTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Tags = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  margin-top: 5px;
`;

export const SocialMedia = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 24px);
  grid-gap: 5px;
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
  width: 24px;
  height: 24px;
  color: ${props => props.theme.colors.textTertiary};
  flex-shrink: 0;
`;
export const Twitter = styled(FaTwitter)`
  width: 24px;
  height: 24px;
  color: ${props => props.theme.colors.textTertiary};
  flex-shrink: 0;
`;
export const Facebook = styled(FaFacebook)`
  width: 24px;
  height: 24px;
  color: ${props => props.theme.colors.textTertiary};
  flex-shrink: 0;
`;
export const Whatsapp = styled(FaWhatsapp)`
  width: 24px;
  height: 24px;
  color: ${props => props.theme.colors.textTertiary};
  flex-shrink: 0;
`;
export const Reddit = styled(FaReddit)`
  width: 24px;
  height: 24px;
  color: ${props => props.theme.colors.textTertiary};
  flex-shrink: 0;
`;

export const FeedbackLikes = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Like = styled(FcLike)`
  width: 20x;
  height: 20px;
  flex-shrink: 0;
  margin-left: 5px;

  &:hover {
    transform: scale(1.1);
  }
`;
