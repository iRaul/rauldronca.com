import styled from 'styled-components';

import Title from '../components/Title';
import Text from '../components/Text';
import Layout from '../components/Layout';
import Image from '../components/Image';

const Wrapper = styled.div`
  padding: 0 50px;

  @media (max-width: 576px) {
    padding: 0;
  }
`;

export default () => (
  <>
    <Layout>
      <Title>About</Title>
      <Image src="../static/images/me.jpg" />
      <Wrapper>
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
          at the intersection between design and engineering. Constantly
          switching between UI design, front-end development and prototyping.
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
      </Wrapper>

      <Image src="../static/images/family.jpg" />
    </Layout>
  </>
);
