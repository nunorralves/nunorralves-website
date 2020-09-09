import {
  Container,
  HeroWrapper,
  Description,
  Photo,
  SocialMedia,
  Twitter,
  LinkedIn,
  Github,
  Email
} from './styles';

export const Hero: React.FC = () => {
  return (
    <Container>
      <HeroWrapper>
        <Description>
          <h1>Nuno Alves</h1>
          <h2>FullStack Developer</h2>
          <p>
            Father, Husband, Son, Developer, Manager, Maker...
            <br /> and whatever more i can get time to.
            <br />
            Passionate and eager to learn everyday!
          </p>
          <SocialMedia>
            <LinkedIn />
            <Github />
            <Twitter />
            <Email />
          </SocialMedia>
        </Description>
        <Photo src="photo3.jpg" />
      </HeroWrapper>
    </Container>
  );
};

export default Hero;
