import Container from '../components/Container';
import Subtitle from '../components/Subtitle';
import Layout from '../components/Layout';
import Title from '../components/Title';
import { Span } from '../components/Text';
import { SocialLinks, SocialLink } from '../components/Social';

export default () => (
  <>
    <Layout>
      <Container>
        <Title align="center">Raul Dronca</Title>
        <Subtitle>
          I'm a{' '}
          <Span>
            <Span primary>Designer</Span> & <Span secondary>Engineer</Span>
          </Span>
          , working at the intersection between design and engineering at{' '}
          <a className="fyusion-link" href="https://fyusion.com/">
            Fyusion
          </a>
          .
        </Subtitle>
        <SocialLinks>
          <SocialLink codepen href="https://codepen.io/rauldronca">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="#fff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 15l9 6l9 -6l-9 -6l-9 6" />
              <path d="M3 9l9 6l9 -6l-9 -6l-9 6" />
              <line x1="3" y1="9" x2="3" y2="15" />
              <line x1="21" y1="9" x2="21" y2="15" />
              <line x1="12" y1="3" x2="12" y2="9" />
              <line x1="12" y1="15" x2="12" y2="21" />
            </svg>
            Codepen
          </SocialLink>
          <SocialLink dribbble href="https://dribbble.com/rauldronk">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="#ea4c89"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="12" r="9" />
              <path d="M9 3.6c5 6 7 10.5 7.5 16.2" />
              <path d="M6.4 19c3.5 -3.5 6 -6.5 14.5 -6.4" />
              <path d="M3.1 10.75c5 0 9.814 -.38 15.314 -5" />
            </svg>
            Dribbble
          </SocialLink>
          <SocialLink github href="https://github.com/iRaul">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="#835fe4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg>
            Github
          </SocialLink>
          <SocialLink
            linkedin
            href="https://www.linkedin.com/in/raul-dronca-7434a3184/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="#00a0dc"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="4" y="4" width="16" height="16" rx="2" />
              <line x1="8" y1="11" x2="8" y2="16" />
              <line x1="8" y1="8" x2="8" y2="8.01" />
              <line x1="12" y1="16" x2="12" y2="11" />
              <path d="M16 16v-3a2 2 0 0 0 -4 0" />
            </svg>
            Linkedin
          </SocialLink>
        </SocialLinks>
      </Container>
    </Layout>
  </>
);
