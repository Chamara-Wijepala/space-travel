import styled from "styled-components";
import MoonLoader from "react-spinners/MoonLoader";

const StyledSpinner = styled.div`
  position: absolute;
  inset: 0 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Spinner() {
  return (
    <StyledSpinner
      className="glass-morphism"
      role="alert"
      aria-live="assertive"
    >
      <MoonLoader color="white" />
      <p className="sr-only">Loading</p>
    </StyledSpinner>
  );
}

export default Spinner;
