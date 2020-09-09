import { Container, LatestWrapper } from './styles';
import CardPost from '../CardPost';

const LatestEntries: React.FC = ({ latestPosts }) => {
  return (
    <Container>
      <LatestWrapper>
        {console.log('PPP:', latestPosts)}
        {latestPosts.map(post => {
          console.log('Iter Post = ', post);
          return <CardPost post={post} />;
        })}
      </LatestWrapper>
    </Container>
  );
};

export default LatestEntries;
