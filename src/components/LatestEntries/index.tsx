import { Container, LatestWrapper, CardsWrapper } from './styles';
import CardPost from '../CardPost';

const LatestEntries: React.FC = ({ latestPosts }) => {
  return (
    <Container>
      <LatestWrapper>
        <h1>Latest Posts</h1>
        <CardsWrapper>
          {latestPosts.map(post => {
            return <CardPost post={post} />;
          })}
        </CardsWrapper>
      </LatestWrapper>
    </Container>
  );
};

export default LatestEntries;
