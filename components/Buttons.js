import styled from 'styled-components';

export const CTA = styled.button`
  padding: 12px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto 0;
  border-radius: 4px;
  border: none;
  background-color: #27282a;
  color: #fff;
  cursor: pointer;
  opacity: 1;
  font-size: 0.95rem;
  font-weight: 600;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;
