import React, { useContext } from 'react';
import { Container, StyledLink } from './styles';
import { LanguageContext } from '../../intl/LanguageProvider';

const languageSwither = currLang => {
  return currLang === 'en' ? 'pt' : 'en';
};

export const LanguageLink: React.FC = () => {
  const [locale, setLocale] = useContext(LanguageContext);

  return (
    <Container>
      <StyledLink onClick={() => setLocale(languageSwither(locale))}>
        {languageSwither(locale).toUpperCase()}
      </StyledLink>
    </Container>
  );
};
