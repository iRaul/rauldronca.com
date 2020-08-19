import Title from '../components/Title';
import Text from '../components/Text';
import Layout from '../components/Layout';
import { List, ListItem, ListLink } from '../components/List';

export default () => (
  <>
    <Layout>
      <Title>Contact</Title>
      <Text>
        Do you have awesome projects or just want to say hi?{' '}
        <a
          href="mailto:rauldronk@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get in touch.
        </a>
      </Text>

      <List>
        <ListItem>
          <ListLink
            href="https://twitter.com/raul_dronca"
            target="_blank"
            rel="noopener noreferrer"
            color="#1da1f2"
          >
            Twitter
          </ListLink>
          — Say hi! Follow me 🙂
        </ListItem>
        <ListItem>
          <ListLink
            href="https://dribbble.com/rauldronk"
            target="_blank"
            rel="noopener noreferrer"
            color="#ea4c89"
          >
            Dribbble
          </ListLink>
          — UI Design Experiments
        </ListItem>
        <ListItem>
          <ListLink
            href="https://github.com/iRaul"
            target="_blank"
            rel="noopener noreferrer"
            color="#fafafa"
          >
            Github
          </ListLink>
          — Open Source Projects
        </ListItem>
        <ListItem>
          <ListLink
            href="https://codepen.io/rauldronca"
            target="_blank"
            rel="noopener noreferrer"
            color="#47cf73"
          >
            Codepen
          </ListLink>
          — UI and CSS Experiments
        </ListItem>
        <ListItem>
          <ListLink
            href="https://www.linkedin.com/in/raul-dronca-7434a3184/"
            target="_blank"
            rel="noopener noreferrer"
            color="#00a0dc"
          >
            Linkedin
          </ListLink>
          — My Resume
        </ListItem>
      </List>
    </Layout>
  </>
);
