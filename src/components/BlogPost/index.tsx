import { reformatDate } from '../../utils/utils';
import {
  AuthorImage,
  ContainerArticle,
  FeedbackLikes,
  SocialMedia,
  SubTitle,
  SubTitleAuthor,
  SubTitleContainer,
  Tags,
  ViewsLikesContainer
} from './styles';
import { Tag } from '../Tag';
import { ViewsCounter } from '../ViewsCounter';
import { LikeButton } from '../LikeButton';
import { LikesCounter } from '../LikesCounter';
import useTranslation from '../../intl/useTranslation';
import { PostMetadata } from '../../../types/PostMetadata';
import { useEffect } from 'react';
import { ShareOnLinkedIn } from '../ShareOnLinks/ShareOnLinkedIn';
import { ShareOnTwitter } from '../ShareOnLinks/ShareOnTwitter';
import { ShareOnFacebook } from '../ShareOnLinks/ShareOnFacebook';
import { ShareOnWhatsapp } from '../ShareOnLinks/ShareOnWhatsapp';
import { ShareOnReddit } from '../ShareOnLinks/ShareOnReddit';
import { ShareOnPocket } from '../ShareOnLinks/ShareOPocket';

type BlogPostProps = {
  postMetadata: PostMetadata;
  postContent: JSX.Element;
};

const POST_BASE_URL = process.env.NEXT_PUBLIC_URL + '/blog';

export const BlogPost: React.FC<BlogPostProps> = ({
  postMetadata,
  postContent
}) => {
  const { title, language, excerpt, author, date, tags, slug } = postMetadata;
  const { translate } = useTranslation();

  useEffect(() => {
    fetch(`/api/increment-views?id=${encodeURIComponent(slug)}`);
  }, []);

  return (
    <ContainerArticle>
      <h1>{title}</h1>
      <h3>{excerpt}</h3>
      <SocialMedia>
        <ShareOnLinkedIn
          postBaseUrl={POST_BASE_URL}
          slug={slug}
          postMetadata={postMetadata}
        />
        <ShareOnTwitter
          postBaseUrl={POST_BASE_URL}
          slug={slug}
          postMetadata={postMetadata}
        />
        <ShareOnFacebook
          postBaseUrl={POST_BASE_URL}
          slug={slug}
          postMetadata={postMetadata}
        />
        <ShareOnWhatsapp
          postBaseUrl={POST_BASE_URL}
          slug={slug}
          postMetadata={postMetadata}
        />
        <ShareOnReddit
          postBaseUrl={POST_BASE_URL}
          slug={slug}
          postMetadata={postMetadata}
        />
        <ShareOnPocket
          postBaseUrl={POST_BASE_URL}
          slug={slug}
          postMetadata={postMetadata}
        />
      </SocialMedia>
      <SubTitle>
        <SubTitleAuthor>
          <AuthorImage src="/photo.jpg" />
          <SubTitleContainer>
            <h4>
              {translate('posted_by')} {author} {translate('on')}{' '}
              {reformatDate(date)}
            </h4>
            <h5>
              {translate('article_in')}&nbsp;{translate(language).toLowerCase()}
            </h5>
          </SubTitleContainer>
        </SubTitleAuthor>
        <ViewsLikesContainer>
          <h4>
            {postMetadata.readingTime} &middot; <ViewsCounter id={slug} />{' '}
            &middot; <LikesCounter id={slug} />
          </h4>
        </ViewsLikesContainer>
      </SubTitle>
      <Tags>{tags && tags.map(tag => <Tag key={tag} tag={tag} />)}</Tags>
      <br />
      {postContent}
      <br />
      <FeedbackLikes>
        <LikeButton id={slug} />
      </FeedbackLikes>
    </ContainerArticle>
  );
};
