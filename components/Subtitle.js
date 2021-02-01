import styled from 'styled-components';

const Subtitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.5;
  margin-top: ${props => props.mt || '15px'};
  margin-bottom: ${props => props.mb || '0'};
  color: #e2e2e2;
  max-width: 100%;
  text-align: ${props => props.align || 'center'};
`;

export default Subtitle;
