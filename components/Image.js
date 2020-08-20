import styled from 'styled-components';

const Image = styled.img`
  width: 300px;
  object-fit: cover;
  border-radius: 4px;
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  margin-bottom: 40px;

  @media (max-width: 576px) {
    position: static;
    width: 100%;
    margin-bottom: 10px;
  }
`;

export default Image;
