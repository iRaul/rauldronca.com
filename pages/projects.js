import styled from 'styled-components';

import Title from '../components/Title';
import Layout from '../components/Layout';
import List from '../components/List';

const Portfolio = styled.li`
  color: rgba(255, 255, 255, 0.8);

  a {
    font-weight: 400;

    &:after {
      content: '—';
      margin: 0 10px;
    }
  }
`;

export default () => (
  <>
    <Layout>
      <Title>Projects</Title>

      <List>
        <Portfolio>
          <a
            href="https://www.creative-portfolios.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Creative Portfolios
          </a>
          A curated list of Creative Portfolios.
        </Portfolio>
        <Portfolio>
          <a
            href="https://podcasts-repo.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Podcasts Repo
          </a>
          A collection of podcasts around the web.
        </Portfolio>
        <Portfolio>
          <a
            href="https://minimal-images.now.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Minimal Images
          </a>
          Minimal Images from Unsplash.
        </Portfolio>
        <Portfolio>
          <a
            href="https://iraul.github.io/pushy-buttons/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pushy Buttons
          </a>
          A small CSS Pressable Buttons library.
        </Portfolio>
        <Portfolio>
          <a
            href="http://minimal-todo.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Minimal To Do
          </a>
          A minimal to do list.
        </Portfolio>
        <Portfolio>
          <a
            href="https://mdprv.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Markdown Previewer
          </a>
          Simple Markdown Previewer.
        </Portfolio>
        <Portfolio>
          <a
            href="https://css-filters-camera.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CSS Filters Camera
          </a>
          A CSS filters realtime camera.
        </Portfolio>
        <Portfolio>
          <a
            href="http://box-shadow-generator.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Box Shadow Generator
          </a>
          CSS box-shadow generator.
        </Portfolio>
        <Portfolio>
          <a
            href="http://hex-color-generator.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hex Color Generator
          </a>
          Random HEX Color Code Generator.
        </Portfolio>
      </List>
    </Layout>
  </>
);
