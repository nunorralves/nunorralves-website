import { Container, LatestWrapper, CardsWrapper } from './styles';
import CardPost from '../CardPost';
import {
  blogReadingTime,
  reformatDate,
  truncateBlogSummary
} from '../../utils';

const LatestEntries: React.FC = ({ latestPosts }) => {
  return (
    <Container>
      <LatestWrapper>
        <h1>Latest Posts</h1>
        <CardsWrapper>
          {latestPosts.map(post => {
            return (
              <CardPost
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
        </CardsWrapper>
      </LatestWrapper>
    </Container>
  );
};

export default LatestEntries;
