import { useState } from 'react';
import styled from 'styled-components';
import useTranslation from '../intl/useTranslation';
import Loader from 'react-loader-spinner';
import { NextSeo } from 'next-seo';
import siteConfig from '../../site.config';

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
          <StyledLoaderContainer>
            <Loader
              type="Bars"
              color="#00BFFF"
              height={100}
              width={100}
              // timeout={3000} // 3 secs
              visible={true} // 3 secs
            />
          </StyledLoaderContainer>
        ) : (
          <>
            <StyledH1>{translate('about')}</StyledH1>
            <StyledP>{translate('about_description')}</StyledP>
            <StyledH1 style={{ marginTop: '4rem' }}>
              {translate('contact_me')}
            </StyledH1>
            <StyledForm onSubmit={handleOnSubmit}>
              <StyledLabel htmlFor="name">{translate('from')}</StyledLabel>
              <StyledInput
                id="from"
                type="text"
                onChange={handleOnChange}
                onInvalid={e => InvalidMsg(e)}
                required
                value={emailData.from}
              />
              <StyledLabel htmlFor="email">{translate('email')}</StyledLabel>
              <StyledInput
                id="email"
                type="email"
                onChange={handleOnChange}
                onInvalid={e => InvalidMsg(e)}
                required
                value={emailData.email}
              />
              <StyledLabel htmlFor="message">
                {translate('message')}
              </StyledLabel>
              <StyledTextArea
                id="message"
                onChange={handleOnChange}
                onInvalid={e => InvalidMsg(e)}
                required
                value={emailData.message}
              />
              <StyledButton type="submit">{translate('submit')}</StyledButton>
            </StyledForm>
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

const StyledLoaderContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 50vh;
  margin: 0 auto;
`;

const StyledH1 = styled.h1`
  font-size: 2.25rem;
  line-height: 1.25;
  margin: 1rem 0;
  font-weight: 600;
`;

const StyledP = styled.p`
  line-height: 1.25;
  color: ${props => props.theme.colors.textPrimary};
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 80%;
  margin: 2rem 1rem;
`;

const StyledLabel = styled.label``;

const StyledInput = styled.input`
  width: 100%;
  margin: 0.5rem 0 2rem 0;
  border: 2px solid ${props => props.theme.colors.textSecondary};
  padding: 6px;
  border-radius: 6px;
  outline: 0;

  &:focus,
  &:hover {
    border: 2px solid ${props => props.theme.colors.textTertiary};
  }
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  margin: 0.5rem 0;
  border: 2px solid ${props => props.theme.colors.textSecondary};
  padding: 6px;
  border-radius: 6px;
  height: 10rem;
  outline: 0;

  &:focus,
  &:hover {
    border: 2px solid ${props => props.theme.colors.textTertiary};
  }
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

const StyledButton = styled.button`
  width: 100px;
  height: 30px;
  margin-top: 1rem;
  font-size: 0.9rem;
  border-radius: 3px;
  outline: 0;
  border: 2px solid ${props => props.theme.colors.textTertiary};
  background-color: ${props => props.theme.colors.textTertiary};
  color: ${props => props.theme.colors.white};

  &:hover {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.textTertiary};
    font-weight: bold;
  }
`;

export default About;
