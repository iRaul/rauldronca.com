import styled from 'styled-components';

// CTA Button
export const CTA = styled.a`
  display: inline-block;
  font-size: 1.5rem;
  font-weight: 300;
  margin-top: 10px;

  &:hover {
    &:after {
      transform: translateX(20px);
    }
  }
`;
