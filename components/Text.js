import styled from 'styled-components';

export const Text = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.6;
  color: #f4f4f4;
`;

export const Span = styled.span`
  font-weight: 700;
  color: ${props => props.color || '#f4f4f4'};

  ${props =>
    props.primary &&
    `
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(to right, #ee0979, #ff6a00);
    `}

  ${props =>
    props.secondary &&
    `
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(to right, #a8ff78, #78ffd6);
    `}
`;
