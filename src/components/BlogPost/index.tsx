import { reformatDate } from '../../utils/utils';
import {
  AuthorImage,
  ContainerArticle,
  Facebook,
  FeedbackLikes,
  Linkedin,
  Reddit,
  SocialMedia,
  StyledLink,
  SubTitle,
  SubTitleAuthor,
  // Tag,
  Tags,
  Twitter,
  Whatsapp
} from './styles';
import Link from 'next/link';
import { Tag } from '../Tag';
import { ViewsCounter } from '../ViewsCounter';
import { LikeButton } from '../LikeButton';
import { LikesCounter } from '../LikesCounter';
import useTranslation from '../../intl/useTranslation';
import { PostMetadata } from '../../../types/PostMetadata';

type BlogPostProps = {
  postMetadata: PostMetadata;
  postContent: JSX.Element;
};

const shareOnLinkedin = (slug: string, post: PostMetadata) => {
  const url = `https://johndoe.com/posts/${encodeURI(slug)}`;
  const title = encodeURI(post?.title);
  const summary = encodeURI(post?.excerpt);
  const shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&t=${title}&summary=${summary}`;
  return shareUrl;
};

const shareOnTwitter = (slug: string, post: PostMetadata) => {
  const url = `https://johndoe.com/posts/${encodeURI(slug)}`;
  const text = encodeURI(post?.title);
  const via = 'nunorralves';
  const hashtags = post?.tags?.toString();
  const shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}&via=${via}&hashtags=${hashtags}`;
  return shareUrl;
};

const shareOnFacebook = (slug: string, post: PostMetadata) => {
  const url = `https://johndoe.com/posts/${encodeURI(slug)}`;
  const title = encodeURI(post?.title);
  const hashtags = post?.tags?.toString();
  const shareUrl = `http://www.facebook.com/sharer/sharer.php?u=${url}&quote=${title}&hashtag=${hashtags}`;
  return shareUrl;
};

function isMobileOrTablet() {
  return /(android|iphone|ipad|mobile)/i.test(navigator.userAgent);
}

const shareOnWhatsapp = (slug: string, post: PostMetadata) => {
  const url = `https://johndoe.com/posts/${encodeURI(slug)}`;
  const title = encodeURI(post?.title);
  const shareUrl = `https://web.whatsapp.com/send?text=${title}%20${url}`;
  return shareUrl;
};

const shareOnReddit = (slug: string, post: PostMetadata) => {
  const url = `https://johndoe.com/posts/${encodeURI(slug)}`;
  const title = encodeURI(post?.title);
  const shareUrl = `http://www.reddit.com/submit?url=${url}&title=${title}`;
  return shareUrl;
};

export const BlogPost: React.FC<BlogPostProps> = ({
  postMetadata,
  postContent
}) => {
  const { title, excerpt, author, date, tags, slug } = postMetadata;
  const { translate } = useTranslation();

  return (
    <ContainerArticle>
      <h1>{title}</h1>
      <h3>{excerpt}</h3>
      <SocialMedia>
        <Link href={shareOnLinkedin(slug, postMetadata)} passHref>
          <StyledLink target="_blank">
            <Linkedin />
          </StyledLink>
        </Link>
        <Link href={shareOnTwitter(slug, postMetadata)} passHref>
          <StyledLink target="_blank">
            <Twitter />
          </StyledLink>
        </Link>
        <Link href={shareOnFacebook(slug, postMetadata)} passHref>
          <StyledLink target="_blank">
            <Facebook />
          </StyledLink>
        </Link>
        <Link href={shareOnWhatsapp(slug, postMetadata)} passHref>
          <StyledLink target="_blank" data-action="share/whatsapp/share">
            <Whatsapp />
          </StyledLink>
        </Link>
        <Link href={shareOnReddit(slug, postMetadata)} passHref>
          <StyledLink target="_blank">
            <Reddit />
          </StyledLink>
        </Link>
      </SocialMedia>
      <SubTitle>
        <SubTitleAuthor>
          <AuthorImage src="/photo.jpg" />
          <h4>
            {translate('posted_by')} {author} {translate('on')}{' '}
            {reformatDate(date)}
          </h4>
        </SubTitleAuthor>
        <h4>
          {postMetadata.readingTime} &middot;{' '}
          <ViewsCounter id={slug} increment={true} /> &middot;{' '}
          <LikesCounter id={slug} />
        </h4>
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
