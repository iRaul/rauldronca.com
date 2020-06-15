import styled from 'styled-components';

const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: normal;
  line-height: 1.5;
  margin-top: 15px;
  margin-bottom: 0;
  color: rgba(255, 255, 255, 0.8);
  max-width: 550px;

  @media (max-width: 576px) {
    font-size: 1.7rem;
  }
`;

export default Subtitle;
