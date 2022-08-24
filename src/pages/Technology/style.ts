import styled from "styled-components";

export const Main = styled.main`
  padding-inline: 0;
  row-gap: 2rem;
  grid-auto-rows: max-content;
  grid-template-areas:
    "title"
    "image"
    "container";

  h1 {
    grid-area: title;
  }

  @media (min-width: 35em) {
    row-gap: 4rem;
  }

  @media (min-width: 35em) and (max-width: 89.99em) {
    h1 {
      margin-top: 2.5rem;
    }
  }

  @media (min-width: 90em) {
    row-gap: 1.5rem;
    grid-template-columns: 1fr minmax(0, 40rem) minmax(0, 30rem) 1fr;
    grid-template-areas:
      ". title title ."
      ". container image .";
  }
`;

export const Picture = styled.picture`
  grid-area: image;

  @media (min-width: 90em) {
    grid-column: span 2;
    justify-self: end;
  }
`;

export const Container = styled.div`
  grid-area: container;

  @media (min-width: 90em) {
    display: flex;
  }
`;

export const TabPanel = styled.div``;

export const Article = styled.article``;
