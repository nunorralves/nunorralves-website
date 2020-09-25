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

interface IBlogEntriesProps {
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
          {posts.map(post => {
            return <CardList key={post.title} post={post} />;
          })}
        </BlogEntriesList>
        <SideBar>
          <h1>Categories</h1>
          <Categories>
            {categories &&
              categories.map(category => {
                return (
                  <Category key={category}>
                    <StyledLink>{category}</StyledLink>
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
                    <StyledLink>{tag}</StyledLink>
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
