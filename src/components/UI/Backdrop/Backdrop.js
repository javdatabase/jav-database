import React, { memo } from "react";
import styled from "styled-components";

import { Black } from "../../../themes/colors";

const Component = styled.div`
  display: ${props => (props.show ? "block" : "none")};
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  right: 0px;
  z-index: 200;
  background-color: ${Black};
  opacity: 0.6;
  transition: 0.3s;
`;

function Backdrop({ show, hiddenModal, ...props }) {
  return <Component {...props} show={show} onClick={hiddenModal} />;
}

const MemoBackdrop = memo(Backdrop);

export default MemoBackdrop;
