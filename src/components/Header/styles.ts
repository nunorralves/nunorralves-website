import styled from 'styled-components';

export const ContainerHeader = styled.header`
  background-color: ${props => props.theme.colors.headerBackground};

  // Sticky attributes - START
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 100;
  // Sticky attributes - END

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
