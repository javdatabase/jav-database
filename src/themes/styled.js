import { css, keyframes } from "styled-components";

const center = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export { center, fadeIn };
