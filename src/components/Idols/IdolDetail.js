import React, { Fragment, memo } from "react";
import { get } from "lodash";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { getIdolRank, checkBestIdol } from "../../services/common.service";
import Backdrop from "../UI/Backdrop/Backdrop";
import IdolAvatar from "./IdolAvatar";
import IdolCup from "./IdolCup";
import IdolStyle from "./IdolStyle";

import {
  Pink,
  Orange,
  Black,
  White,
  Yellow,
  LightBlue,
  Red,
  DarkPurple,
  LightPurple
} from "../../themes/colors";
import { center, fadeIn } from "../../themes/styled";
import { Large, XLarge, XXLarge } from "../../themes/font";

const Container = styled.div`
  position: fixed;
  z-index: 300;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${center}
  display: ${props => (props.show ? "flex" : "none")};
  padding: 10px;
  border-radius: 18px;
  background: ${props =>
    props.queen
      ? `linear-gradient(to right, ${Yellow}, ${Red})`
      : props.runnerUp
      ? `linear-gradient(to right, ${LightBlue}, ${Pink})`
      : `linear-gradient(to right,  ${Orange}, ${Pink})`};
  animation: ${fadeIn} 0.3s ease-in-out;
`;

const AvatarContainer = styled.div`
  position: relative;
  width: 16vw;
  height: 22vw;
  border-radius: 18px;
  overflow: hidden;
`;

const BadgeIdol = styled.div`
  position: absolute;
  top: -5px;
  left: -35px;
  ${center}
  width: 100px;
  height: 40px;
  background: linear-gradient(to right, ${LightPurple}, ${DarkPurple});
  transform: rotate(135deg);
  font-size: ${XLarge};
  color: ${White};
`;

const AvatarIdol = styled(IdolAvatar)`
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

const NameIdol = styled.div`
  color: ${Black};
  font-size: ${XXLarge};
`;

const InformationIdol = styled.div`
  color: ${White};
  font-size: ${Large};
  line-height: 30px;
`;

const StylesIdolContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyleIdol = styled(IdolStyle)`
  border: solid 2px ${Black};
  margin-top: 10px;
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
  background: ${props =>
    props.queen === "true"
      ? `linear-gradient(to right, ${Yellow}, ${Red})`
      : props.runner === "true"
      ? `linear-gradient(to right, ${LightBlue}, ${Pink})`
      : `linear-gradient(to right,  ${Orange}, ${Pink})`};
  text-decoration: none;
  color: ${Black};
  font-size: ${Large};
  transition: height 0.3s ease-in-out;

  ${Container}:hover & {
    height: 50px;
    border: solid 1px ${Black};
  }
`;

function IdolDetail({ show, toggleModal, data }) {
  return (
    <Fragment>
      <Backdrop show={show} hiddenModal={toggleModal} />
      <Container
        queen={getIdolRank(get(data, "idIdol", "")) === 1}
        runnerUp={getIdolRank(get(data, "idIdol", "")) === 2}
        show={show}
      >
        <AvatarContainer>
          {checkBestIdol(get(data, "idIdol", "")) && <BadgeIdol>☿</BadgeIdol>}
          <AvatarIdol src={get(data, "avatar", null)} />
          <ViewProfile
            to={`/idol/${get(data, "idIdol", "")}`}
            queen={(getIdolRank(get(data, "idIdol", "")) === 1).toString()}
            runner={(getIdolRank(get(data, "idIdol", "")) === 2).toString()}
          >
            View
          </ViewProfile>
        </AvatarContainer>
        <DetailContainer>
          <NameIdol>
            {get(data, "name", "")}{" "}
            {get(data, "other", "") ? `(${get(data, "other")})` : ""}
          </NameIdol>
          <InformationIdol>
            ● Born: {get(data, "born", "")} ({get(data, "age", "")} year olds)
            <br />● Height: {get(data, "height", "")}
            <br />● Breast: {get(data, "breast", "")}{" "}
            <IdolCup cup={get(data, "cup", "")}>
              ({get(data, "cup", "")})
            </IdolCup>
            <br />● Waist: {get(data, "waist", "")}
            <br />● Hips: {get(data, "hips", "")}
          </InformationIdol>
          <StylesIdolContainer>
            {get(data, "styles", []).map(item => (
              <StyleIdol key={item.tag} tag={item.tag} />
            ))}
          </StylesIdolContainer>
        </DetailContainer>
      </Container>
    </Fragment>
  );
}

const MemoIdolDetail = memo(IdolDetail);

export default MemoIdolDetail;
