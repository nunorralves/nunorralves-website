import { StyledBlockquote } from './styles';

type PhotoCredits = {
  credits: { author: string; authorUrl: string; site: string; siteUrl: string };
};

const PhotoCredits: React.FC<PhotoCredits> = ({ credits }) => {
  const { author, authorUrl, site, siteUrl } = credits;

  return (
    <StyledBlockquote>
      <p>
        photo by <a href={authorUrl}>{author}</a> on{' '}
        <a href={siteUrl}>{site}</a>
      </p>
    </StyledBlockquote>
  );
};

export default PhotoCredits;
