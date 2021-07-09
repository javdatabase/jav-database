import React, { Fragment, memo } from "react";
import { get } from "lodash";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { getIdolRank } from "../../services/jav/common.service";
import Backdrop from "../UI/Backdrop/Backdrop";
import DvdPoster from "./DvdPoster";
import IdolTag from "../Idols/IdolTag";

import {
  Pink,
  White,
  Orange,
  Black,
  DarkBlue,
  LightBlue,
  Yellow,
  Red,
} from "../../themes/colors";
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
  background: ${(props) =>
    props.uncensored
      ? `linear-gradient(to right, ${DarkBlue}, ${LightBlue})`
      : `linear-gradient(to right, ${Pink}, ${Orange})`};
  animation: ${fadeIn} 0.3s ease-in-out;
`;

const PosterDvd = styled(DvdPoster)`
  width: 36vw;
  height: 24vw;
`;

const DetailContainer = styled.div`
  width: 36vw;
  height: calc(24vw + 6px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 10px 10px 20px;
  box-sizing: border-box;
`;

const CodeDvd = styled.span`
  color: ${Black};
  font-size: ${XXLarge};
`;

const Title = styled.div`
  color: ${White};
  font-size: ${Large};
`;

const IdolsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TagIdol = styled(IdolTag)`
  border: solid 2px ${Black};
  margin-top: 10px;
  background: ${(props) =>
    props.queen
      ? `linear-gradient(to right, ${Yellow}, ${Red})`
      : props.runnerUp
      ? `linear-gradient(to right, ${LightBlue}, ${Pink})`
      : `linear-gradient(to right,  ${Orange}, ${Pink})`};
`;

function DvdDetail({ show, toggleModal, data }) {
  return (
    <Fragment>
      <Backdrop show={show} hiddenModal={toggleModal} />
      <Container
        show={show}
        uncensored={get(data, "type", "") === "Uncensored"}
      >
        <PosterDvd src={get(data, "poster", null)} />
        <DetailContainer>
          <div>
            <CodeDvd>{get(data, "code", "")}</CodeDvd>
          </div>
          <Title>{get(data, "title", "")}</Title>
          <IdolsContainer>
            {get(data, "idols", []).map((item) =>
              item.idIdol === "jai000" ? (
                <TagIdol key={item.idIdol} name={item.name} />
              ) : (
                <Link
                  key={item.idIdol}
                  to={`/jav/idol/${item.idIdol}`}
                  style={{ textDecoration: "none", color: Black }}
                >
                  <TagIdol
                    key={item.idIdol}
                    queen={getIdolRank(item.idIdol) === 1}
                    runnerUp={getIdolRank(item.idIdol) === 2}
                    name={item.name}
                  />
                </Link>
              )
            )}
          </IdolsContainer>
        </DetailContainer>
      </Container>
    </Fragment>
  );
}

const MemoDvdDetail = memo(DvdDetail);

export default MemoDvdDetail;
