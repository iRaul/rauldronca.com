import styled from 'styled-components';

// CTA Button
export const CTA = styled.a`
  display: block;
  font-size: 1.8rem;
  font-weight: 300;
  margin-top: 40px;
  color: #fbbc05;
  opacity: 0.8;
  transition: opacity 0.3s ease;

  &:after {
    content: '→';
    margin-left: 10px;
    display: inline-block;
    transition: transform 0.3s ease;
  }

  &:hover {
    opacity: 1;
    &:after {
      transform: translateX(20px);
    }
  }
`;
