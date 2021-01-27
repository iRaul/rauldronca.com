import { Text, Span } from '../components/Text';
import Layout from '../components/Layout';
import { ProfileImage } from '../components/Image';

export default () => (
  <>
    <Layout>
      <ProfileImage src="../static/images/me.png" alt="Raul Dronca" />

      <Text>
        I'm a <Span>User Interface Designer/Engineer</Span> living in Arad,
        Romania.
      </Text>

      <Text>
        I'm currently working remotely at{' '}
        <a
          className="link-a"
          href="https://fyusion.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fyusion
        </a>{' '}
        at the intersection between design and engineering. Constantly switching
        between UI design, front-end development and prototyping.
      </Text>

      <Text>
        Previously, I worked as a freelancer, building UI's for different
        clients such as:{' '}
        <a
          className="link-a"
          href="https://designmodo.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Designmodo
        </a>
        ,{' '}
        <a
          className="link-a"
          href="http://www.climber.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Climber
        </a>{' '}
        and{' '}
        <a
          className="link-a"
          href="http://hexbridge.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hexbridge
        </a>
        .
      </Text>

      <Text>
        While design and programming are part of my life and a huge passion of
        mine, <Span color="#ffcb1f">my faith</Span> and{' '}
        <Span color="#ffcb1f">my family</Span> are the true foundations of my
        life.
      </Text>
    </Layout>
  </>
);
