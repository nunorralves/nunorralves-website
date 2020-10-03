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
        <StyledLink href="#">
          <Linkedin />
        </StyledLink>
        <StyledLink href="#">
          <Github />
        </StyledLink>
        <StyledLink href="#">
          <Twitter />
        </StyledLink>
        <StyledLink href="#">
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
