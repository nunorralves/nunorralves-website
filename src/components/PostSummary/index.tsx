import Link from 'next/link';
import { reformatDate } from '../../utils/utils';
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
import { PostMetadata } from '../../../types/PostMetadata';

type PostSummaryProps = {
  postMetadata: PostMetadata;
};

export const PostSummary: React.FC<PostSummaryProps> = ({ postMetadata }) => {
  const {
    title,
    language,
    author,
    date,
    excerpt,
    slug,
    readingTime,
    tags
  } = postMetadata;
  const { translate, locale } = useTranslation();

  return (
    <Container>
      <Title>
        <Link href={`/blog/${slug}`} passHref>
          <StyledLink>{title}</StyledLink>
        </Link>
        <ViewsLikesContainer>
          <ViewsCounter id={slug} />
          &nbsp;&middot;&nbsp; <LikesCounter id={slug} />
        </ViewsLikesContainer>
      </Title>
      <h5>
        {translate('posted_by')} {author} {translate('on')} {reformatDate(date)}{' '}
        &middot; {readingTime}&nbsp;&middot;&nbsp;
        <span>
          {translate('article_in')}&nbsp;{translate(language).toLowerCase()}
        </span>
      </h5>
      <p>{excerpt}</p>
      <Tags>{tags && tags.map(tag => <Tag key={tag} tag={tag} />)}</Tags>
    </Container>
  );
};
