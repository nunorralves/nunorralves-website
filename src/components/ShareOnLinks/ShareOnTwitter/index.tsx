import Link from 'next/link';
import { PostMetadata } from '../../../../types/PostMetadata';
import { StyledLink, Twitter } from './styles';
import useTranslation from '../../../intl/useTranslation';

type ShareOnTwitterProps = {
  postBaseUrl: string;
  slug: string;
  postMetadata: PostMetadata;
};

const shareOnTwitter = (postBaseUrl, slug, post) => {
  const url = `${postBaseUrl}/${encodeURI(slug)}`;
  const text = encodeURI(post?.title);
  const via = '';
  const hashtags = encodeURI(post?.tags?.toString());
  const shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}&via=${via}&hashtags=${hashtags}`;
  return shareUrl;
};

export const ShareOnTwitter: React.FC<ShareOnTwitterProps> = ({
  postBaseUrl,
  slug,
  postMetadata
}) => {
  const { translate } = useTranslation();

  return (
    <Link href={shareOnTwitter(postBaseUrl, slug, postMetadata)} passHref>
      <StyledLink target="_blank" title={translate('share_on') + ' Twitter'}>
        <Twitter />
      </StyledLink>
    </Link>
  );
};
