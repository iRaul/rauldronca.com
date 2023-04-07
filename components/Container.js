import styled from 'styled-components';

const Container = styled.div`
  max-width: 400px;
  width: 100%;
  height: 100%;
  margin: 120px auto 0;
  padding: 15px;
  position: relative;

  ${({ noMargin }) => noMargin && 'margin: 0 auto;'}
`;

export default Container;
