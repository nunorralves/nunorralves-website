import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 25px;

  &:hover {
    transform: scale(1.01);
    cursor: pointer;
  }

  transition: scale 500ms ease-in-out;
`;

export const PostImage = styled.img`
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
`;

export const PostContainer = styled.div`
  padding-top: 20px;
  color: ${props => props.theme.colors.text};

  h2 {
    font-weight: 600;
    font-size: 1.1rem;
  }
  h3 {
    padding-top: 2px;
    font-size: 0.75rem;
  }
  p {
    padding-top: 15px;
    font-size: 0.95rem;

    span {
      padding-left: 5px;
    }
  }
`;

export const StyledLink = styled.a`
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  /* text-decoration: none; */
  font-weight: 600;
  font-size: 0.8rem;

  &:hover {
    font-size: 0.9rem;
  }

  transition: font-weight 100ms ease-in-out;
`;
