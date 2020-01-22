import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import Layout from '../components/Layout';
import Link from '../components/Link';
import { CTA } from '../components/Buttons';

export default () => (
  <>
    <Layout>
      <Title>Raul Dronca</Title>
      <Subtitle>User Interface Designer/Engineer.</Subtitle>
      <Link href="/about">
        <CTA>More about me</CTA>
      </Link>
    </Layout>
  </>
);
