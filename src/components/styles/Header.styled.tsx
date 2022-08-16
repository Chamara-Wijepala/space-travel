import styled from "styled-components";

import hamburgerIcon from "assets/shared/icon-hamburger.svg";
import closeIcon from "assets/shared/icon-close.svg";

interface INavToggleState {
  navToggleState: boolean;
}

export const Header = styled.header``;

export const Nav = styled.nav<INavToggleState>`
  display: flex;
  gap: 2rem;

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

  @media (max-width: 23.44em) {
    flex-direction: column;
    padding: 7.5rem 0 0 2rem;
    position: fixed;
    inset: 0 0 0 30%;
    transform: translateX(
      ${({ navToggleState }) => (navToggleState ? "0%" : "100%")}
    );
    transition: transform 300ms ease-in-out;

    a.active {
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

  @media (max-width: 23.44em) {
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
