import styled from "styled-components";

import hamburgerIcon from "assets/shared/icon-hamburger.svg";
import closeIcon from "assets/shared/icon-close.svg";

interface INavToggleState {
  navToggleState: boolean;
}

export const Header = styled.header`
  min-height: 6rem;
  display: grid;
  padding-left: 1.5rem;

  @media (min-width: 35em) {
    padding-left: 0;
    grid-template-columns:
      minmax(1.5rem, 1fr)
      minmax(7em, 38em)
      minmax(27em, 52em)
      1fr;

    > :first-child {
      grid-column: 2;
    }

    > :last-child {
      grid-column: 3 / -1;
    }
  }

  @media (min-width: 75em) {
    margin-block: 2.5rem;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 75em) {
    ::after {
      content: "";
      position: relative;
      z-index: 1000;
      width: 87%;
      height: 1px;
      left: 4rem;
      background: hsl(var(--clr-white) / 0.25);
    }
  }
`;

export const Nav = styled.nav<INavToggleState>`
  color: hsl(var(--clr-white));
  display: flex;
  gap: clamp(2rem, 5vw, 3rem);
  padding-left: 7.5rem;

  a {
    font-family: var(--ff-barlow-condensed);
    letter-spacing: var(--spacing-2);
    min-height: 2rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    span {
      font-weight: bold;
    }
  }

  @media (min-width: 35em) and (max-width: 74.99em) {
    padding-left: 3rem;

    a span {
      display: none;
    }
  }

  @media (max-width: 35em) {
    flex-direction: column;
    padding: 7.5rem 0 0 2rem;
    position: fixed;
    inset: 0 0 0 30%;
    transform: translateX(
      ${({ navToggleState }) => (navToggleState ? "0%" : "100%")}
    );
    transition: transform 300ms ease-in-out;

    a.active {
      border-bottom: 3px solid hsl(var(--clr-white) / 0);
      border-right: 4px solid hsl(var(--clr-white));
    }
  }
`;

export const NavToggle = styled.button<INavToggleState>`
  display: none;

  :focus-visible {
    outline: 3px solid hsl(var(--clr-white));
    outline-offset: 3px;
  }

  @media (max-width: 35em) {
    display: block;
    position: absolute;
    z-index: 1000;
    right: 1.5rem;
    top: 2rem;
    /* This is a workaround as conditionally rendering image in url() method does not work with ts-styled-plugin */
    ${({ navToggleState }) =>
      navToggleState
        ? `background-image: url(${closeIcon});`
        : `background-image: url(${hamburgerIcon});`}
    background-repeat: no-repeat;
    background-position: center;
    width: 1.5rem;
    aspect-ratio: 1;
  }
`;
