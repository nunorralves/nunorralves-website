import styled from 'styled-components';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ContainerNav = styled.nav`
  background-color: ${props => props.theme.colors.navBackground};

  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2rem 1rem;

  @media only screen and (max-width: 500px) {
    flex-direction: column;
    row-gap: 1rem;
  }
`;

export const LogoStyledLink = styled.a`
  font-size: 2.5rem;
  letter-spacing: 0.15rem;
  font-weight: 600;
  text-decoration: none;
  color: ${props => props.theme.colors.textPrimary};

  &:hover {
    cursor: pointer;
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLink = styled.a`
  font-size: 1rem;
  padding: 0 1rem;
  line-height: 2.5rem;
  border-radius: ${props => props.theme.borderRadius};
  text-decoration: none;
  color: ${props => props.theme.colors.textPrimary};

  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.colors.navItemsBackground};
  }
`;

export const ThemeSwitcherMoon = styled(FaMoon)`
  width: 20px;
  height: 20px;
  color: ${props => props.theme.colors.textTertiary};
  flex-shrink: 0;
  vertical-align: middle;
`;

export const ThemeSwitcherSun = styled(FaSun)`
  width: 20px;
  height: 20px;
  color: ${props => props.theme.colors.textTertiary};
  flex-shrink: 0;
  vertical-align: middle;
`;
