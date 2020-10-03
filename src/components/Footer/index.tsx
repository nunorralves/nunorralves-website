import {
  FooterContainer,
  StyledLink,
  Github,
  Linkedin,
  SocialMedia,
  Twitter,
  Youtube
} from './styles';

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <SocialMedia>
        <StyledLink href="#">
          <Linkedin />
        </StyledLink>
        <StyledLink href="#">
          <Github />
        </StyledLink>
        <StyledLink href="#">
          <Twitter />
        </StyledLink>
        <StyledLink href="#">
          <Youtube />
        </StyledLink>
      </SocialMedia>
      <p>&#169;2020 John Doe - All rights reserved</p>
    </FooterContainer>
  );
};
