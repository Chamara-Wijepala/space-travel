import styled from "styled-components";

const UnderlineIndicators = styled.div`
  > * {
    border-bottom: 3px solid hsl(var(--clr-white) / 0);
    transition: border-bottom 0.3s ease-in-out;
  }

  > *:focus,
  > *:hover {
    border-bottom: 3px solid hsl(var(--clr-white) / 0.5);
  }

  > *.active {
    color: hsl(var(--clr-white));
    border-bottom: 3px solid hsl(var(--clr-white));
  }
`;

export default UnderlineIndicators;
