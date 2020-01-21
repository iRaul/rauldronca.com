import styled from 'styled-components';

import Title from '../components/Title';
import Layout from '../components/Layout';

const Image = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(${props => props.src});
  background-position: center;
  background-size: cover;
  border-radius: 8px;
  margin-bottom: 40px;
`;

const Text = styled.p`
  font-size: 1.4rem;
  font-weight: 200;
  line-height: 1.6;
`;

const Wrapper = styled.div`
  padding: 0 50px;
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
          </a>
          , at the intersection between design and engineering. Constantly
          switching between UI design, front-end development and prototyping.
        </Text>

        <Text>
          Before working for Fyusion, I worked as a freelancer for different
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
