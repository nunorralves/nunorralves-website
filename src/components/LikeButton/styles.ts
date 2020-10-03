import styled from 'styled-components';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 30px;
  border-radius: 6px;
  line-height: 30px;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.textTertiary};
`;

export const Heart = styled(FaRegHeart)`
  width: 16px;
  height: 16px;
  line-height: 30px;
  color: ${props => props.theme.colors.white};
`;

export const HeartFilled = styled(FaHeart)`
  width: 16px;
  height: 16px;
  line-height: 30px;
  color: ${props => props.theme.colors.error};
`;
