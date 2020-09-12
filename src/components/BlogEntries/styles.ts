import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const BlogEntriesWrapper = styled.div`
  max-width: 70rem;
  width: 70rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: top;
  height: 100%;
  margin: 15px 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid lightgray;

  @media only screen and (max-width: 500px) {
    flex-direction: column-reverse;
    height: 100%;
    margin: 15px 20px;
  }
`;

export const BlogEntriesList = styled.div`
  width: 60%;
  height: 100%;

  @media only screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const SideBar = styled.div`
  width: 35%;
  height: 100%;
  margin: 5px 10px;

  h1 {
    margin: 25px 0;
    border-bottom: 1px solid lightgray;
  }

  @media only screen and (max-width: 500px) {
    width: 100%;
    margin-bottom: 15px;
  }
`;

export const Categories = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Category = styled.div`
  color: ${props => props.theme.colors.text};
  padding-left: 10px;
`;

export const Tags = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const Tag = styled.div`
  color: #ffffff;
  border: 1px solid;
  border-radius: 8px;
  padding: 3px 8px;
  margin: 3px;
  background-color: #33b5e5;

  a {
    color: #eee;
  }
  &:hover {
    background-color: #4285f4;
  }
`;

export const StyledLink = styled.a`
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  font-weight: 600;
  font-size: 0.8rem;
`;
