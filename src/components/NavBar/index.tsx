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

type NavBarProps = {
  toggleTheme(): void;
};

const NavBar: React.FC<NavBarProps> = ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext);

  return (
    <ContainerNav>
      <Link href="/">
        <LogoStyledLink>John Doe</LogoStyledLink>
      </Link>
      <NavWrapper>
        <Link href="/blog">
          <StyledLink>Blog</StyledLink>
        </Link>
        <Link href="/#">
          <StyledLink>About</StyledLink>
        </Link>
        <StyledLink onClick={toggleTheme}>
          {title === 'light' ? <ThemeSwitcherMoon /> : <ThemeSwitcherSun />}
        </StyledLink>
      </NavWrapper>
    </ContainerNav>
  );
};

export default NavBar;
