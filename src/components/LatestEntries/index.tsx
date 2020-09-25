import { Container, LatestWrapper, CardsWrapper, StyledLink } from './styles';
import CardPost from '../CardPost';
import { Post } from '../../lib/api';
import Link from 'next/link';

interface ILatestEntriesProps {
  latestPosts: Post[];
}
const LatestEntries: React.FC<ILatestEntriesProps> = ({ latestPosts }) => {
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
