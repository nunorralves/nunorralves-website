import Link from 'next/link';
import { Container, PostContainer, PostImage, StyledLink } from './styles';

const CardPost: React.FC = ({ post }) => {
  return (
    <Container>
      <PostImage src={post.image} alt="" />
      <PostContainer>
        <h2>{post.title}</h2>
        <h3>{post.date} &middot; x min read</h3>
        <p>
          {/* <ReactMarkdown source={truncateSummary(post.markdownBody)} /> */}
          {post.content}
          <span>
            <Link href="/" as="/">
              <StyledLink>Read More...</StyledLink>
            </Link>
          </span>
        </p>
      </PostContainer>
    </Container>
  );
};

export default CardPost;
