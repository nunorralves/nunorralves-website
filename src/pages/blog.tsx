import styled from 'styled-components';
import { useState } from 'react';
import { NextSeo } from 'next-seo';
import siteConfig from '../../site.config';
import { frontMatter as blogPosts } from './blog/**/*.mdx';
import { PostsList } from '../components/PostsList';
import useTranslation from '../intl/useTranslation';

// Updated on 2021-06-08
const Blog: React.FC = () => {
  const { translate } = useTranslation();
  const URL = `${siteConfig.url}/blog`;
  const TITLE = `${translate('blog_page_title')} - ${siteConfig.title}`;
  const DESCRIPTION = `${translate('blog_page_description')}`;
  const [searchvalue, setSearchValue] = useState('');

  const filteredBlogPosts = blogPosts
    .filter(post => post.status === 'published')
    ?.sort((post1, post2) => (post1.date >= post2.date ? -1 : 1))
    .filter(
      post =>
        post.title.toLowerCase().includes(searchvalue) ||
        post.excerpt.toLowerCase().includes(searchvalue) ||
        post.tags.toString().toLowerCase().includes(searchvalue)
    );
  const numPosts = filteredBlogPosts?.length ?? 0;
  const tags = blogPosts?.map(bp => bp.tags) ?? [];

  const handleOnSearch = e => {
    e.preventDefault();

    setSearchValue(e.target.value);
  };

  return (
    <>
      <NextSeo
        title={TITLE}
        description={DESCRIPTION}
        canonical={URL}
        additionalMetaTags={[
          {
            property: 'keywords',
            content: tags.toString()
          }
        ]}
        openGraph={{
          url: URL,
          title: TITLE,
          description: DESCRIPTION
        }}
      />
      <section>
        <StyledH1>{translate('blog')}</StyledH1>
        <StyledTextDiv>
          {translate('blog_description')
            .split('\n')
            .map((item, i) => (
              <StyledP key={i}>{item}</StyledP>
            ))}
        </StyledTextDiv>
        <StyledInput
          aria-label="Search articles"
          type="text"
          onChange={handleOnSearch}
          placeholder={translate('blog_search_placeholder')}
        />
        {filteredBlogPosts && (
          <PostsList
            title={translate('all_posts')}
            subTitle={
              numPosts > 0
                ? `${numPosts} ${translate('articles')} ${translate('found')}`
                : ''
            }
            postsMetadata={filteredBlogPosts}
          />
        )}
      </section>
    </>
  );
};

const StyledH1 = styled.h1`
  font-size: 2.25rem;
  line-height: 1.25;
  margin: 1rem 0;
  font-weight: 600;
`;

const StyledTextDiv = styled.div`
  color: ${props => props.theme.colors.textPrimary};
  text-align: justify;
`;

const StyledP = styled.p`
  line-height: 1.25;
  margin-bottom: 1rem;
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

export default Blog;
