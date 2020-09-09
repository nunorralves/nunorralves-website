import Link from 'next/link';
import {
  Container,
  HeaderContainer,
  Logo,
  SearchForm,
  LogoText,
  StyledLink
} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <HeaderContainer>
        <Logo>
          {/* <LogoImg /> */}
          <LogoText>
            <h1>nunoalves</h1>
            {/* <span>developer journal</span> */}
          </LogoText>
        </Logo>

        {/* <NavigationBar>
        <ul>
        <li>
        <Link href={{ pathname: '/' }}>
        <a href="">Home</a>
        </Link>
        </li>
        <li>
        <Link href={{ pathname: '/' }}>
        <a href="">Blog</a>
        </Link>
        </li>
        <li>
        <Link href={{ pathname: '/' }}>
        <a href="">Acerca</a>
        </Link>
        </li>
        </ul>
      </NavigationBar> */}
        <SearchForm>
          <input type="text" placeholder="Search Blog Posts..." />
        </SearchForm>
        <Link href="/blog">
          <StyledLink>Blog</StyledLink>
        </Link>
      </HeaderContainer>
    </Container>
  );
};

export default Header;
