import styled from 'styled-components';

const Container = styled.div`
  max-width: ${props => (props.large ? '992px' : '650px')};
  width: 100%;
  height: 100%;
  margin: 120px auto 0;
  padding: 15px;
  position: relative;
`;

export default Container;
