import Link from 'next/link';
import { Post } from '../../pages/api/api';
import { blogReadingTime, reformatDate } from '../../utils';
import { LikesCounter } from '../LikesCounter';
import { Tag } from '../Tag';
import { ViewsCounter } from '../ViewsCounter';
import {
  Container,
  StyledLink,
  Tags,
  Title,
  ViewsLikesContainer
} from './styles';
import useTranslation from '../../intl/useTranslation';

type PostSummaryProps = {
  post: Post;
};

export const PostSummary: React.FC<PostSummaryProps> = ({ post }) => {
  const { title, excerpt } = post;
  const { translate } = useTranslation();

  return (
    <Container>
      <Title>
        <Link key={post.title} href={`/posts/${post.slug}`}>
          <StyledLink>
            <h3>{title}</h3>
          </StyledLink>
        </Link>
        {/* <p>{`${views ? views : '–––'} views`}</p> */}
        {/* <p>{views} views</p> */}
        <ViewsLikesContainer>
          <ViewsCounter id={post.slug} increment={false} />
          &nbsp;&middot;&nbsp; <LikesCounter id={post.slug} />
        </ViewsLikesContainer>
      </Title>
      <h5>
        {translate('posted_by')} {post.author} {translate('on')}{' '}
        {reformatDate(post.date)} &middot; {blogReadingTime(post.content)}
      </h5>
      <p>{excerpt}</p>
      <Tags>
        {post.tags && post.tags.map(tag => <Tag key={tag} tag={tag} />)}
      </Tags>
    </Container>
  );
};
