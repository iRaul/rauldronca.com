import styled from 'styled-components';

export const List = styled.ul`
  margin-bottom: 30px;
  padding: 0;
  list-style-type: none;
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
`;

export const ListItem = styled.li`
  font-size: 1.2rem;
  font-weight: 400;
`;

export const ListLink = styled.a`
  margin-right: 8px;
  color: #0099ff;
`;

export const ListTitle = styled.span`
  display: block;
  color: #fff;
  font-weight: 600;
  font-size: 1.4rem;
  margin-bottom: 2px;

  svg {
    margin-left: 10px;
  }
`;

export const ListText = styled.p`
  margin: 0;
  color: #8a8f98;
  font-weight: 500;
  font-size: 1.2rem;
`;

export const PorfolioItem = styled.a`
  padding: 50px;
  background-color: #171717;
  border-radius: 10px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #222222;
  }
`;
