import{s as r,r as m,j as a,a as e}from"./index.00060359.js";import{h,c as f}from"./handleTabChange.7bd38dbd.js";const u="/space-travel/assets/image-launch-vehicle-landscape.37b2246f.jpg",x="/space-travel/assets/image-launch-vehicle-portrait.7165cee7.jpg",v="/space-travel/assets/image-spaceport-landscape.c4258e76.jpg",w="/space-travel/assets/image-spaceport-portrait.8f5c81cf.jpg",b="/space-travel/assets/image-space-capsule-landscape.2e8d59ba.jpg",y="/space-travel/assets/image-space-capsule-portrait.c67ebf87.jpg",j=r.main`
  padding-inline: 0;
  padding-bottom: 5rem;
  row-gap: 2rem;
  grid-auto-rows: max-content;
  grid-template-areas:
    "title"
    "image"
    "container";

  h1 {
    grid-area: title;
    padding-left: 1.5rem;
  }

  @media (min-width: 35em) {
    row-gap: 4rem;
  }

  @media (min-width: 35em) and (max-width: 74.99em) {
    h1 {
      margin-top: 2.5rem;
    }
  }

  @media (min-width: 75em) {
    text-align: start;
    row-gap: 1.5rem;
    grid-template-columns: 1fr minmax(0, 45rem) minmax(0, 30rem) 1fr;
    grid-template-areas:
      ". title title ."
      ". container image .";

    h1 {
      justify-self: start;
      padding-left: 0;
    }
  }
`,I=r.picture`
  grid-area: image;

  @media (min-width: 75em) {
    grid-column: span 2;
    justify-self: end;
  }
`,N=r.div`
  grid-area: container;
  padding-left: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: clamp(1.5rem, 5vw, 5rem);

  @media (min-width: 75em) {
    flex-direction: row;
    justify-self: start;
    padding-left: 0;
  }
`,T=r.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  @media (min-width: 75em) {
    flex-direction: column;
    gap: 2rem;
  }
`,C=r.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  header {
    h2 {
      font-family: var(--ff-barlow-condensed);
      letter-spacing: var(--spacing-1);
    }

    p {
      font-size: var(--fs-600);
      font-family: var(--ff-bellefair);
      color: hsl(var(--clr-white));
    }

    @media (min-width: 35em) {
      h2 {
        letter-spacing: var(--spacing-2);
      }
    }
  }

  p {
    max-width: 53ch;
  }

  @media (max-width: 35em) {
    padding-inline: 1.5rem;
  }
`;function k({data:p}){const[s,n,c]=p,[t,l]=m.exports.useState(s),[d,o]=m.exports.useState(0);return s.landscapeImage=u,s.portraitImage=x,n.landscapeImage=v,n.portraitImage=w,c.landscapeImage=b,c.portraitImage=y,m.exports.useEffect(()=>{switch(d){case 0:l(s);break;case 1:l(n);break;case 2:l(c);break}},[d]),a(j,{className:"grid-container",children:[a("h1",{className:"numbered-title",children:[e("span",{children:"03"}),"SPACE LAUNCH 101"]}),a(I,{children:[e("source",{media:"(min-width: 75em)",srcSet:t.portraitImage}),e("img",{src:t.landscapeImage,alt:t.name})]}),a(N,{children:[e(T,{className:"numbered-indicators",children:p.map(i=>a("button",{type:"button","data-index":i.id,onClick:g=>{h(g,o)},className:f(d===i.id&&"active"),children:[i.id+1,e("span",{className:"sr-only",children:`The ${i.name}`})]},i.id))}),a(C,{children:[a("header",{children:[e("h2",{children:"THE TERMINOLOGY..."}),e("p",{className:"uppercase",children:t.name})]}),e("p",{className:"page-description",children:t.description})]})]})]})}export{k as default};
