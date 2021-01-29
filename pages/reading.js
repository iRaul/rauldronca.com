import { BooksGrid, BookWrapper, BookCover } from '../components/Books';
import { Span } from '../components/Text';
import Container from '../components/Container';
import Layout from '../components/Layout';
import Title from '../components/Title';

export default () => (
  <>
    <Layout>
      <Container>
        <Title>Books 📚</Title>
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
            <Span fontSize="1.1rem" mb="5px">
              The Holiness of God
            </Span>
            <Span fontWeight="500" fontStyle="italic" fontColor="#e3e3e3">
              — R.C. Sproul
            </Span>
          </BookWrapper>

          <BookWrapper>
            <BookCover>
              <img src="../static/images/books/george-muller.jpg" alt="Book" />
            </BookCover>
            <Span fontSize="1.1rem" mb="5px">
              The Autobiography of George Muller
            </Span>
            <Span fontWeight="500" fontStyle="italic" fontColor="#e3e3e3">
              — George Muller
            </Span>
          </BookWrapper>

          <BookWrapper>
            <BookCover>
              <img
                src="../static/images/books/puritans-eroll-hulse.jpg"
                alt="Book"
              />
            </BookCover>
            <Span fontSize="1.1rem" mb="5px">
              Introduction to the Puritans
            </Span>
            <Span fontWeight="500" fontStyle="italic" fontColor="#e3e3e3">
              — Errol Hulse
            </Span>
          </BookWrapper>

          <BookWrapper>
            <BookCover>
              <img src="../static/images/books/the-cross-mlj.jpg" alt="Book" />
            </BookCover>
            <Span fontSize="1.1rem" mb="5px">
              The Cross
            </Span>
            <Span fontWeight="500" fontStyle="italic" fontColor="#e3e3e3">
              — Martyn Lloyd Jones
            </Span>
          </BookWrapper>
        </BooksGrid>
      </Container>
    </Layout>
  </>
);
