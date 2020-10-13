import Link from 'next/link';
import {
  ContainerNav,
  LogoStyledImg,
  LogoStyledLink,
  NavWrapper,
  StyledLink,
  StyledLogo,
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
      <Link href="/" passHref>
        <LogoStyledLink>
          <StyledLogo>
            <LogoStyledImg
              src={siteConfig.site_logo}
              alt={siteConfig.site_name}
            />
            {siteConfig.site_name.replace(' ', '').toLowerCase()}
          </StyledLogo>
        </LogoStyledLink>
      </Link>
      <NavWrapper>
        <Link href="/blog" passHref>
          <StyledLink>{translate('blog')}</StyledLink>
        </Link>
        <Link href="/about" passHref>
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
