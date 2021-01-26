import Subtitle from '../components/Subtitle';
import Layout from '../components/Layout';
import Title from '../components/Title';
import { CTA } from '../components/Buttons';
import { Span } from '../components/Text';

export default () => (
  <>
    <Layout>
      <Title align="center">Hi! I'm Raul</Title>
      <Subtitle>
        I'm a{' '}
        <Span>
          User Interface <Span primary>Designer</Span> &{' '}
          <Span secondary>Engineer</Span>
        </Span>
        , working at the intersection between design and engineering.
      </Subtitle>
      <CTA>More about me ›</CTA>
    </Layout>
  </>
);
