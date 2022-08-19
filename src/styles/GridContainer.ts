import styled from "styled-components";

const GridContainer = styled.main`
  padding-inline: 1.5rem;
  display: grid;
  place-items: center;
  text-align: center;

  @media (min-width: 90em) {
    grid-template-columns: 1fr repeat(2, minmax(0, 35rem)) 1fr;
  }
`;

export default GridContainer;
