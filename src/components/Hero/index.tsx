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
          <h1>John Doe</h1>
          <h2>FullStack Developer</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At
            repudiandae id repellendus maxime architecto inventore esse rerum
            nobis, consectetur, laborum veniam neque, deleniti obcaecati
            doloremque amet temporibus magni et quod. <br />
            Electronics, IOT, Robotics, Neural Networks...
          </p>
          <SocialMedia>
            <StyledLink href="#">
              <LinkedIn />
            </StyledLink>
            <StyledLink href="#">
              <Github />
            </StyledLink>
            <StyledLink href="#">
              <Twitter />
            </StyledLink>
            <StyledLink href="#">
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
