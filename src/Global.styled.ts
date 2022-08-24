import { createGlobalStyle } from "styled-components";

interface IProps {
  imagePaths: {
    desktop?: string;
    tablet?: string;
    mobile?: string;
  };
}

const GlobalStyle = createGlobalStyle<IProps>`

//  Edited version of CSS rest by Andy Bell
//  https://piccalil.li/blog/a-modern-css-reset/

*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
  font: inherit;
}

ul[role='list'],
ol[role='list'] {
  list-style: none;
}

html:focus-within {
  scroll-behavior: smooth;
}

html,
body {
  min-height: 100vh;
}

body {
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

a {
  outline: none;
  text-decoration: none;
  color: inherit;
}

a:not([class]) {
  text-decoration-skip-ink: auto;
}

img,
picture,
svg {
  max-width: 100%;
  display: block;
}

@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

button {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  cursor: pointer;
  outline: inherit;
}

/* ------------------ */
/* Custom Properties  */
/* ------------------ */

:root {
  /* hsl values for colors */
  --clr-white: 0 0% 100%;
  --clr-light: 231 77% 90%;
  --clr-dark: 230 35% 7%;

  --spacing-1: 2.35px;
  --spacing-2: 2.7px;
  --spacing-3: 4.75px;

  --ff-bellefair: "Bellefair", serif;
  --ff-barlow: "Barlow", sans-serif;
  --ff-barlow-condensed: "Barlow Condensed", sans-serif;

  --fs-900: clamp(5rem, 8vw + 1rem, 9.375rem);
  --fs-800: 3.5rem;
  --fs-700: 1.75rem;
  --fs-600: 1.5rem;
  --fs-500: 1.25rem;
  --fs-400: 1rem;
  --fs-300: 1rem;
  --fs-200: 0.875rem;

  @media (min-width: 48em) {
    --fs-800: 5rem;
    --fs-600: 2.5rem;
    --fs-500: 2rem;
    --fs-400: 1.5rem;
    --fs-300: 1.25rem;
  }

  @media (min-width: 90em) {
    --fs-800: 6.25rem;
    --fs-600: 4rem;
    --fs-400: 2rem;
    --fs-300: 1.75rem
  }
}

/* ------------------ */
/* Utility Classed    */
/* ------------------ */

.sr-only {
  position:absolute;
  left:-10000px;
  top:auto;
  width:1px;
  height:1px;
  overflow:hidden;
}

.glass-morphism {
  background: hsl(var(--clr-white) / .04);
  backdrop-filter: blur(1.5rem);
}

.uppercase {
  text-transform: uppercase;
}

/* ------------------ */
/* Styles             */
/* ------------------ */

#root {
  overflow: hidden;
  min-height: inherit;
  display: grid;
  grid-template-rows: min-content 1fr;
}

body {
  font-family: var(--ff-barlow);
  color: hsl(var(--clr-light));
  background-size: cover;
  background-position: center;
  background-image: url(${({ imagePaths }) => imagePaths.desktop});

  @media (max-width: 48em) {
    background-image: url(${({ imagePaths }) => imagePaths.tablet});
  }

  @media (max-width: 23.44em) {
    background-image: url(${({ imagePaths }) => imagePaths.mobile});
  }
}

.grid-container {
  padding-inline: 1.5rem;
  display: grid;
  place-items: center;
  text-align: center;
  
  @media (min-width: 90em) {
    grid-template-columns: 1fr repeat(2, minmax(0, 35rem)) 1fr;
  }
}

.numbered-title {
  color: hsl(var(--clr-white));
  font-family: var(--ff-barlow-condensed);
  font-size: var(--fs-400);
  letter-spacing: var(--spacing-1);

  span {
    margin-right: 1.5rem;
    color: hsl(var(--clr-white) / 0.25);
    font-weight: bold;
  }

  @media (min-width: 35em) {
    letter-spacing: var(--spacing-2);
  }

  @media (min-width: 90em) {
    letter-spacing: var(--spacing-3);
  }
}

.underline-indicators {
  > * {
    border-bottom: 3px solid hsl(var(--clr-white) / 0);
    transition: border-bottom 0.3s ease-in-out;
  }

  > :focus,
  > :hover {
    border-bottom: 3px solid hsl(var(--clr-white) / 0.5);
  }

  > .active {
    color: hsl(var(--clr-white));
    border-bottom: 3px solid hsl(var(--clr-white));
  }
}

.dot-indicators {
  > * {
    padding: 0.5em;
    border-radius: 50%;
    background-color: hsl(var(--clr-white) / .17);
    transition: background-color 0.3s ease-in-out;
  }

  > :focus,
  > :hover {
    background-color: hsl(var(--clr-white) / 0.5);
  }

  > .active {
    background-color: hsl(var(--clr-white));
  }
}

.numbered-indicators {
  > * {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: clamp(0.5em, 5vw, 1em);
    aspect-ratio: 1;
    border-radius: 50%;
    border: 1px solid hsl(var(--clr-white) / 0.25);
    font-family: var(--ff-bellefair);
    font-size: clamp(1rem, 5vw, 2rem);
    transition: border 0.3s ease-in-out;
  }

  > :focus,
  > :hover {
    border: 1px solid hsl(var(--clr-white));
  }

  > .active {
    color: hsl(var(--clr-dark));
    background-color: hsl(var(--clr-white));
  }
}
`;

export default GlobalStyle;
