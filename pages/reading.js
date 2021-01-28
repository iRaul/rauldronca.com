import { BooksGrid, BookWrapper, BookCover } from '../components/Books';
import Layout from '../components/Layout';
import Title from '../components/Title';

export default () => (
  <>
    <Layout>
      <Title>Books 📚</Title>

      <BooksGrid>
        <BookWrapper>
          <BookCover>
            <img
              src="../static/images/books/holiness-of-god.jpg"
              alt="R.C. Sproul"
            />
          </BookCover>
        </BookWrapper>

        <BookWrapper>
          <BookCover>
            <img
              src="../static/images/books/george-muller.jpg"
              alt="R.C. Sproul"
            />
          </BookCover>
        </BookWrapper>
      </BooksGrid>
    </Layout>
  </>
);
