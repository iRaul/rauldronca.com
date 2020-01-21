import styled from 'styled-components';

import Title from '../components/Title';
import Layout from '../components/Layout';
import Link from '../components/Link';
import { CTA } from '../components/Buttons';

const Subtitle = styled.h2`
  font-size: 2.6rem;
  font-weight: 300;
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
`;

export default () => (
  <>
    <Layout>
      <Title>Raul Dronca</Title>
      <Subtitle>User Interface Designer/Engineer</Subtitle>
      <Link href="/about">
        <CTA>More about me</CTA>
      </Link>
    </Layout>
  </>
);
