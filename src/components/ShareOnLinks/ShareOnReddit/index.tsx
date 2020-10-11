import Link from 'next/link';
import { PostMetadata } from '../../../types/PostMetadata';
import { StyledLink, Reddit } from './styles';
import useTranslation from '../../../intl/useTranslation';

type ShareOnRedditProps = {
  postBaseUrl: string;
  slug: string;
  postMetadata: PostMetadata;
};

const shareOnReddit = (postBaseUrl, slug, post) => {
  const url = `${postBaseUrl}/${encodeURI(slug)}`;
  const title = encodeURI(post?.title);
  const shareUrl = `http://www.reddit.com/submit?url=${url}&title=${title}`;
  return shareUrl;
};

export const ShareOnReddit: React.FC<ShareOnRedditProps> = ({
  postBaseUrl,
  slug,
  postMetadata
}) => {
  const { translate } = useTranslation();

  return (
    <Link href={shareOnReddit(postBaseUrl, slug, postMetadata)} passHref>
      <StyledLink target="_blank" title={translate('share_on') + ' Reddit'}>
        <Reddit />
      </StyledLink>
    </Link>
  );
};
