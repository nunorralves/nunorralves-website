import { Container, LatestWrapper, CardsWrapper, StyledLink } from './styles';
import CardPost from '../CardPost';
import { Post } from '../../lib/api';
import Link from 'next/link';

type LatestEntriesProps = {
  latestPosts: Post[];
};
const LatestEntries: React.FC<LatestEntriesProps> = ({ latestPosts }) => {
  return (
    <Container>
      <LatestWrapper>
        <h1>Latest Posts</h1>
        <CardsWrapper>
          {latestPosts.map(post => (
            <Link key={post.title} href={`/posts/${post.slug}`}>
              <StyledLink>
                <CardPost post={post} />
              </StyledLink>
            </Link>
          ))}
        </CardsWrapper>
      </LatestWrapper>
    </Container>
  );
};

export default LatestEntries;
