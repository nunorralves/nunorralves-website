import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 80%;
  margin: 1rem 1rem;
`;

export const StyledLabel = styled.label``;

export const StyledInput = styled.input`
  width: 100%;
  margin: 0.5rem 0 1rem 0;
  border: 2px solid ${props => props.theme.colors.textSecondary};
  padding: 6px;
  border-radius: 6px;
  outline: 0;

  &:focus,
  &:hover {
    border: 2px solid ${props => props.theme.colors.textTertiary};
  }
`;

export const StyledTextArea = styled.textarea`
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

export const StyledButton = styled.button`
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
