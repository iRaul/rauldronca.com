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
`;

export const ListText = styled.p`
  margin: 0;
  color: #8a8f98;
  font-weight: 500;
  font-size: 1.2rem;
`;

export const PorfolioItem = styled.a`
  padding: 50px;
  background: linear-gradient(180deg, #28292c 0%, rgba(39, 40, 43, 0.82) 100%);
  box-shadow: 0px 13px 40px rgba(0, 0, 0, 0.3), 0px 4px 4px rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;
