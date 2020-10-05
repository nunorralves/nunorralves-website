import {
  FooterContainer,
  StyledLink,
  Github,
  Linkedin,
  SocialMedia,
  Twitter,
  Youtube
} from './styles';
import siteConfig from '../../../site.config';
import useTranslation from '../../intl/useTranslation';

export const Footer: React.FC = () => {
  const { translate } = useTranslation();

  return (
    <FooterContainer>
      <SocialMedia>
        <StyledLink target="_blank" href={siteConfig.linkedin}>
          <Linkedin />
        </StyledLink>
        <StyledLink target="_blank" href={siteConfig.github}>
          <Github />
        </StyledLink>
        <StyledLink target="_blank" href={siteConfig.twitter}>
          <Twitter />
        </StyledLink>
        <StyledLink target="_blank" href={siteConfig.youtube}>
          <Youtube />
        </StyledLink>
      </SocialMedia>
      <p>
        &#169;{siteConfig.site_year} {siteConfig.site_name} -{' '}
        {translate('copyright')}
      </p>
    </FooterContainer>
  );
};
