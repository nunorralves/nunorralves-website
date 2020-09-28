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
  const [prevSearchText, setPrevSearchText] = useState('');
  const router = useRouter();

  const updateSearch = async element => {
    element.preventDefault();
    // console.log('search ', element.target.value);
    setSearchText(element.target.value);
  };

  if (searchText !== '' && searchText !== prevSearchText) {
    // Required, since it causes a loop this call here
    setPrevSearchText(searchText);
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
              <h1>John Doe</h1>
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
