import styled from 'styled-components';

import Title from '../components/Title';
import Layout from '../components/Layout';
import List from '../components/List';

const Item = styled.li`
  a {
    color: ${props => props.color};
    opacity: 0.8;
    transition: opacity 0.3s ease;
    font-weight: 400;

    &:hover {
      opacity: 1;
    }
  }
`;

export default () => (
  <>
    <Layout>
      <Title>Contact</Title>

      <List>
        <Item color="#1da1f2">
          <a
            href="https://twitter.com/raul_dronca"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </Item>
        <Item color="#ea4c89">
          <a
            href="https://dribbble.com/rauldronk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dribbble
          </a>
        </Item>
        <Item color="#fafafa">
          <a
            href="https://github.com/iRaul"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </Item>
        <Item color="#47cf73">
          <a
            href="https://codepen.io/rauldronca"
            target="_blank"
            rel="noopener noreferrer"
          >
            Codepen
          </a>
        </Item>
        <Item color="#00a0dc">
          <a
            href="https://www.linkedin.com/in/raul-dronca-7434a3184/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </Item>
        <Item color="#fbbc05">
          <a
            href="mailto:rauldronk@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
        </Item>
      </List>
    </Layout>
  </>
);
