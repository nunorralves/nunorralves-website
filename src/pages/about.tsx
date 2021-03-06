import { useState } from 'react';
import styled from 'styled-components';
import useTranslation from '../intl/useTranslation';
import { NextSeo } from 'next-seo';
import siteConfig from '../../site.config';
import StyledLoader from '../components/StyledLoader';
import { ContactForm } from '../components/ContactForm';
import * as gtag from '../lib/gtag';

const About: React.FC = () => {
  const { translate } = useTranslation();
  const URL = `${siteConfig.url}/about`;
  const TITLE = `${translate('about_page_title')} - ${siteConfig.title}`;
  const DESCRIPTION = `${translate('about_page_description')}`;
  const [emailData, setEmailData] = useState({
    from: '',
    email: '',
    message: ''
  });
  const [response, setResponse] = useState({ status: '', msg: '' });
  const [sending, setSending] = useState(false);

  const handleOnChange = e => {
    setResponse({ status: '', msg: '' });
    setEmailData({ ...emailData, [e.target.id]: e.target.value });
  };

  const handleOnSubmit = async e => {
    e.preventDefault();

    gtag.event({
      action: 'Send_Mail',
      category: 'AboutPage',
      label: `${emailData.email} from ${emailData.from}`,
      value: 0
    });

    setResponse({ status: '', msg: '' });
    setSending(true);
    const res = await fetch('/api/sendmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emailData)
    });
    const text = await res.text();
    handleResponse(res.status, JSON.parse(text).msg);
  };

  const handleResponse = (status, msg) => {
    // console.log('RESPONSE:', status, msg);
    if (status === 200) {
      setEmailData({ from: '', email: '', message: '' });
      setResponse({ status: 'ok', msg });
    } else {
      setResponse({ status: 'error', msg });
    }
    setSending(false);
  };

  function InvalidMsg(field) {
    if (field.target.value === '') {
      field.target.setCustomValidity(translate('cannot_be_empty'));
    } else if (field.target.validity.typeMismatch) {
      if (field.target.id === 'email') {
        field.target.setCustomValidity(translate('invalid_email_format'));
      } else {
        field.target.setCustomValidity('');
      }
    } else {
      field.target.setCustomValidity('');
    }
    return true;
  }

  return (
    <>
      <NextSeo
        title={TITLE}
        description={DESCRIPTION}
        canonical={URL}
        openGraph={{
          url: URL,
          title: TITLE,
          description: DESCRIPTION
        }}
      />
      <section style={{ width: '100%' }}>
        {sending ? (
          <StyledLoader />
        ) : (
          <>
            <StyledH1>{translate('about')}</StyledH1>
            <StyledTextDiv>
              {translate('about_description')
                .split('\n')
                .map((item, i) => (
                  <StyledP key={i}>{item}</StyledP>
                ))}
            </StyledTextDiv>
            <StyledH1 style={{ marginTop: '3rem' }}>
              {translate('contact_me')}
            </StyledH1>
            <ContactForm
              handleOnSubmit={handleOnSubmit}
              handleOnChange={handleOnChange}
              InvalidMsg={InvalidMsg}
              emailData={emailData}
            />
          </>
        )}

        {response.status !== '' &&
          (response.status === 'ok' ? (
            <StyledSuccess>{translate('message_sent')}</StyledSuccess>
          ) : (
            <StyledError>{translate('message_not_sent')}</StyledError>
          ))}
      </section>
    </>
  );
};

const StyledH1 = styled.h1`
  font-size: 2.25rem;
  line-height: 1.25;
  margin: 1rem 0;
  font-weight: 600;
`;

const StyledTextDiv = styled.div`
  color: ${props => props.theme.colors.textPrimary};
  text-align: justify;
`;

const StyledP = styled.p`
  line-height: 1.25;
  margin-bottom: 2rem;
`;

const StyledSuccess = styled.p`
  margin-top: 1rem;
  font-size: 0.9rem;
  line-height: 1.25;
  color: ${props => props.theme.colors.success};
  margin: 0 1rem;
`;
const StyledError = styled.p`
  margin-top: 1rem;
  font-size: 0.9rem;
  line-height: 1.25;
  color: ${props => props.theme.colors.error};
  margin: 0 1rem;
`;

export default About;
