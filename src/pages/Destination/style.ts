import styled from "styled-components";

import GridContainer from "styles/GridContainer";
import UnderlineIndicators from "styles/UnderlineIndicators";

export const Destination = styled(GridContainer)`
  padding-bottom: 3.5rem;
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
    align-self: start;
  }

  @media (min-width: 35em) {
    h1 {
      justify-self: start;
      margin-block: 2rem;
    }
  }

  @media (min-width: 90em) {
    align-content: start;
    justify-items: start;
    text-align: start;

    img {
      max-width: 90%;
    }

    grid-template-areas:
      ". title title ."
      ". image tabs ."
      ". image content .";
  }
`;

export const TabPanel = styled(UnderlineIndicators)`
  grid-area: tabs;
  min-height: 2.5rem;
  letter-spacing: var(--spacing-1);
  display: flex;
  gap: 2rem;

  @media (min-width: 35em) {
    letter-spacing: var(--spacing-2);
  }
`;

export const Article = styled.article`
  grid-area: content;
  max-width: 50ch;

  h2 {
    font-size: var(--fs-800);
    font-family: var(--ff-bellefair);
    color: hsl(var(--clr-white));
  }
`;

export const Meta = styled.div`
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid hsl(var(--clr-white) / 0.1);
  display: flex;
  gap: 2rem;
  flex-direction: column;
  justify-content: space-evenly;

  h3 {
    font-family: var(--ff-barlow-condensed);
    letter-spacing: var(--spacing-1);
  }

  p {
    font-size: var(--fs-700);
    font-family: var(--ff-bellefair);
    color: hsl(var(--clr-white));
  }

  @media (min-width: 35em) {
    flex-direction: row;
  }
`;
