import{s as a,L as r,j as i,a as e}from"./index.00060359.js";const t=a.main`
  row-gap: 2rem;

  @media (min-width: 75em) {
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
`,n=a.div`
  max-width: 50ch;

  h1 {
    font-family: var(--ff-barlow-condensed);
    font-size: var(--fs-300);
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

  @media (min-width: 75em) {
    text-align: start;
  }
`,s=a(r)`
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
`;function l(){return i(t,{className:"grid-container",children:[i(n,{children:[i("h1",{children:["SO, YOU WANT TO TRAVEL TO ",e("br",{})," ",e("span",{children:"SPACE"})]}),e("p",{className:"page-description",children:"Let\u2019s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we\u2019ll give you a truly out of this world experience!"})]}),e(s,{to:"/destination",children:"EXPLORE"})]})}export{l as default};
