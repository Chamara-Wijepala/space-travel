import { Link } from "react-router-dom";
import styled from "styled-components";

export const Home = styled.main`
  row-gap: 2rem;

  @media (min-width: 90em) {
    padding-bottom: 8rem;
    align-items: end;

    > :first-child {
      grid-column: 2;
      justify-self: start;
    }

    > :last-child {
      grid-column: 3;
      justify-self: end;
    }
  }
`;

export const Hero = styled.div`
  max-width: 50ch;

  h1 {
    font-family: var(--ff-barlow-condensed);
    font-size: var(--fs-400);
    letter-spacing: var(--spacing-3);
  }

  h1 span {
    font-family: var(--ff-bellefair);
    font-size: var(--fs-900);
    color: hsl(var(--clr-white));
  }

  p {
    line-height: 2rem;
  }

  @media (min-width: 90em) {
    text-align: start;
  }
`;

export const Explore = styled(Link)`
  color: hsl(var(--clr-dark));
  background-color: hsl(var(--clr-white));
  font-family: var(--ff-bellefair);
  font-size: var(--fs-500);
  padding: 0 2em;
  aspect-ratio: 1;
  border-radius: 50%;
  display: inline-grid;
  place-items: center;
  transition: 0.3s;

  :hover,
  :focus {
    box-shadow: 0 0 0 4rem hsl(var(--clr-white) / 0.136);
  }
`;
