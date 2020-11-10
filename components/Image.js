import styled from 'styled-components';

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 4px;
  display: block;
`;

export const FamilyImage = styled.img`
  max-width: 800px;
  object-fit: cover;
  border-radius: 4px;
  position: absolute;
  right: -15%;

  @media (max-width: 576px) {
    position: static;
    width: 100%;
  }
`;

export const PorfolioImage = styled.a`
  opacity: 0.9;
  display: block;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;
