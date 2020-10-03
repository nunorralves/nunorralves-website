import { Container, HeroWrapper, Description } from './styles';

export const Hero: React.FC = () => {
  return (
    <Container>
      <HeroWrapper>
        <Description>
          <h1>John Doe</h1>
          <h2>FullStack Developer & Engineering Manager</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At
            repudiandae id repellendus maxime architecto inventore esse rerum
            nobis, consectetur, laborum veniam neque, deleniti obcaecati
            doloremque amet temporibus magni et quod. <br />
          </p>
        </Description>
      </HeroWrapper>
    </Container>
  );
};

export default Hero;
