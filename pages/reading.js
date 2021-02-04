import { Tab, Tabs, TabList, TabPanel, resetIdCounter } from 'react-tabs';
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
import TabsWrapper from '../components/TabsWrapper';

resetIdCounter();

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
        <TabsWrapper>
          <Tabs>
            <TabList>
              <Tab>2021</Tab>
              <Tab>2020</Tab>
              <Tab>2019</Tab>
              <Tab>2018</Tab>
            </TabList>

            {/* 2021 Books */}
            <TabPanel>
              <BooksGrid>
                <BookWrapper>
                  <BookCover>
                    <img
                      src="../static/images/books/the-bruised-reed.jpg"
                      alt="Book"
                    />
                  </BookCover>
                  <BookTitle>The Bruised Reed</BookTitle>
                  <BookDescription>Richard Sibbes</BookDescription>
                </BookWrapper>

                <BookWrapper>
                  <BookCover>
                    <img
                      src="../static/images/books/autobiography-john-bunyan.jpg"
                      alt="Book"
                    />
                  </BookCover>
                  <BookTitle>Autobiography of John Bunyan</BookTitle>
                  <BookDescription>John Bunyan</BookDescription>
                </BookWrapper>

                <BookWrapper>
                  <BookCover>
                    <img
                      src="../static/images/books/all-of-grace.jpg"
                      alt="Book"
                    />
                  </BookCover>
                  <BookTitle>All of Grace</BookTitle>
                  <BookDescription>Charles Haddon Spurgeon</BookDescription>
                </BookWrapper>
              </BooksGrid>
            </TabPanel>

            {/* 2020 Books */}
            <TabPanel>
              <BooksGrid>
                <BookWrapper>
                  <BookCover>
                    <img
                      src="../static/images/books/holiness-of-god.jpg"
                      alt="Book"
                    />
                  </BookCover>
                  <BookTitle>The Holiness of God</BookTitle>
                  <BookDescription>R.C. Sproul</BookDescription>
                </BookWrapper>

                <BookWrapper>
                  <BookCover>
                    <img
                      src="../static/images/books/george-muller.jpg"
                      alt="Book"
                    />
                  </BookCover>
                  <BookTitle>The Autobiography of George Muller</BookTitle>
                  <BookDescription>George Muller</BookDescription>
                </BookWrapper>

                <BookWrapper>
                  <BookCover>
                    <img
                      src="../static/images/books/puritans-eroll-hulse.jpg"
                      alt="Book"
                    />
                  </BookCover>
                  <BookTitle>Introduction to the Puritans</BookTitle>
                  <BookDescription>Errol Hulse</BookDescription>
                </BookWrapper>

                <BookWrapper>
                  <BookCover>
                    <img
                      src="../static/images/books/the-cross-mlj.jpg"
                      alt="Book"
                    />
                  </BookCover>
                  <BookTitle>The Cross</BookTitle>
                  <BookDescription>Martyn Lloyd Jones</BookDescription>
                </BookWrapper>

                <BookWrapper>
                  <BookCover>
                    <img
                      src="../static/images/books/walking-with-god.jpg"
                      alt="Book"
                    />
                  </BookCover>
                  <BookTitle>Walking with God</BookTitle>
                  <BookDescription>J.C. Ryle</BookDescription>
                </BookWrapper>

                <BookWrapper>
                  <BookCover>
                    <img
                      src="../static/images/books/spectacular-sins.jpg"
                      alt="Book"
                    />
                  </BookCover>
                  <BookTitle>Spectacular Sins</BookTitle>
                  <BookDescription>John Piper</BookDescription>
                </BookWrapper>

                <BookWrapper>
                  <BookCover>
                    <img
                      src="../static/images/books/spiritual-depresion.jpg"
                      alt="Book"
                    />
                  </BookCover>
                  <BookTitle>Spiritual Depression</BookTitle>
                  <BookDescription>Martyn LLoyd-Jones</BookDescription>
                </BookWrapper>

                <BookWrapper>
                  <BookCover>
                    <img
                      src="../static/images/books/gospel-for-real-life.jpg"
                      alt="Book"
                    />
                  </BookCover>
                  <BookTitle>The Gospel for real life</BookTitle>
                  <BookDescription>Jerry Bridges</BookDescription>
                </BookWrapper>

                <BookWrapper>
                  <BookCover>
                    <img
                      src="../static/images/books/pursuit-of-holliness.jpg"
                      alt="Book"
                    />
                  </BookCover>
                  <BookTitle>The Pursuit of Holiness</BookTitle>
                  <BookDescription>Jerry Bridges</BookDescription>
                </BookWrapper>

                <BookWrapper>
                  <BookCover>
                    <img
                      src="../static/images/books/thinking-spiritually.jpg"
                      alt="Book"
                    />
                  </BookCover>
                  <BookTitle>Thinking Spiritually</BookTitle>
                  <BookDescription>John Owen</BookDescription>
                </BookWrapper>

                <BookWrapper>
                  <BookCover>
                    <img
                      src="../static/images/books/calvinist-baptists-history.jpg"
                      alt="Book"
                    />
                  </BookCover>
                  <BookTitle>History of the Calvinistic Baptists</BookTitle>
                  <BookDescription>Robert W. Oliver</BookDescription>
                </BookWrapper>

                <BookWrapper>
                  <BookCover>
                    <img
                      src="../static/images/books/martin-luther.jpg"
                      alt="Book"
                    />
                  </BookCover>
                  <BookTitle>Here I stand</BookTitle>
                  <BookDescription>Roland H. Bainton</BookDescription>
                </BookWrapper>
              </BooksGrid>
            </TabPanel>

            {/* 2019 Books */}
            <TabPanel>
              <BooksGrid>
                <BookWrapper>
                  <BookCover>
                    <img
                      src="../static/images/books/deep-work.jpeg"
                      alt="Book"
                    />
                  </BookCover>
                  <BookTitle>Deep Work</BookTitle>
                  <BookDescription>Robert W. Oliver</BookDescription>
                </BookWrapper>

                <BookWrapper>
                  <BookCover>
                    <img
                      src="../static/images/books/remote-work.jpg"
                      alt="Book"
                    />
                  </BookCover>
                  <BookTitle>Remote</BookTitle>
                  <BookDescription>Jason Fried</BookDescription>
                </BookWrapper>

                <BookWrapper>
                  <BookCover>
                    <img src="../static/images/books/rework.jpg" alt="Book" />
                  </BookCover>
                  <BookTitle>Rework</BookTitle>
                  <BookDescription>Jason Fried</BookDescription>
                </BookWrapper>

                <BookWrapper>
                  <BookCover>
                    <img
                      src="../static/images/books/thinking-fast-thinking-slow.jpg"
                      alt="Book"
                    />
                  </BookCover>
                  <BookTitle>Thinking, Fast and Slow</BookTitle>
                  <BookDescription>Daniel Kahneman</BookDescription>
                </BookWrapper>
              </BooksGrid>
            </TabPanel>

            {/* 2018 Books */}
            <TabPanel>
              <BooksGrid>
                <BookWrapper>
                  <BookCover>
                    <img
                      src="../static/images/books/elon-musk.jpg"
                      alt="Book"
                    />
                  </BookCover>
                  <BookTitle>Elon Musk Biography</BookTitle>
                  <BookDescription>Ashlee Vance</BookDescription>
                </BookWrapper>

                <BookWrapper>
                  <BookCover>
                    <img src="../static/images/books/feynman.jpg" alt="Book" />
                  </BookCover>
                  <BookTitle>Surely You're Joking, Mr. Feynman!</BookTitle>
                  <BookDescription>Ralph Leighton</BookDescription>
                </BookWrapper>

                <BookWrapper>
                  <BookCover>
                    <img
                      src="../static/images/books/tools-of-titans.jpg"
                      alt="Book"
                    />
                  </BookCover>
                  <BookTitle>Tools of Titans</BookTitle>
                  <BookDescription>Timothy Ferriss</BookDescription>
                </BookWrapper>

                <BookWrapper>
                  <BookCover>
                    <img
                      src="../static/images/books/the-pragmatic-programmer.jpg"
                      alt="Book"
                    />
                  </BookCover>
                  <BookTitle>The Pragamatic Programmer</BookTitle>
                  <BookDescription>Andy Hunt / Dave Thomas</BookDescription>
                </BookWrapper>
              </BooksGrid>
            </TabPanel>
          </Tabs>
        </TabsWrapper>
      </Container>
    </Layout>
  </>
);
