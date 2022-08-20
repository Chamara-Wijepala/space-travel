import styled from "styled-components";

import GridContainer from "styles/GridContainer";

export const Destination = styled(GridContainer)`
  gap: 2rem;
  grid-template-areas:
    "title"
    "image"
    "tabs"
    "content";

  // NumberedTitle styled component
  h1 {
    grid-area: title;
  }

  img {
    grid-area: image;
    max-width: 60%;
  }

  @media (min-width: 35em) {
    h1 {
      justify-self: start;
      margin-top: 2rem;
    }
  }

  @media (min-width: 90em) {
    align-content: start;
    justify-items: start;

    img {
      max-width: 90%;
    }

    grid-template-areas:
      ". title title ."
      ". image tabs ."
      ". image content .";
  }
`;

export const TabList = styled.div`
  grid-area: tabs;
`;

export const Article = styled.article`
  grid-area: content;
`;

export const Meta = styled.div``;
