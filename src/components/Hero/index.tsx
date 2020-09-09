import {
  Container,
  HeroWrapper,
  Description,
  Photo,
  SocialMedia,
  Twitter,
  LinkedIn,
  Github,
  Email,
  StyledLink
} from './styles';

export const Hero: React.FC = () => {
  return (
    <Container>
      <HeroWrapper>
        <Description>
          <h1>Nuno Alves</h1>
          <h2>FullStack Developer</h2>
          <p>
            Father, Husband, Son, SW Developer and Manager, Maker...
            <br /> and whatever more i can get time to.
            <br />
            Passionate and eager to learn everyday!
          </p>
          <SocialMedia>
            <StyledLink>
              <LinkedIn />
            </StyledLink>
            <StyledLink href="https://github.com/nunorralves">
              <Github />
            </StyledLink>
            <StyledLink>
              <Twitter />
            </StyledLink>
            <StyledLink>
              <Email />
            </StyledLink>
          </SocialMedia>
        </Description>
        <Photo src="photo.jpg" />
      </HeroWrapper>
    </Container>
  );
};

export default Hero;
