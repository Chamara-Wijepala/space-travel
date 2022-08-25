# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Links

- [Solution on Frontend Mentor](https://www.frontendmentor.io/solutions/space-tourism-project-using-react-typescript-and-styled-components-ZdFN3bIDVB)
- [Live Demo](https://chamara-wijepala.github.io/space-travel/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)

### What I learned

- Doing this project really solidified my understanding of CSS Grid. I feel like my knowledge of Grid was lacking before having to use it in the project.

- I learned how to lazy load React components and display a custom loading spinner using Suspense

```js
import { Suspense, lazy } from "react";
import Spinner from "components/Spinner";

const Home = lazy(() => import("pages/Home"));

<Suspense fallback={<Spinner />}>
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
</Suspense>;
```

- Dynamically importing with JS. I used this method to import the background images for each page.

```js
const image = await import(`./assets/${path}/background-${path}-${size}.jpg`);
```

- Using the ::before and ::after CSS pseudo selectors. I used the ::after selector to create the line in the header between the logo and the nav.

```css
::after {
  content: "";
  position: relative;
  z-index: 1000;
  width: 87%;
  height: 1px;
  left: 4rem;
  background: hsl(var(--clr-white) / 0.25);
}
```

### Useful resources

- [Deploying Vite App to GitHub Pages](https://dev.to/shashannkbawa/deploying-vite-app-to-github-pages-3ane) - This article helped me to deploy this project to github pages.

## Author

- Frontend Mentor - [@Chamara-Wijepala](https://www.frontendmentor.io/profile/Chamara-Wijepala)

## Acknowledgments

This project is the result of a collaboration between [Frontend Mentor](https://www.frontendmentor.io/home), [Scrimba](https://scrimba.com) and [Kevin Powell](https://twitter.com/KevinJPowell).

Kevin was the course instructor in this project and I learned a lot from him.

### Packages

- [clsx](https://www.npmjs.com/package/clsx)
- [React Router](https://reactrouter.com/en/main)
- [React Spinners](https://www.npmjs.com/package/react-spinners)
- [Upper Case First](https://www.npmjs.com/package/upper-case-first)
