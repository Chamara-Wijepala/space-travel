import styled from "styled-components";

export const Main = styled.main`
  padding-bottom: 3.5rem;
  gap: 2rem;
  grid-template-areas:
    "title"
    "image"
    "container";

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

  @media (min-width: 75em) {
    align-content: start;
    text-align: start;

    img {
      max-width: 90%;
    }

    grid-template-areas:
      ". title title ."
      ". image container .";
  }
`;

export const Container = styled.div`
  grid-area: container;

  @media (min-width: 75em) {
    justify-self: end;
  }
`;

export const TabPanel = styled.div`
  min-height: 2.5rem;
  letter-spacing: var(--spacing-1);
  display: flex;
  justify-content: center;
  gap: 2rem;

  @media (min-width: 35em) {
    letter-spacing: var(--spacing-2);
  }

  @media (min-width: 75em) {
    justify-content: start;
  }
`;

export const Article = styled.article`
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
