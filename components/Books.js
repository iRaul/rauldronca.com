import styled from 'styled-components';

export const BooksGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;
  margin-top: 50px;
  margin-bottom: 100px;
`;

export const BookWrapper = styled.div`
  display: flex;
  flex-direction: column;
  perspective: 600px;
`;

export const BookCover = styled.div`
  width: 200px;
  height: 300px;
  position: relative;
  transform-style: preserve-3d;
  transform: rotateY(-30deg);
  transition: transform 1s ease;
  margin-bottom: 30px;
  /* animation: 1s ease 0s 1 initAnimation-5c9a; */

  @keyframes initAnimation-5c9a {
    0% {
      transform: rotateY(-5deg);
    }
    100% {
      transform: rotateY(-30deg);
    }
  }

  &:hover {
    transform: rotateY(-5deg);
  }

  &::before {
    position: absolute;
    content: ' ';
    left: 0;
    top: 3px;
    width: 48px;
    height: 294px;
    transform: translateX(172px) rotateY(90deg);
    background: linear-gradient(
      90deg,
      #fff 0%,
      #f9f9f9 5%,
      #fff 10%,
      #f9f9f9 15%,
      #fff 20%,
      #f9f9f9 25%,
      #fff 30%,
      #f9f9f9 35%,
      #fff 40%,
      #f9f9f9 45%,
      #fff 50%,
      #f9f9f9 55%,
      #fff 60%,
      #f9f9f9 65%,
      #fff 70%,
      #f9f9f9 75%,
      #fff 80%,
      #f9f9f9 85%,
      #fff 90%,
      #f9f9f9 95%,
      #fff 100%
    );
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    content: ' ';
    width: 200px;
    height: 300px;
    transform: translateZ(-25px);
    background-color: #595959;
    border-radius: 0 2px 2px 0;
    /* box-shadow: -10px 0 50px 10px #aaaaaa; */
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    height: 300px;
    transform: translateZ(25px);
    background-color: #01060f;
    border-radius: 0 2px 2px 0;
    /* box-shadow: 5px 5px 20px #aaaaaa; */
    background-color: #01060f;
  }
`;

export const BookTitle = styled.span`
  display: block;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 4px;
`;

export const BookDescription = styled.span`
  color: #cacaca;
  font-style: italic;
`;
