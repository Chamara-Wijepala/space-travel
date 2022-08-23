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
`;

export const Article = styled.article`
  grid-area: content;
`;
