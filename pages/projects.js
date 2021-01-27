import Layout from '../components/Layout';
import Title from '../components/Title';

import { List, ListTitle, ListText, PorfolioItem } from '../components/List';

export default () => (
  <>
    <Layout>
      <Title mb="40px">Projects</Title>

      <List>
        <PorfolioItem
          href="https://www.creative-portfolios.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ListTitle>Creative Portfolios</ListTitle>
          <ListText>A curated list of Creative Portfolios.</ListText>
        </PorfolioItem>

        <PorfolioItem
          href="https://podcasts-repo.surge.sh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ListTitle>Podcasts Repo</ListTitle>
          <ListText>A collection of podcasts around the web.</ListText>
        </PorfolioItem>

        <PorfolioItem
          href="https://minimal-images.now.sh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ListTitle>Minimal Images</ListTitle>
          <ListText>Minimal Images from Unsplash.</ListText>
        </PorfolioItem>

        <PorfolioItem
          href="https://iraul.github.io/pushy-buttons/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ListTitle>Pushy Buttons</ListTitle>
          <ListText>A small CSS Pressable Buttons library.</ListText>
        </PorfolioItem>

        <PorfolioItem
          href="http://minimal-todo.surge.sh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ListTitle>Minimal To Do</ListTitle>
          <ListText>A minimal to do list.</ListText>
        </PorfolioItem>

        <PorfolioItem
          href="https://mdprv.surge.sh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ListTitle>Markdown Previewer</ListTitle>
          <ListText>Simple Markdown Previewer.</ListText>
        </PorfolioItem>

        <PorfolioItem
          href="https://css-filters-camera.surge.sh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ListTitle>CSS Filters Camera</ListTitle>
          <ListText>A CSS filters realtime camera.</ListText>
        </PorfolioItem>

        <PorfolioItem
          href="http://box-shadow-generator.surge.sh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ListTitle>Box Shadow Generator</ListTitle>
          <ListText>CSS box-shadow generator.</ListText>
        </PorfolioItem>

        <PorfolioItem
          href="http://hex-color-generator.surge.sh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ListTitle>Hex Color Generator</ListTitle>
          <ListText>Random HEX Color Code Generator.</ListText>
        </PorfolioItem>
      </List>
    </Layout>
  </>
);
