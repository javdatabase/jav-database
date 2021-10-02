import React, { Fragment, memo, useState, useCallback } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import {
  checkVideo,
  getIdolDetail,
  getIdolRank,
} from "../../services/jav/common.service";
import DvdPoster from "./DvdPoster";
import IdolTag from "../Idols/IdolTag";
import IdolDetail from "../Idols/IdolDetail";

import {
  Black,
  White,
  Pink,
  Orange,
  DarkBlue,
  LightBlue,
  Yellow,
  Red,
} from "../../themes/colors";
import { center, fadeIn } from "../../themes/styled";
import { Regular, XLarge } from "../../themes/font";

const Container = styled.div`
  position: relative;
  ${center}
  animation: ${fadeIn} 1s linear;
`;

const PosterDvdContainer = styled.div`
  ${center}
  width: calc(30vw + 6px);
  height: calc(20vw + 6px);
  background: ${(props) =>
    props.uncensored
      ? `linear-gradient(to right, ${DarkBlue}, ${LightBlue})`
      : `linear-gradient(to right, ${Pink}, ${Orange})`};
`;

const PosterDvd = styled(DvdPoster)`
  width: 30vw;
  height: 20vw;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  box-sizing: border-box;
  width: 30vw;
  height: calc(20vw + 6px);
`;

const CodeDvd = styled.span`
  font-size: ${XLarge};
  background: ${(props) =>
    props.uncensored
      ? `linear-gradient(to right, ${DarkBlue}, ${LightBlue})`
      : `linear-gradient(to right, ${Pink}, ${Orange})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Title = styled.div`
  color: ${White};
  font-size: ${Regular};
`;

const IdolsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TagIdol = styled(IdolTag)`
  cursor: pointer;
  margin-top: 10px;
  background: ${(props) =>
    props.queen
      ? `linear-gradient(to right, ${Yellow}, ${Red})`
      : props.runnerUp
      ? `linear-gradient(to right, ${LightBlue}, ${Pink})`
      : `linear-gradient(to right,  ${Orange}, ${Pink})`};
`;

const VideoButtonLink = styled(Link)`
  position: absolute;
  right: 0px;
  top: 3px;
  z-index: 500;
  ${center};
  width: 25px;
  height: 25px;
  border-radius: 25px;
  background: ${Yellow};
`;

const Dot = styled.span`
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 10px solid ${Black};
  margin-left: 3px;
`;

function NewDvdReleaseDetail({ data, active }) {
  const [show, setShow] = useState(false);
  const [idol, setIdol] = useState(null);

  const toggleModal = useCallback(() => {
    setShow(!show);
  }, [show]);

  const handleChangeIdol = useCallback(
    (value) => {
      if (value) {
        const response = getIdolDetail(value.idIdol);
        setIdol(response);
      } else {
        setIdol(null);
      }
      toggleModal();
    },
    [toggleModal]
  );

  return (
    <Fragment>
      {active && (
        <Container>
          {checkVideo(data.code) && (
            <VideoButtonLink to={`/jav/video/${data.code}`}>
              <Dot />
            </VideoButtonLink>
          )}
          <PosterDvdContainer uncensored={data.type === "Uncensored"}>
            <PosterDvd src={data.poster} />
          </PosterDvdContainer>
          <DetailContainer>
            <div>
              <CodeDvd uncensored={data.type === "Uncensored"}>
                {data.code}
              </CodeDvd>
            </div>
            <Title>{data.title}</Title>
            <IdolsContainer>
              {data.idols.map((item) => (
                <TagIdol
                  key={item.idIdol}
                  queen={getIdolRank(item.idIdol) === 1}
                  runnerUp={getIdolRank(item.idIdol) === 2}
                  name={item.name}
                  onClick={() => handleChangeIdol(item)}
                />
              ))}
            </IdolsContainer>
          </DetailContainer>
        </Container>
      )}
      {show && <IdolDetail show={show} toggleModal={toggleModal} data={idol} />}
    </Fragment>
  );
}

const MemoNewDvdReleaseDetail = memo(NewDvdReleaseDetail);

export default MemoNewDvdReleaseDetail;
