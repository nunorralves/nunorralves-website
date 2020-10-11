import Link from 'next/link';
import { PostMetadata } from '../../../types/PostMetadata';
import { Facebook, StyledLink } from './styles';
import useTranslation from '../../../intl/useTranslation';

type ShareOnFacebookProps = {
  postBaseUrl: string;
  slug: string;
  postMetadata: PostMetadata;
};

const shareOnFacebook = (postBaseUrl, slug, post) => {
  const url = `${postBaseUrl}/${encodeURI(slug)}`;
  const title = encodeURI(post?.title);
  const hashtags = encodeURI(post?.tags?.toString());
  const shareUrl = `http://www.facebook.com/sharer/sharer.php?u=${url}&quote=${title}&hashtag=${hashtags}`;
  return shareUrl;
};

export const ShareOnFacebook: React.FC<ShareOnFacebookProps> = ({
  postBaseUrl,
  slug,
  postMetadata
}) => {
  const { translate } = useTranslation();

  return (
    <Link href={shareOnFacebook(postBaseUrl, slug, postMetadata)} passHref>
      <StyledLink target="_blank" title={translate('share_on') + ' Facebook'}>
        <Facebook />
      </StyledLink>
    </Link>
  );
};
