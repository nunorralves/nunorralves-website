import { StyledBlockquote, StyledLink } from './styles';

type PhotoCredits = {
  credits: { author: string; authorUrl: string; site: string; siteUrl: string };
};

const PhotoCredits: React.FC<PhotoCredits> = ({ credits }) => {
  const { author, authorUrl, site, siteUrl } = credits;

  return (
    <StyledBlockquote>
      <p>
        photo by{' '}
        <StyledLink href={authorUrl} target="_blank">
          {author}
        </StyledLink>{' '}
        on{' '}
        <StyledLink href={siteUrl} target="_blank">
          {site}
        </StyledLink>
      </p>
    </StyledBlockquote>
  );
};

export default PhotoCredits;
