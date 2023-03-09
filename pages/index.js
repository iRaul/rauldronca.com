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
        <Title align="center">Hi! I'm Raul</Title>
        <Subtitle>
          I'm a{' '}
          <Span>
            <Span primary>Designer</Span> & <Span secondary>Engineer</Span>
          </Span>
          , working at the intersection between design and engineering at
          <a className="fyusion-link" href="https://fyusion.com/">
            <svg
              width="103"
              height="24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.008.268h11.919l-1.78 4.526H8.39l-.856 4.893h4.966l-.753 4.492H6.78L5.138 23.73H0L4.008.268zm22.399 0h5.24L20.824 23.731h-5.17l4.52-9.486h-2.261L16.782.268h5.172l.411 9.151L26.407.267v.001zm14.95 22.09C40.021 23.453 38.211 24 35.928 24c-3.95 0-5.926-1.643-5.925-4.927-.003-.551.044-1.1.137-1.643L33.086.268h5.206l-2.911 17.06a7.714 7.714 0 00-.069.671c0 .917.468 1.375 1.404 1.375.594 0 1.056-.162 1.388-.486.33-.324.553-.843.667-1.559L41.682.267h5.172l-2.945 17.164c-.366 2.189-1.217 3.83-2.552 4.926zm9.606-4.258c0 .939.435 1.408 1.302 1.408.526 0 .953-.151 1.285-.453.33-.301.53-.698.598-1.19.045-.2.068-.491.069-.87 0-.67-.166-1.257-.5-1.76-.331-.504-.886-1.056-1.661-1.66L50.48 12.37c-1.69-1.274-2.536-2.949-2.535-5.028.002-.448.037-.897.105-1.341.32-1.855 1.17-3.319 2.551-4.391C51.982.535 53.644-.001 55.586 0c1.871 0 3.282.436 4.23 1.308.948.87 1.422 2.01 1.421 3.418a6.996 6.996 0 01-.103 1.173l-.205 1.274-5.171 1.475.446-2.514c.026-.188.036-.379.033-.57 0-.983-.445-1.474-1.335-1.474-.503 0-.926.161-1.268.486a2.185 2.185 0 00-.65 1.223 5.4 5.4 0 00-.07.704c0 .56.144 1.029.429 1.408.286.38.85.938 1.695 1.676l1.85 1.642c1.575 1.34 2.364 2.995 2.364 4.96a7.9 7.9 0 01-.138 1.51c-.32 1.899-1.13 3.424-2.431 4.575C55.382 23.424 53.657 24 51.51 24c-1.782 0-3.151-.453-4.11-1.358-.96-.905-1.439-2.116-1.439-3.636 0-.438.034-.875.103-1.308l.205-1.24 5.172-1.642-.445 2.781a3.064 3.064 0 00-.034.503zM69.697.268l-4.006 23.463h-5.138L64.56.268h5.136zm4.11 1.493C75.202.588 76.994 0 79.186 0c1.917 0 3.385.447 4.4 1.34 1.017.895 1.525 2.157 1.525 3.788a7.955 7.955 0 01-.136 1.509l-1.817 10.659c-.365 2.078-1.25 3.704-2.654 4.877-1.404 1.174-3.202 1.76-5.394 1.76-1.895 0-3.35-.447-4.367-1.34-1.016-.895-1.524-2.146-1.524-3.755a8.134 8.134 0 01.137-1.542L71.17 6.637c.366-2.078 1.245-3.703 2.638-4.877zm.651 16.172c0 .492.126.861.377 1.107.25.245.593.368 1.028.368.548 0 1.01-.174 1.387-.52.377-.348.622-.878.736-1.593l1.85-10.859c.046-.268.068-.435.069-.503 0-.47-.132-.821-.395-1.056-.262-.234-.623-.351-1.079-.351-.525 0-.97.162-1.336.488-.364.325-.604.8-.719 1.422l-1.849 10.86a5.318 5.318 0 00-.069.637zM97.715.268h4.76l-4.007 23.463h-4.829l-1.747-8.714-.547-3.184-1.885 11.899H84.63L88.638.268h4.452L94.87 10.76l.514 3.084L97.715.268z"
                fill="#fff"
              />
            </svg>
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
