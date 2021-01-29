import Container from '../components/Container';
import Layout from '../components/Layout';
import Title from '../components/Title';

import { List, ListTitle, ListText, PorfolioItem } from '../components/List';

export default () => (
  <>
    <Layout>
      <Container>
        <Title mb="40px">Projects</Title>

        <List>
          <PorfolioItem
            href="https://www.creative-portfolios.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ListTitle>
              Creative Portfolios
              <svg
                fill="none"
                height="14"
                viewBox="0 0 9 9"
                width="9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="m3.00001 0c-.27616 0-.5.223877-.5.5s.22384.5.5.5h3.79294l-6.646489 6.64648c-.1952815.19519-.1952815.51185 0 .70704.195252.19531.511841.19531.707093 0l6.646456-6.64649v3.79297c0 .27612.22384.5.5.5.27615 0 .5-.22388.5-.5v-5c0-.276123-.22385-.5-.5-.5z"
                  fill="#fff"
                  fillRule="evenodd"
                  transform="translate(.5)"
                ></path>
              </svg>
            </ListTitle>
            <ListText>A curated list of Creative Portfolios.</ListText>
          </PorfolioItem>

          <PorfolioItem
            href="https://podcasts-repo.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ListTitle>
              Podcasts Repo
              <svg
                fill="none"
                height="15"
                viewBox="0 0 9 9"
                width="9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="m3.00001 0c-.27616 0-.5.223877-.5.5s.22384.5.5.5h3.79294l-6.646489 6.64648c-.1952815.19519-.1952815.51185 0 .70704.195252.19531.511841.19531.707093 0l6.646456-6.64649v3.79297c0 .27612.22384.5.5.5.27615 0 .5-.22388.5-.5v-5c0-.276123-.22385-.5-.5-.5z"
                  fill="#fff"
                  fillRule="evenodd"
                  transform="translate(.5)"
                ></path>
              </svg>
            </ListTitle>
            <ListText>A collection of podcasts around the web.</ListText>
          </PorfolioItem>

          <PorfolioItem
            href="https://minimal-images.now.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ListTitle>
              Minimal Images
              <svg
                fill="none"
                height="15"
                viewBox="0 0 9 9"
                width="9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="m3.00001 0c-.27616 0-.5.223877-.5.5s.22384.5.5.5h3.79294l-6.646489 6.64648c-.1952815.19519-.1952815.51185 0 .70704.195252.19531.511841.19531.707093 0l6.646456-6.64649v3.79297c0 .27612.22384.5.5.5.27615 0 .5-.22388.5-.5v-5c0-.276123-.22385-.5-.5-.5z"
                  fill="#fff"
                  fillRule="evenodd"
                  transform="translate(.5)"
                ></path>
              </svg>
            </ListTitle>
            <ListText>Minimal Images from Unsplash.</ListText>
          </PorfolioItem>

          <PorfolioItem
            href="https://iraul.github.io/pushy-buttons/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ListTitle>
              Pushy Buttons
              <svg
                fill="none"
                height="15"
                viewBox="0 0 9 9"
                width="9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="m3.00001 0c-.27616 0-.5.223877-.5.5s.22384.5.5.5h3.79294l-6.646489 6.64648c-.1952815.19519-.1952815.51185 0 .70704.195252.19531.511841.19531.707093 0l6.646456-6.64649v3.79297c0 .27612.22384.5.5.5.27615 0 .5-.22388.5-.5v-5c0-.276123-.22385-.5-.5-.5z"
                  fill="#fff"
                  fillRule="evenodd"
                  transform="translate(.5)"
                ></path>
              </svg>
            </ListTitle>
            <ListText>A small CSS Pressable Buttons library.</ListText>
          </PorfolioItem>

          <PorfolioItem
            href="http://minimal-todo.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ListTitle>
              Minimal To Do
              <svg
                fill="none"
                height="15"
                viewBox="0 0 9 9"
                width="9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="m3.00001 0c-.27616 0-.5.223877-.5.5s.22384.5.5.5h3.79294l-6.646489 6.64648c-.1952815.19519-.1952815.51185 0 .70704.195252.19531.511841.19531.707093 0l6.646456-6.64649v3.79297c0 .27612.22384.5.5.5.27615 0 .5-.22388.5-.5v-5c0-.276123-.22385-.5-.5-.5z"
                  fill="#fff"
                  fillRule="evenodd"
                  transform="translate(.5)"
                ></path>
              </svg>
            </ListTitle>
            <ListText>A minimal to do list.</ListText>
          </PorfolioItem>

          <PorfolioItem
            href="https://mdprv.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ListTitle>
              Markdown Previewer
              <svg
                fill="none"
                height="15"
                viewBox="0 0 9 9"
                width="9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="m3.00001 0c-.27616 0-.5.223877-.5.5s.22384.5.5.5h3.79294l-6.646489 6.64648c-.1952815.19519-.1952815.51185 0 .70704.195252.19531.511841.19531.707093 0l6.646456-6.64649v3.79297c0 .27612.22384.5.5.5.27615 0 .5-.22388.5-.5v-5c0-.276123-.22385-.5-.5-.5z"
                  fill="#fff"
                  fillRule="evenodd"
                  transform="translate(.5)"
                ></path>
              </svg>
            </ListTitle>
            <ListText>Simple Markdown Previewer.</ListText>
          </PorfolioItem>

          <PorfolioItem
            href="https://css-filters-camera.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ListTitle>
              CSS Filters Camera
              <svg
                fill="none"
                height="15"
                viewBox="0 0 9 9"
                width="9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="m3.00001 0c-.27616 0-.5.223877-.5.5s.22384.5.5.5h3.79294l-6.646489 6.64648c-.1952815.19519-.1952815.51185 0 .70704.195252.19531.511841.19531.707093 0l6.646456-6.64649v3.79297c0 .27612.22384.5.5.5.27615 0 .5-.22388.5-.5v-5c0-.276123-.22385-.5-.5-.5z"
                  fill="#fff"
                  fillRule="evenodd"
                  transform="translate(.5)"
                ></path>
              </svg>
            </ListTitle>
            <ListText>A CSS filters realtime camera.</ListText>
          </PorfolioItem>

          <PorfolioItem
            href="http://box-shadow-generator.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ListTitle>
              Box Shadow Generator
              <svg
                fill="none"
                height="15"
                viewBox="0 0 9 9"
                width="9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="m3.00001 0c-.27616 0-.5.223877-.5.5s.22384.5.5.5h3.79294l-6.646489 6.64648c-.1952815.19519-.1952815.51185 0 .70704.195252.19531.511841.19531.707093 0l6.646456-6.64649v3.79297c0 .27612.22384.5.5.5.27615 0 .5-.22388.5-.5v-5c0-.276123-.22385-.5-.5-.5z"
                  fill="#fff"
                  fillRule="evenodd"
                  transform="translate(.5)"
                ></path>
              </svg>
            </ListTitle>
            <ListText>CSS box-shadow generator.</ListText>
          </PorfolioItem>

          <PorfolioItem
            href="http://hex-color-generator.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ListTitle>
              Hex Color Generator
              <svg
                fill="none"
                height="15"
                viewBox="0 0 9 9"
                width="9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="m3.00001 0c-.27616 0-.5.223877-.5.5s.22384.5.5.5h3.79294l-6.646489 6.64648c-.1952815.19519-.1952815.51185 0 .70704.195252.19531.511841.19531.707093 0l6.646456-6.64649v3.79297c0 .27612.22384.5.5.5.27615 0 .5-.22388.5-.5v-5c0-.276123-.22385-.5-.5-.5z"
                  fill="#fff"
                  fillRule="evenodd"
                  transform="translate(.5)"
                ></path>
              </svg>
            </ListTitle>
            <ListText>Random HEX Color Code Generator.</ListText>
          </PorfolioItem>
        </List>
      </Container>
    </Layout>
  </>
);
