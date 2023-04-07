import styled from 'styled-components';

const Title = styled.h1`
  color: #fff;
  font-family: 'Inter', sans-serif;
  font-size: 2rem;
  font-weight: 900;
  margin-top: 0;
  margin-bottom: 0;
  line-height: 1;
  position: relative;
  text-align: ${props => props.align || 'left'};
  margin-bottom: ${props => props.mb || '0px'};
`;

export default Title;
