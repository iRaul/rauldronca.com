import styled from 'styled-components';

import Title from '../components/Title';
import Layout from '../components/Layout';

const Image = styled.div`
  width: 100%;
  height: 500px;
  background-image: url('../static/images/family.jpg');
  background-position: center;
  background-size: cover;
  border-radius: 8px;
  margin-bottom: 40px;
`;

const Text = styled.p`
  font-size: 1.4rem;
  font-weight: 200;
  line-height: 1.5;
`;

export default () => (
  <>
    <Layout>
      <Title>About</Title>

      <Image />

      <Text>
        Currently working for Fyusion at the intersection between design and
        engineering. Constantly switching between UI design, front-end
        development and prototyping.
      </Text>
    </Layout>
  </>
);
