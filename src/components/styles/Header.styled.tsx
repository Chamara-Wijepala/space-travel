import styled from "styled-components";

import hamburgerIcon from "assets/shared/icon-hamburger.svg";
import closeIcon from "assets/shared/icon-close.svg";

interface INavToggleState {
  navToggleState: boolean;
}

export const Header = styled.header``;

export const Nav = styled.nav<INavToggleState>`
  position: fixed;
  inset: 0 0 0 30%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 7.5rem 0 0 2rem;

  transform: translateX(
    ${({ navToggleState }) => (navToggleState ? "0%" : "100%")}
  );
  transition: transform 300ms ease-in-out;

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

  a.active {
    border-right: 4px solid hsl(var(--clr-white));
  }
`;

export const NavToggle = styled.button<INavToggleState>`
  :focus-visible {
    outline: 3px solid hsl(var(--clr-white));
    outline-offset: 3px;
  }

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
`;
