import Link from 'next/link';
import { PostMetadata } from '../../../types/PostMetadata';
import { Pocket, StyledLink } from './styles';
import useTranslation from '../../../intl/useTranslation';

type ShareOnPocketProps = {
  postBaseUrl: string;
  slug: string;
  postMetadata: PostMetadata;
};

const shareOnPocket = (ostBaseUrl, slug, post) => {
  const url = `${ostBaseUrl}/${encodeURI(slug)}`;
  const title = encodeURI(post?.title);
  const shareUrl = `https://getpocket.com/save?url=${url}&title=${title}`;
  return shareUrl;
};

export const ShareOnPocket: React.FC<ShareOnPocketProps> = ({
  postBaseUrl,
  slug,
  postMetadata
}) => {
  const { translate } = useTranslation();

  return (
    <Link href={shareOnPocket(postBaseUrl, slug, postMetadata)} passHref>
      <StyledLink target="_blank" title={translate('save_on') + ' Pocket'}>
        <Pocket />
      </StyledLink>
    </Link>
  );
};
