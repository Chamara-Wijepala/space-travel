import styled from "styled-components";

const NumberedTitle = styled.h1`
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
`;

export default NumberedTitle;
