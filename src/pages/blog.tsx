import { getAllPosts, Post } from './api/api';
import { GetStaticProps } from 'next';
import styled from 'styled-components';
import { PostsList } from '../components/PostsList';
import { useState } from 'react';

type BlogProps = {
  allPosts: Post[];
};

const StyledH1 = styled.h1`
  font-size: 2.25rem;
  line-height: 1.25;
  margin: 1rem 0;
  font-weight: 600;
`;

const StyledP = styled.p`
  line-height: 1.25;
  color: ${props => props.theme.colors.textPrimary};
`;

const StyledInput = styled.input`
  width: 100%;
  margin: 1rem 0;
  border: 2px solid ${props => props.theme.colors.textSecondary};
  padding: 6px;
  border-radius: 6px;
  outline: 0;

  &:focus,
  &:hover {
    border: 2px solid ${props => props.theme.colors.textTertiary};
  }
`;

// const mostPopular: Post[] = (allPosts: Post[]) => {
//   return allPosts;
// };

const Blog: React.FC<BlogProps> = ({ allPosts }: BlogProps) => {
  const [searchvalue, setSearchValue] = useState('');

  const filteredBlogPosts = allPosts
    .sort((post1, post2) => (post1.date >= post2.date ? -1 : 1))
    .filter(
      post =>
        post.title.toLowerCase().includes(searchvalue) ||
        post.excerpt.toLowerCase().includes(searchvalue) ||
        post.tags.toString().toLowerCase().includes(searchvalue)
    );

  return (
    <section>
      <StyledH1>Blog</StyledH1>
      <StyledP>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque at
        explicabo quia odit. Numquam nemo qui cupiditate.{' '}
      </StyledP>
      <StyledInput
        aria-label="Search articles"
        type="text"
        onChange={e => setSearchValue(e.target.value)}
        placeholder="Search articles by title, excerpt or tag"
      />
      {/* <PostsList title={'Most Popular'} posts={mostPopular(allPosts)} />
      <br /> */}
      {(!filteredBlogPosts.length && 'No posts found.') ||
        (filteredBlogPosts.length && (
          <PostsList title={'All Posts'} posts={filteredBlogPosts} />
        ))}
    </section>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPosts: Post[] = getAllPosts();

  return {
    props: { allPosts }
  };
};

export default Blog;
