import styled from "styled-components";

export const Main = styled.main`
  grid-template-areas:
    "title"
    "image"
    "tabs"
    "content";

  h1 {
    grid-area: title;
  }

  img {
    grid-area: image;
  }

  @media (min-width: 35em) {
    h1 {
      justify-self: start;
      margin-block: 2rem;
    }

    grid-template-areas:
      "title"
      "content"
      "tabs"
      "image";
  }

  @media (min-width: 90em) {
    text-align: start;
    grid-template-areas:
      ". title title ."
      ". content image ."
      ". tabs image .";
  }
`;

export const TabPanel = styled.div`
  grid-area: tabs;
  display: flex;
  gap: 1rem;

  @media (min-width: 90em) {
    justify-self: start;
    gap: 1.5rem;
  }
`;

export const Article = styled.article`
  grid-area: content;

  header {
    h2 {
      font-size: var(--fs-400);
      font-family: var(--ff-bellefair);
      color: hsl(var(--clr-white) / 0.5);
    }

    p {
      font-size: var(--fs-600);
      font-family: var(--ff-bellefair);
      color: hsl(var(--clr-white));
    }
  }

  p {
    max-width: 50ch;
  }

  @media (min-width: 90em) {
    justify-self: start;
  }
`;
