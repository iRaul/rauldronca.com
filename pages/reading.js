import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {
  BooksGrid,
  BookWrapper,
  BookCover,
  BookTitle,
  BookDescription,
} from '../components/Books';
import Container from '../components/Container';
import Subtitle from '../components/Subtitle';
import Layout from '../components/Layout';
import Title from '../components/Title';

export default () => (
  <>
    <Layout>
      <Container>
        <Title>Books 📚</Title>
        <Subtitle mt="5px" align="left">
          Books I've read and books I'm currently reading.
        </Subtitle>
      </Container>

      <Container large noMargin>
        <BooksGrid>
          <BookWrapper>
            <BookCover>
              <img
                src="../static/images/books/holiness-of-god.jpg"
                alt="Book"
              />
            </BookCover>
            <BookTitle>The Holiness of God</BookTitle>
            <BookDescription>— R.C. Sproul</BookDescription>
          </BookWrapper>

          <BookWrapper>
            <BookCover>
              <img src="../static/images/books/george-muller.jpg" alt="Book" />
            </BookCover>
            <BookTitle>The Autobiography of George Muller</BookTitle>
            <BookDescription>— George Muller</BookDescription>
          </BookWrapper>

          <BookWrapper>
            <BookCover>
              <img
                src="../static/images/books/puritans-eroll-hulse.jpg"
                alt="Book"
              />
            </BookCover>
            <BookTitle>Introduction to the Puritans</BookTitle>
            <BookDescription>— Errol Hulse</BookDescription>
          </BookWrapper>

          <BookWrapper>
            <BookCover>
              <img src="../static/images/books/the-cross-mlj.jpg" alt="Book" />
            </BookCover>
            <BookTitle>The Cross</BookTitle>
            <BookDescription>— Martyn Lloyd Jones</BookDescription>
          </BookWrapper>
        </BooksGrid>
      </Container>
    </Layout>
  </>
);
