import Link from 'next/link';
import {
  ContainerNav,
  LogoStyledLink,
  NavWrapper,
  StyledLink,
  ThemeSwitcherMoon,
  ThemeSwitcherSun
} from './styles';
import { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import siteConfig from '../../../site.config';
import useTranslation from '../../intl/useTranslation';
import { LanguageLink } from '../LanguageLink';

type NavBarProps = {
  toggleTheme(): void;
};

const NavBar: React.FC<NavBarProps> = ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext);

  const { translate } = useTranslation();

  return (
    <ContainerNav>
      <Link href="/">
        <LogoStyledLink>{siteConfig.site_name}</LogoStyledLink>
      </Link>
      <NavWrapper>
        <Link href="/blog">
          <StyledLink>{translate('blog')}</StyledLink>
        </Link>
        <Link href="/#">
          <StyledLink>{translate('about')}</StyledLink>
        </Link>
        <StyledLink onClick={toggleTheme}>
          {title === 'light' ? <ThemeSwitcherMoon /> : <ThemeSwitcherSun />}
        </StyledLink>
        <LanguageLink />
      </NavWrapper>
    </ContainerNav>
  );
};

export default NavBar;
