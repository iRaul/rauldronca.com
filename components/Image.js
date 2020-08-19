import styled from 'styled-components';

const Image = styled.div`
  width: 360px;
  height: 250px;
  background-image: url(${props => props.src});
  background-position: top;
  background-size: cover;
  border-radius: 4px;
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  margin-bottom: 40px;

  @media (max-width: 576px) {
    height: 300px;
  }
`;

export default Image;
