import Layout from '../components/Layout';
import Title from '../components/Title';
import { List, PorfolioItem, ListLink } from '../components/List';

export default () => (
  <>
    <Layout>
      <Title mb="40px">Projects</Title>

      <List>
        <PorfolioItem>
          <ListLink
            href="https://www.creative-portfolios.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Creative Portfolios
          </ListLink>
          — A curated list of Creative Portfolios.
        </PorfolioItem>

        <PorfolioItem>
          <ListLink
            href="https://podcasts-repo.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Podcasts Repo
          </ListLink>
          — A collection of podcasts around the web.
        </PorfolioItem>

        <PorfolioItem>
          <ListLink
            href="https://minimal-images.now.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Minimal Images
          </ListLink>
          — Minimal Images from Unsplash.
        </PorfolioItem>

        <PorfolioItem>
          <ListLink
            href="https://iraul.github.io/pushy-buttons/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pushy Buttons
          </ListLink>
          — A small CSS Pressable Buttons library.
        </PorfolioItem>

        <PorfolioItem>
          <ListLink
            href="http://minimal-todo.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Minimal To Do
          </ListLink>
          — A minimal to do list.
        </PorfolioItem>

        <PorfolioItem>
          <ListLink
            href="https://mdprv.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Markdown Previewer
          </ListLink>
          — Simple Markdown Previewer.
        </PorfolioItem>

        <PorfolioItem>
          <ListLink
            href="https://css-filters-camera.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CSS Filters Camera
          </ListLink>
          — A CSS filters realtime camera.
        </PorfolioItem>

        <PorfolioItem>
          <ListLink
            href="http://box-shadow-generator.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Box Shadow Generator
          </ListLink>
          — CSS box-shadow generator.
        </PorfolioItem>

        <PorfolioItem>
          <ListLink
            href="http://hex-color-generator.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hex Color Generator
          </ListLink>
          — Random HEX Color Code Generator.
        </PorfolioItem>
      </List>
    </Layout>
  </>
);
