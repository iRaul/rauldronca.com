import Layout from '../components/Layout';
import { Image, PorfolioImage } from '../components/Image';
import { List, PorfolioItem, ListLink } from '../components/List';

export default () => (
  <>
    <Layout>
      <List>
        <PorfolioItem>
          <PorfolioImage
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.creative-portfolios.com/"
          >
            <Image src="../static/images/cp.png" />
          </PorfolioImage>
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
          <PorfolioImage
            target="_blank"
            rel="noopener noreferrer"
            href="https://podcasts-repo.surge.sh/"
          >
            <Image src="../static/images/pr.png" />
          </PorfolioImage>
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
          <PorfolioImage
            target="_blank"
            rel="noopener noreferrer"
            href="https://minimal-images.now.sh/"
          >
            <Image src="../static/images/mi.png" />
          </PorfolioImage>
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
          <PorfolioImage
            target="_blank"
            rel="noopener noreferrer"
            href="https://iraul.github.io/pushy-buttons/"
          >
            <Image src="../static/images/pb.png" />
          </PorfolioImage>
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
          <PorfolioImage
            target="_blank"
            rel="noopener noreferrer"
            href="http://minimal-todo.surge.sh/"
          >
            <Image src="../static/images/mt.png" />
          </PorfolioImage>
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
          <PorfolioImage
            target="_blank"
            rel="noopener noreferrer"
            href="https://mdprv.surge.sh/"
          >
            <Image src="../static/images/mp.png" />
          </PorfolioImage>
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
          <PorfolioImage
            target="_blank"
            rel="noopener noreferrer"
            href="https://css-filters-camera.surge.sh/"
          >
            <Image src="../static/images/cssf.png" />
          </PorfolioImage>
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
          <PorfolioImage
            target="_blank"
            rel="noopener noreferrer"
            href="http://box-shadow-generator.surge.sh/"
          >
            <Image src="../static/images/bsg.png" />
          </PorfolioImage>
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
          <PorfolioImage
            target="_blank"
            rel="noopener noreferrer"
            href="http://hex-color-generator.surge.sh/"
          >
            <Image src="../static/images/hcg.png" />
          </PorfolioImage>
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
