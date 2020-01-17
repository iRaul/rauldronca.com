import styled from 'styled-components';

import Title from '../components/Title';
import Layout from '../components/Layout';

const Subtitle = styled.h2`
  font-size: 2.6rem;
  font-weight: 300;
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
`;

const CTA = styled.a`
  display: block;
  font-size: 1.8rem;
  font-weight: 300;
  margin-top: 40px;
  color: rgba(255, 255, 255, 1);
`;

export default () => (
  <>
    <Layout>
      <Title>Raul Dronca</Title>
      <Subtitle>User Interface Designer & Engineer</Subtitle>
      <CTA>More about me →</CTA>
    </Layout>
  </>
);
