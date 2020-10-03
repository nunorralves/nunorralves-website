import React, { useContext } from 'react';
import { Container, StyledLink } from './styles';
import { LanguageContext } from '../../intl/LanguageProvider';
import useTranslation from '../../intl/useTranslation';

const languageSwither = currLang => {
  return currLang === 'en' ? 'pt' : 'en';
};

export const LanguageLink: React.FC = () => {
  const [locale, setLocale] = useContext(LanguageContext);
  const { translate } = useTranslation();

  return (
    <Container>
      <StyledLink onClick={() => setLocale(languageSwither(locale))}>
        {translate(languageSwither(locale))}
      </StyledLink>
      {/* <StyledSeparator>&nbsp;</StyledSeparator> */}
      {/* <Link href="">
        <StyledLink>{translate(locale)}</StyledLink>
      </Link> */}
    </Container>
  );
};
