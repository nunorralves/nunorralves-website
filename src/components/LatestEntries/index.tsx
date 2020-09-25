import { Container, LatestWrapper, CardsWrapper } from './styles';
import CardPost from '../CardPost';
import { Post } from '../../lib/api';

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
            <CardPost key={post.title} post={post} />
          ))}
        </CardsWrapper>
      </LatestWrapper>
    </Container>
  );
};

export default LatestEntries;
