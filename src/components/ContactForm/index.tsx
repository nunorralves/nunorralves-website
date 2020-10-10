import React from 'react';
import useTranslation from '../../intl/useTranslation';
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledTextArea,
  StyledButton
} from './styles';

type ContactFormProps = {
  handleOnSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void>;
  handleOnChange(
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void;
  InvalidMsg(e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>): void;
  emailData: {
    from: string;
    email: string;
    message: string;
  };
};

export const ContactForm: React.FC<ContactFormProps> = ({
  handleOnSubmit,
  handleOnChange,
  InvalidMsg,
  emailData
}) => {
  const { translate } = useTranslation();

  return (
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
      <StyledLabel htmlFor="message">{translate('message')}</StyledLabel>
      <StyledTextArea
        id="message"
        onChange={handleOnChange}
        onInvalid={e => InvalidMsg(e)}
        required
        value={emailData.message}
      />
      <StyledButton type="submit">{translate('submit')}</StyledButton>
    </StyledForm>
  );
};
