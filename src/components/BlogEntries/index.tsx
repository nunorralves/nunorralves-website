import Link from 'next/link';
import { Post } from '../../lib/api';
import CardList from '../CardList';
import {
  BlogEntriesList,
  BlogEntriesWrapper,
  Categories,
  Category,
  Container,
  SideBar,
  Tag,
  Tags,
  StyledLink
} from './styles';

export interface IBlogEntriesProps {
  posts: Post[];
  categories: string[];
  tags: string[];
}

const BlogEntries: React.FC<IBlogEntriesProps> = ({
  posts,
  categories,
  tags
}) => {
  return (
    <Container>
      <BlogEntriesWrapper>
        <BlogEntriesList>
          {posts.map(post => (
            <Link key={post.title} href={`/posts/${post.slug}`}>
              <StyledLink>
                <CardList post={post} />
              </StyledLink>
            </Link>
          ))}
          {/* <PaginationButtons>
            <StyledButton onClick={previousPage}>&#8249; Prev</StyledButton>
            <StyledButton onClick={nextPage}>Next &#8250;</StyledButton>
          </PaginationButtons> */}
        </BlogEntriesList>
        <SideBar>
          <h1>Categories</h1>
          <Categories>
            {categories &&
              categories.map(category => {
                return (
                  <Category key={category}>
                    {/* <Link href={`blog?category=${category}`}> */}
                    <Link href={`/categories/${category}`}>
                      <StyledLink>{category}</StyledLink>
                    </Link>
                  </Category>
                );
              })}
          </Categories>
          <h1>Tags</h1>
          <Tags>
            {tags &&
              tags.map(tag => {
                return (
                  <Tag key={tag}>
                    {/* <Link href={`blog?tag=${tag}`}> */}
                    <Link href={`/tags/${tag}`}>
                      <StyledLink>{tag}</StyledLink>
                    </Link>
                  </Tag>
                );
              })}
          </Tags>
        </SideBar>
      </BlogEntriesWrapper>
    </Container>
  );
};

export default BlogEntries;
