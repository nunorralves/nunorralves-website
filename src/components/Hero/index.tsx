import { Container, HeroWrapper, Description } from './styles';
import useTranslation from '../../intl/useTranslation';

export const Hero: React.FC = () => {
  const { translate } = useTranslation();

  return (
    <Container>
      <HeroWrapper>
        <Description>
          <h1>{translate('hero_name')}</h1>
          <h2>{translate('hero_name_role')}</h2>
          <p>
            {translate('hero_name_description')} <br />
          </p>
        </Description>
      </HeroWrapper>
    </Container>
  );
};

export default Hero;
