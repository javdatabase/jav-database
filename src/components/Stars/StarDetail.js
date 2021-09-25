import React, { Fragment, memo } from "react";
import { get } from "lodash";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Backdrop from "../UI/Backdrop/Backdrop";
import Image from "../Image/Image";
import StarCup from "./StarCup";

import { Black, White, Grey, Blue } from "../../themes/colors";
import { center, fadeIn } from "../../themes/styled";
import { Large, XXLarge } from "../../themes/font";

const Container = styled.div`
  position: fixed;
  z-index: 300;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${center}
  display: ${(props) => (props.show ? "flex" : "none")};
  padding: 10px;
  border-radius: 18px;
  background: linear-gradient(to right, ${Grey}, ${Blue});
  animation: ${fadeIn} 0.3s ease-in-out;
`;

const AvatarContainer = styled.div`
  position: relative;
  width: 16vw;
  height: 22vw;
  border-radius: 18px;
  overflow: hidden;
`;

const AvatarStar = styled(Image)`
  width: 16vw;
  height: 22vw;
  border-radius: 18px;
  object-fit: cover;
`;

const DetailContainer = styled.div`
  width: 24vw;
  height: calc(22vw + 6px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 10px 10px 20px;
  box-sizing: border-box;
`;

const NameStar = styled.div`
  color: ${Black};
  font-size: ${XXLarge};
`;

const InformationStar = styled.div`
  color: ${White};
  font-size: ${Large};
  line-height: 30px;
`;

const ViewProfile = styled(Link)`
  position: absolute;
  bottom: 0px;
  ${center}
  width: 16vw;
  height: 0px;
  overflow: hidden;
  border-radius: 0px 0px 18px 18px;
  box-sizing: border-box;
  background: linear-gradient(to right, ${Grey}, ${Blue});
  text-decoration: none;
  color: ${Black};
  font-size: ${Large};
  transition: height 0.3s ease-in-out;

  ${Container}:hover & {
    height: 50px;
    border: solid 1px ${Black};
  }
`;

function StarDetail({ show, toggleModal, data }) {
  return (
    <Fragment>
      <Backdrop show={show} hiddenModal={toggleModal} />
      <Container show={show}>
        <AvatarContainer>
          <AvatarStar src={get(data, "avatar", null)} />
          <ViewProfile to={`/upv/star/${get(data, "idStar", "")}`}>
            View
          </ViewProfile>
        </AvatarContainer>
        <DetailContainer>
          <NameStar>
            {get(data, "name", "")}{" "}
            {get(data, "other", "") ? `(${get(data, "other")})` : ""}
          </NameStar>
          <InformationStar>
            ● Born: {get(data, "born", "")} ({get(data, "age", "")} year olds)
            <br />● Height: {get(data, "height", "")}
            <br />● Breast: {get(data, "breast", "")}{" "}
            <StarCup cup={get(data, "cup", "")}>
              ({get(data, "cup", "")})
            </StarCup>
            <br />● Waist: {get(data, "waist", "")}
            <br />● Hips: {get(data, "hips", "")}
          </InformationStar>
          <div style={{ height: 46 }} />
        </DetailContainer>
      </Container>
    </Fragment>
  );
}

const MemoStarDetail = memo(StarDetail);

export default MemoStarDetail;
