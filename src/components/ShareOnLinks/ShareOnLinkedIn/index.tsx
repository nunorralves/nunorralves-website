import Link from 'next/link';
import { PostMetadata } from '../../../../types/PostMetadata';
import { Linkedin, StyledLink } from './styles';
import useTranslation from '../../../intl/useTranslation';

type ShareOnLinkedInProps = {
  postBaseUrl: string;
  slug: string;
  postMetadata: PostMetadata;
};

const shareOnLinkedin = (postBaseUrl, slug, post) => {
  const url = `${postBaseUrl}/${encodeURI(slug)}`;
  const title = encodeURI(post?.title);
  const summary = encodeURI(post?.excerpt);
  const shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&t=${title}&summary=${summary}`;
  return shareUrl;
};

export const ShareOnLinkedIn: React.FC<ShareOnLinkedInProps> = ({
  postBaseUrl,
  slug,
  postMetadata
}) => {
  const { translate } = useTranslation();

  return (
    <Link href={shareOnLinkedin(postBaseUrl, slug, postMetadata)} passHref>
      <StyledLink target="_blank" title={translate('share_on') + ' LinkedIn'}>
        <Linkedin />
      </StyledLink>
    </Link>
  );
};
