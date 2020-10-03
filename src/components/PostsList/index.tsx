import { Post } from '../../pages/api/api';
import { PostSummary } from '../PostSummary';
import { ContainerSection } from './styles';

type PostsListProps = {
  title: string;
  posts: Post[];
};

export const PostsList: React.FC<PostsListProps> = ({ title, posts }) => {
  return (
    <ContainerSection>
      <h2>{title}</h2>
      {(!posts || !posts.length) && 'No posts found.'}
      {posts &&
        posts.map(post => (
          // <Link key={post.title} href={`/posts/${post.slug}`}>
          //   <StyledLink>
          <PostSummary key={post.title} post={post} />
          //   </StyledLink>
          // </Link>
        ))}
    </ContainerSection>
  );
};
