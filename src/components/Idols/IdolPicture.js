import React, { Fragment, useMemo, useCallback } from "react";
import styled from "styled-components";

import Backdrop from "../UI/Backdrop/Backdrop";
import IdolAvatar from "./IdolAvatar";

import { White, Black, Pink, Orange } from "../../themes/colors";
import { fadeIn, center } from "../../themes/styled";
import { XXLarge } from "../../themes/font";

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

const PrevButton = styled.div`
  position: fixed;
  z-index: 500;
  top: 50%;
  left: 28%;
  transform: translateY(-50%);
  ${center}
  display: ${props => (props.show === "true" ? "flex" : "none")};
  width: 40px;
  height: 40px;
  background-color: ${Orange};
  border-radius: 12px;
  color: ${Black};
  font-size: ${XXLarge};
  animation: ${fadeIn} 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: ${Pink};
    color: ${White};
  }
`;

const NextButton = styled.div`
  position: fixed;
  z-index: 500;
  top: 50%;
  right: 28%;
  transform: translateY(-50%);
  ${center}
  display: ${props => (props.show === "true" ? "flex" : "none")};
  width: 40px;
  height: 40px;
  background-color: ${Orange};
  border-radius: 12px;
  color: ${Black};
  font-size: ${XXLarge};
  animation: ${fadeIn} 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: ${Pink};
    color: ${White};
  }
`;

function IdolPicture({ show, toggleModal, listData, data, setData }) {
  const current = useMemo(() => {
    return listData.indexOf(data);
  }, [listData, data]);

  const prevImage = useCallback(() => {
    if (current <= 0) {
      setData(listData[listData.length - 1]);
    } else {
      setData(listData[current - 1]);
    }
  }, [listData, current, setData]);

  const nextImage = useCallback(() => {
    if (current >= listData.length - 1) {
      setData(listData[0]);
    } else {
      setData(listData[current + 1]);
    }
  }, [listData, current, setData]);

  return (
    <Fragment>
      <Backdrop show={show} hiddenModal={toggleModal} />
      <PrevButton show={show.toString()} onClick={prevImage}>
        {"<"}
      </PrevButton>
      <AvatarIdol show={show.toString()} src={data} />
      <NextButton show={show.toString()} onClick={nextImage}>
        {">"}
      </NextButton>
    </Fragment>
  );
}

export default IdolPicture;
