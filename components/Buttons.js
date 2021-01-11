import styled from 'styled-components';

export const CTA = styled.button`
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto 0;
  border-radius: 4px;
  border: none;
  background-color: #00cc88;
  color: #000;
  cursor: pointer;
  opacity: 0.9;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }
`;
