import { StyledBlockquote, StyledLink } from './styles';

type PhotoCredits = {
  credits: { author: string; authorUrl: string; site: string; siteUrl: string };
};

const PhotoCredits: React.FC<PhotoCredits> = ({ credits }) => {
  const { author, authorUrl, site, siteUrl } = credits;

  return (
    <StyledBlockquote>
      <p>
        photo by <StyledLink href={authorUrl}>{author}</StyledLink> on{' '}
        <StyledLink href={siteUrl}>{site}</StyledLink>
      </p>
    </StyledBlockquote>
  );
};

export default PhotoCredits;
