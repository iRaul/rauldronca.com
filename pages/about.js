import Title from '../components/Title';
import Text from '../components/Text';
import Layout from '../components/Layout';
import Image from '../components/Image';
import Images from '../components/Images';

export default () => (
  <>
    <Layout>
      <Text>Hello there 👋</Text>

      <Text>
        I'm a User Interface Designer/Engineer living in Arad, Romania.
      </Text>

      <Text>
        I'm currently working remotely at{' '}
        <a
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
          href="https://designmodo.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Designmodo
        </a>
        ,{' '}
        <a
          href="http://www.climber.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Climber
        </a>{' '}
        and{' '}
        <a
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
        mine, <strong>my faith</strong> and <strong>my family</strong> are the
        true foundations of my life.
      </Text>

      <Images>
        <Image top="10px" left="-30px" src="../static/images/me.jpg" />
        <Image top="30px" left="220px" src="../static/images/family.jpg" />
        <Image top="200px" left="-50px" src="../static/images/natalia.jpg" />
        <Image top="210px" left="200px" src="../static/images/naia-mami.jpg" />
      </Images>
    </Layout>
  </>
);
