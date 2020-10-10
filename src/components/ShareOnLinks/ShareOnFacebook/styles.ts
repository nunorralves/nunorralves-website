import styled from 'styled-components';
import { FaFacebook } from 'react-icons/fa';

export const StyledLink = styled.a`
  color: ${props => props.theme.colors.textPrimary};
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  transition: scale 100ms ease-in-out;
`;

export const Facebook = styled(FaFacebook)`
  width: 24px;
  height: 24px;
  color: ${props => props.theme.colors.textTertiary};
  flex-shrink: 0;
`;
