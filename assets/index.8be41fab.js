import{s as r,r as l,j as s,a as e}from"./index.00060359.js";import{h as f,c as b}from"./handleTabChange.7bd38dbd.js";const u="/space-travel/assets/image-douglas-hurley.d49c6980.webp",x="/space-travel/assets/image-mark-shuttleworth.8cb8ff44.webp",w="/space-travel/assets/image-victor-glover.7debdc8b.webp",v="/space-travel/assets/image-anousheh-ansari.31e0f886.webp",y=r.main`
  grid-template-areas:
    "title"
    "image"
    "tabs"
    "content";

  h1 {
    grid-area: title;
  }

  @media (min-width: 35em) {
    h1 {
      justify-self: start;
      margin-block: 2rem;
    }

    grid-template-areas:
      "title"
      "content"
      "tabs"
      "image";
  }

  @media (min-width: 75em) {
    text-align: start;
    grid-template-columns: 1fr minmax(0, 50rem) minmax(0, 25rem) 1fr;
    grid-template-areas:
      ". title title ."
      ". content image ."
      ". tabs image .";
  }
`,j=r.div`
  grid-area: image;
  border-bottom: 1px solid hsl(var(--clr-white) / 0.1);
  display: flex;
  justify-content: center;

  img {
    max-width: 75%;
  }

  @media (min-width: 75em) {
    grid-column: span 2;
    justify-self: start;
    align-self: end;

    img {
      max-width: 90%;
    }
  }
`,k=r.div`
  grid-area: tabs;
  display: flex;
  gap: 1rem;

  @media (min-width: 35em) {
    margin-block: 2rem;
  }

  @media (min-width: 75em) {
    justify-self: start;
    gap: 1.5rem;
  }
`,C=r.article`
  grid-area: content;

  header {
    h2 {
      font-size: var(--fs-400);
      font-family: var(--ff-bellefair);
      color: hsl(var(--clr-white) / 0.5);
    }

    p {
      font-size: var(--fs-600);
      font-family: var(--ff-bellefair);
      color: hsl(var(--clr-white));
    }
  }

  p {
    max-width: 50ch;
  }

  @media (min-width: 75em) {
    justify-self: start;
  }
`;function I({data:c}){const[n,d,o,h]=c,[a,t]=l.exports.useState(n),[m,g]=l.exports.useState(0);return n.image=u,d.image=x,o.image=w,h.image=v,l.exports.useEffect(()=>{switch(m){case 0:t(n);break;case 1:t(d);break;case 2:t(o);break;case 3:t(h);break}},[m]),s(y,{className:"grid-container",children:[s("h1",{className:"numbered-title",children:[e("span",{"aria-hidden":"true",children:"02"}),"MEET YOUR CREW"]}),e(j,{children:e("img",{src:a.image,alt:`${a.name}`})}),e(k,{className:"dot-indicators",children:c.map(i=>e("button",{type:"button","data-index":i.id,onClick:p=>{f(p,g)},className:b(m===i.id&&"active"),children:e("span",{className:"sr-only",children:`The ${i.role}`})},i.id))}),s(C,{children:[s("header",{children:[e("h2",{className:"uppercase",children:a.role}),e("p",{className:"uppercase",children:a.name})]}),e("p",{className:"page-description",children:a.bio})]})]})}export{I as default};
