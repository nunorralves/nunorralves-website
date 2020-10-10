import Link from 'next/link';
import { PostMetadata } from '../../../../types/PostMetadata';
import { StyledLink, Whatsapp } from './styles';

type ShareOnWhatsappProps = {
  postBaseUrl: string;
  slug: string;
  postMetadata: PostMetadata;
};

function isMobileOrTablet() {
  if (
    typeof window !== 'undefined' &&
    typeof window.navigator !== 'undefined'
  ) {
    return /(android|iphone|ipad|mobile)/i.test(navigator.userAgent);
  }
  return false;
}

const shareOnWhatsapp = (ostBaseUrl, slug, post) => {
  const url = `${ostBaseUrl}/${encodeURI(slug)}`;
  const title = encodeURI(post?.title);
  const shareUrl = `https://${
    isMobileOrTablet() ? 'api' : 'web'
  }.whatsapp.com/send?text=${title}%20${url}`;
  return shareUrl;
};

export const ShareOnWhatsapp: React.FC<ShareOnWhatsappProps> = ({
  postBaseUrl,
  slug,
  postMetadata
}) => {
  return (
    <Link href={shareOnWhatsapp(postBaseUrl, slug, postMetadata)} passHref>
      <StyledLink target="_blank" data-action="share/whatsapp/share">
        <Whatsapp />
      </StyledLink>
    </Link>
  );
};
