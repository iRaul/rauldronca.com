import styled from 'styled-components';

export const ListItem = styled.li`
  font-size: 1.4rem;
  font-weight: 200;
  margin-bottom: 20px;
  color: rgba(255, 255, 255, 0.8);
`;

export const ListLink = styled.a`
  color: ${props => props.color};

  &:after {
    content: '—';
    margin: 0 10px;
  }
`;

export const List = styled.ul`
  margin: 30px 0 0;
  padding: 0;
  list-style-type: none;
`;
