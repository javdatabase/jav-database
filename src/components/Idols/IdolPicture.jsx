import React, { Fragment, memo, useMemo, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

import Backdrop from "../UI/Backdrop/Backdrop";
import Image from "../Image/Image";

import { White, Black, Pink, Orange } from "../../themes/colors";
import { fadeIn, center } from "../../themes/styled";
import { XXLarge } from "../../themes/font";

const AvatarModal = styled.div`
  position: fixed;
  z-index: 300;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: ${(props) => (props.show === "true" ? "block" : "none")};
  min-width: 62vh;
  height: 90vh;
  border-radius: 12px;
  animation: ${fadeIn} 0.3s ease-in-out;
`;

const AvatarIdol = styled(Image)`
  min-width: 62vh;
  height: 90vh;
  object-fit: cover;
  border-radius: 12px;
`;

const PrevButton = styled.div`
  position: fixed;
  z-index: 500;
  top: 50%;
  left: 28%;
  transform: translateY(-50%);
  ${center}
  display: ${(props) => (props.show === "true" ? "flex" : "none")};
  width: 40px;
  height: 40px;
  background: ${Orange};
  border-radius: 12px;
  color: ${Black};
  font-size: ${XXLarge};
  animation: ${fadeIn} 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  user-select: none;

  &:hover {
    background: ${Pink};
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
  display: ${(props) => (props.show === "true" ? "flex" : "none")};
  width: 40px;
  height: 40px;
  background: ${Orange};
  border-radius: 12px;
  color: ${Black};
  font-size: ${XXLarge};
  animation: ${fadeIn} 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  user-select: none;

  &:hover {
    background: ${Pink};
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

  const controlModal = useCallback(
    (event) => {
      if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        prevImage();
      }
      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        nextImage();
      }
      if (event.key === "Escape") {
        toggleModal();
      }
    },
    [nextImage, prevImage, toggleModal]
  );

  useEffect(() => {
    if (show) {
      window.addEventListener("keyup", controlModal);
    } else {
      window.removeEventListener("keyup", controlModal);
    }

    return () => {
      window.removeEventListener("keyup", controlModal);
    };
  }, [show, controlModal]);

  return createPortal(
    <Fragment>
      <Backdrop show={show} hiddenModal={toggleModal} />
      <PrevButton show={show.toString()} onClick={prevImage}>
        {"<"}
      </PrevButton>
      <AvatarModal show={show.toString()}>
        <AvatarIdol src={data} />
      </AvatarModal>
      <NextButton show={show.toString()} onClick={nextImage}>
        {">"}
      </NextButton>
    </Fragment>,
    document.body
  );
}

const MemoIdolPicture = memo(IdolPicture);

export default MemoIdolPicture;
