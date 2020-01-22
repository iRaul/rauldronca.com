import Title from '../components/Title';
import Layout from '../components/Layout';
import { List, ListItem, ListLink } from '../components/List';

export default () => (
  <>
    <Layout>
      <Title>Projects</Title>

      <List>
        <ListItem>
          <ListLink
            href="https://www.creative-portfolios.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Creative Portfolios
          </ListLink>
          A curated list of Creative Portfolios.
        </ListItem>
        <ListItem>
          <ListLink
            href="https://podcasts-repo.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Podcasts Repo
          </ListLink>
          A collection of podcasts around the web.
        </ListItem>
        <ListItem>
          <ListLink
            href="https://minimal-images.now.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Minimal Images
          </ListLink>
          Minimal Images from Unsplash.
        </ListItem>
        <ListItem>
          <ListLink
            href="https://iraul.github.io/pushy-buttons/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pushy Buttons
          </ListLink>
          A small CSS Pressable Buttons library.
        </ListItem>
        <ListItem>
          <ListLink
            href="http://minimal-todo.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Minimal To Do
          </ListLink>
          A minimal to do list.
        </ListItem>
        <ListItem>
          <ListLink
            href="https://mdprv.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Markdown Previewer
          </ListLink>
          Simple Markdown Previewer.
        </ListItem>
        <ListItem>
          <ListLink
            href="https://css-filters-camera.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CSS Filters Camera
          </ListLink>
          A CSS filters realtime camera.
        </ListItem>
        <ListItem>
          <ListLink
            href="http://box-shadow-generator.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Box Shadow Generator
          </ListLink>
          CSS box-shadow generator.
        </ListItem>
        <ListItem>
          <ListLink
            href="http://hex-color-generator.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hex Color Generator
          </ListLink>
          Random HEX Color Code Generator.
        </ListItem>
      </List>
    </Layout>
  </>
);
