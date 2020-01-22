import styled from 'styled-components';

const Title = styled.h1`
  color: rgba(255, 255, 255, 1);
  font-size: 5.5rem;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 6px;
  line-height: 1;
  position: relative;

  @media (max-width: 576px) {
    font-size: 4.8rem;
  }
`;

export default Title;
