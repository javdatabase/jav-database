import React, { Fragment, memo } from "react";
import styled from "styled-components";

import Backdrop from "../UI/Backdrop/Backdrop";
import IdolAvatar from "./IdolAvatar";

import { fadeIn } from "../../themes/styled";

const AvatarIdol = styled(IdolAvatar)`
  position: fixed;
  z-index: 300;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: ${props => (props.show === "true" ? "block" : "none")};
  height: 90vh;
  border-radius: 12px;
  animation: ${fadeIn} 0.3s ease-in-out;
`;

function IdolPicture({ show, toggleModal, data }) {
  return (
    <Fragment>
      <Backdrop show={show} hiddenModal={toggleModal} />
      <AvatarIdol show={show.toString()} src={data} />
    </Fragment>
  );
}

const MemoIdolPicture = memo(IdolPicture);

export default MemoIdolPicture;
