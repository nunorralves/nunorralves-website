import styled from 'styled-components';

export const Container = styled.div`
  width: 95%;
  /* border: 1px solid lightgray; */
  border-radius: 8px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.585);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  margin: 45px 0;

  &:hover {
    transform: scale(1.01);
    cursor: pointer;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.585);
  }

  transition: scale 500ms ease-in-out;

  @media only screen and (max-width: 400px) {
    flex-direction: column;
  }
`;

export const PostImage = styled.img`
  min-width: 40%;
  width: 40%;
  overflow: hidden;
  /* border-radius: 8px; */

  @media only screen and (max-width: 400px) {
    width: 100%;
  }
`;

export const PostContainer = styled.div`
  padding: 20px;
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
    font-weight: 400;
    font-size: 0.85rem;

    span {
      padding-left: 5px;
    }
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 15px;
  justify-content: flex-end;
`;
export const Tag = styled.div`
  color: #ffffff;
  font-size: 0.7rem;
  border: 1px solid;
  border-radius: 8px;
  padding: 3px 8px;
  margin: 1px;
  background-color: #1177dd;
  font-weight: 600;
`;
