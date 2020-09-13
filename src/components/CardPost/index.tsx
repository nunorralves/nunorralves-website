import { Container, PostContainer, PostImage } from './styles';

const CardPost: React.FC = ({ post }) => {
  return (
    <Container>
      <PostImage src={post.image} alt="" />
      <PostContainer>
        <h2>{post.title}</h2>
        <h3>
          {post.date} &middot; {post.readingTime}
        </h3>
        <p>
          {/* <ReactMarkdown source={truncateSummary(post.markdownBody)} /> */}
          {post.summary}
        </p>
      </PostContainer>
    </Container>
  );
};

export default CardPost;
