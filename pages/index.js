import Subtitle from '../components/Subtitle';
import Layout from '../components/Layout';
import { Image } from '../components/Image';

export default () => (
  <>
    <Layout>
      <Image src="../static/images/profile-pic.png" alt="Raul Dronca" />
      <Subtitle>
        I'm a <strong>User Interface Designer/Engineer</strong>, working at the
        intersection between design and engineering 🤙🏼
      </Subtitle>
    </Layout>
  </>
);
