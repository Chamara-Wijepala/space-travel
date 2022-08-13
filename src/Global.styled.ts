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
  height: 100%;
}

body {
  text-rendering: optimizeSpeed;
  line-height: 1.5;
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

/* ------------------ */
/* Styles             */
/* ------------------ */

body {
  background-size: cover;
  background-position: center;
  background-image: url(${({ imagePaths }) => imagePaths.desktop});

  @media (max-width: 768px) {
    background-image: url(${({ imagePaths }) => imagePaths.tablet});
  }

  @media (max-width: 375px) {
    background-image: url(${({ imagePaths }) => imagePaths.mobile});
  }
}
`;

export default GlobalStyle;
