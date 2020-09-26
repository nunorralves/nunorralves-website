import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import {
  Container,
  HeaderContainer,
  LogoText,
  SearchForm,
  StyledLink
} from './styles';

const Header: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const router = useRouter();

  const updateSearch = async element => {
    element.preventDefault();
    // console.log('search ', element.target.value);
    setSearchText(element.target.value);
  };

  if (searchText !== '') {
    router.push({
      pathname: '/blog',
      query: { search: searchText }
    });
  }

  return (
    <Container>
      <HeaderContainer>
        <Link href="/">
          <StyledLink onClick={() => setSearchText('')}>
            <LogoText>
              <h1>nunoalves</h1>
            </LogoText>
          </StyledLink>
        </Link>
        <SearchForm>
          <input
            onChange={updateSearch}
            type="text"
            placeholder="Search Blog Posts..."
            value={searchText}
          />
        </SearchForm>
        <Link href="/blog">
          <StyledLink onClick={() => setSearchText('')}>Blog</StyledLink>
        </Link>
      </HeaderContainer>
    </Container>
  );
};

export default Header;
