import styled from 'styled-components';

const Img = styled.img`
  position: absolute;
  width: 120px;
  top: 0;

  @media (max-width: 576px) {
    display: none;
  }
`;

const Memoji = () => <Img src="../static/images/memoji.png" alt="Memoji" />;

export default Memoji;
