import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem 0;

  h5 {
    color: ${props => props.theme.colors.textSecondary};
    font-weight: 400;
    font-size: 0.75rem;
    margin-bottom: 0.4rem;

    span {
      font-style: italic;
    }
  }

  p {
    margin-top: 5px;
  }
`;

export const StyledLink = styled.a`
  color: ${props => props.theme.colors.textPrimary};
  text-decoration: none;
  cursor: pointer;

  font-size: 1.5rem;
  line-height: 1.25;
  font-weight: 600;
`;

export const Title = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  p {
    line-height: 1.25;
    color: ${props => props.theme.colors.textTertiary};
  }

  @media only screen and (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 5px;
`;

export const ViewsLikesContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledP = styled.p`
  color: ${props => props.theme.colors.textPrimary};
  line-height: 1.5;
  /* font-size: 1.5rem;
  font-weight: 600; */
`;
