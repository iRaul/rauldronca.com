import styled from 'styled-components';

const Image = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(${props => props.src});
  background-position: center;
  background-size: cover;
  border-radius: 8px;
  margin-bottom: 40px;
`;

export default Image;
