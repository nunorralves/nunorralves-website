import Link from 'next/link';
import { PostMetadata } from '../../../../types/PostMetadata';
import { StyledLink, Reddit } from './styles';

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
  return (
    <Link href={shareOnReddit(postBaseUrl, slug, postMetadata)} passHref>
      <StyledLink target="_blank">
        <Reddit />
      </StyledLink>
    </Link>
  );
};
