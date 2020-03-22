import React, { Fragment, memo } from "react";
import { get } from "lodash";
import styled from "styled-components";

import Backdrop from "../UI/Backdrop/Backdrop";
import IdolAvatar from "./IdolAvatar";
import IdolCup from "./IdolCup";
import IdolStyle from "./IdolStyle";

import { Pink, Orange, Black, White } from "../../themes/colors";
import { center, fadeIn } from "../../themes/styled";
import { Large, XXLarge } from "../../themes/font";

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
  background: linear-gradient(to right, ${Pink}, ${Orange});
  animation: ${fadeIn} 0.3s ease-in-out;
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

function IdolDetail({ show, toggleModal, data }) {
  return (
    <Fragment>
      <Backdrop show={show} hiddenModal={toggleModal} />
      <Container show={show}>
        <AvatarIdol src={get(data, "avatar", null)} />
        <DetailContainer>
          <NameIdol>
            {get(data, "name", "")}{" "}
            {get(data, "other", "") ? `(${get(data, "other")})` : ""}
          </NameIdol>
          <InformationIdol>
            ● Born: {get(data, "born", "")}
            <br />● Height: {get(data, "height", "")}
            <br />● Breast: {get(data, "breast", "")}{" "}
            <IdolCup cup={get(data, "cup", "")}>
              ({get(data, "cup", "")})
            </IdolCup>
            <br />● Waist: {get(data, "waist", "")}
            <br />● Hips: {get(data, "hips", "")}
            <br />
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
