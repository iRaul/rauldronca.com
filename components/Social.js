import styled from 'styled-components';

export const SocialLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 30px 0;
  padding: 30px 0;
  border-top: 1px solid #414141;
  gap: 20px;
`;

export const SocialLink = styled.a`
  background-color: #191919;
  padding: 15px 0;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  transition: all .1s ease;

  svg {
    margin-right: 8px;
  }

  ${props =>
    props.codepen &&
    `
    color: #fff;

    &:hover {
      background-color: #fff;
      color: #000;

      svg { stroke: #000; }
    }
  `}

  ${props =>
    props.github &&
    `
      color: #835fe4;

      &:hover {
        background-color: #835fe4;
        color: #fff;

        svg { stroke: #fff; }
      }
    `}

  ${props =>
    props.dribbble &&
    `
      color: #ea4c89;

      &:hover {
        background-color: #ea4c89;
        color: #fff;

        svg { stroke: #fff; }
      }
    `}

  ${props =>
    props.linkedin &&
    `
      color: #00a0dc;

      &:hover {
        background-color: #00a0dc;
        color: #fff;

        svg { stroke: #fff; }
      }
    `}
`;
