import Link from 'next/link';
import { PostMetadata } from '../../../../types/PostMetadata';
import { Pocket, StyledLink } from './styles';

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
  return (
    <Link href={shareOnPocket(postBaseUrl, slug, postMetadata)} passHref>
      <StyledLink target="_blank" data-action="share/whatsapp/share">
        <Pocket />
      </StyledLink>
    </Link>
  );
};
