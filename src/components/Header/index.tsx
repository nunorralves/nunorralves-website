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
          <LogoText>
            <h1>nunoalves</h1>
          </LogoText>
        </Logo>
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
