import { Post } from '../../lib/api';
import {
  blogReadingTime,
  reformatDate,
  truncateBlogSummary
} from '../../utils';
import { Container, PostContainer, PostImage, Tags, Tag } from './styles';

type CardListProps = {
  post: Post;
};
const CardList: React.FC<CardListProps> = ({ post }) => {
  return (
    <Container>
      <PostImage src={`/${post.coverImage}`} alt="" />
      <PostContainer>
        <h2>{post.title}</h2>
        <h3>
          {reformatDate(post.date)} &middot; {blogReadingTime(post.content)}
        </h3>
        <p>
          {/* <ReactMarkdown source={truncateSummary(post.markdownBody)} /> */}
          {truncateBlogSummary(post.excerpt, 100)}
        </p>
        <Tags>
          {post.tags &&
            post.tags.map(tag => {
              return <Tag key={tag}>{tag}</Tag>;
            })}
        </Tags>
      </PostContainer>
    </Container>
  );
};

export default CardList;
