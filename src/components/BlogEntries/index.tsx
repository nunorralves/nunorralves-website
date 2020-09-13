import {
  blogReadingTime,
  reformatDate,
  truncateBlogSummary
} from '../../utils';
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

const BlogEntries: React.FC = ({ posts, categories, tags }) => {
  return (
    <Container>
      <BlogEntriesWrapper>
        <BlogEntriesList>
          {posts.map(post => {
            return (
              <CardList
                key={post.title}
                post={{
                  image: post.image,
                  title: post.title,
                  date: reformatDate(post.date),
                  readingTime: blogReadingTime(post.content),
                  summary: truncateBlogSummary(post.content, 100)
                }}
              />
            );
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
