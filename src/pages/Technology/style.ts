import styled from "styled-components";

export const Main = styled.main`
  padding-inline: 0;
  padding-bottom: 5rem;
  row-gap: 2rem;
  grid-auto-rows: max-content;
  grid-template-areas:
    "title"
    "image"
    "container";

  h1 {
    grid-area: title;
    padding-left: 1.5rem;
  }

  @media (min-width: 35em) {
    row-gap: 4rem;
  }

  @media (min-width: 35em) and (max-width: 74.99em) {
    h1 {
      margin-top: 2.5rem;
    }
  }

  @media (min-width: 75em) {
    text-align: start;
    row-gap: 1.5rem;
    grid-template-columns: 1fr minmax(0, 45rem) minmax(0, 30rem) 1fr;
    grid-template-areas:
      ". title title ."
      ". container image .";

    h1 {
      justify-self: start;
      padding-left: 0;
    }
  }
`;

export const Picture = styled.picture`
  grid-area: image;

  @media (min-width: 75em) {
    grid-column: span 2;
    justify-self: end;
  }
`;

export const Container = styled.div`
  grid-area: container;
  padding-left: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: clamp(1.5rem, 5vw, 5rem);

  @media (min-width: 75em) {
    flex-direction: row;
    justify-self: start;
    padding-left: 0;
  }
`;

export const TabPanel = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  @media (min-width: 75em) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  header {
    h2 {
      font-family: var(--ff-barlow-condensed);
      letter-spacing: var(--spacing-1);
    }

    p {
      font-size: var(--fs-600);
      font-family: var(--ff-bellefair);
      color: hsl(var(--clr-white));
    }

    @media (min-width: 35em) {
      h2 {
        letter-spacing: var(--spacing-2);
      }
    }
  }

  p {
    max-width: 53ch;
  }

  @media (max-width: 35em) {
    padding-inline: 1.5rem;
  }
`;
