import{s as i,r as m,j as a,a as e}from"./index.00060359.js";import{h as f,c as u}from"./handleTabChange.7bd38dbd.js";const v="/space-travel/assets/image-moon.85007328.webp",b="/space-travel/assets/image-mars.331b18c2.webp",w="/space-travel/assets/image-europa.1633fd2e.webp",x="/space-travel/assets/image-titan.5aa00dfe.webp",y=i.main`
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
`,N=i.div`
  grid-area: container;

  @media (min-width: 75em) {
    justify-self: end;
  }
`,T=i.div`
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
`,I=i.article`
  max-width: 50ch;

  h2 {
    font-size: var(--fs-800);
    font-family: var(--ff-bellefair);
    color: hsl(var(--clr-white));
  }
`,j=i.div`
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
`;function E({data:l}){const[n,d,o,p]=l,[t,r]=m.exports.useState(n),[c,h]=m.exports.useState(0);return n.image=v,d.image=b,o.image=w,p.image=x,m.exports.useEffect(()=>{switch(c){case 0:r(n);break;case 1:r(d);break;case 2:r(o);break;case 3:r(p);break}},[c]),a(y,{className:"grid-container",children:[a("h1",{className:"numbered-title",children:[e("span",{"aria-hidden":"true",children:"01"}),"PICK YOUR DESTINATION"]}),e("img",{src:t.image,alt:t.name,className:"uppercase"}),a(N,{children:[e(T,{className:"underline-indicators",children:l.map(s=>e("button",{type:"button","data-index":s.id,onClick:g=>{f(g,h)},className:u("uppercase",c===s.id&&"active"),children:s.name},s.id))}),a(I,{children:[e("h2",{className:"uppercase",children:t.name}),e("p",{className:"page-description",children:t.description}),a(j,{className:"uppercase",children:[a("div",{children:[e("h3",{children:"AVG. DISTANCE"}),e("p",{children:t.distance})]}),a("div",{children:[e("h3",{children:"EST. TRAVEL TIME"}),e("p",{children:t.travel})]})]})]})]})]})}export{E as default};
