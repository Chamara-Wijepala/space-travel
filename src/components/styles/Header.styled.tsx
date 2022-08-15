import styled from "styled-components";

export const Header = styled.header``;

export const Nav = styled.nav`
  position: fixed;
  inset: 0 0 0 30%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 7.5rem 0 0 2rem;

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
