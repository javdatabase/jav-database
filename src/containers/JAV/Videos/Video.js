import React, { useMemo } from "react";
import { get } from "lodash";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

import { getIdolRank } from "../../../services/jav/common.service";
import { VIDEO_CONTENT } from "../../../services/jav/videos.service";
import IdolTag from "../../../components/Idols/IdolTag";
import RollingIcon from "../../../assets/images/ic_rolling/ic_rolling.svg";

import {
  White,
  Black,
  Grey,
  Orange,
  Pink,
  Yellow,
  Red,
  DarkBlue,
  LightBlue,
} from "../../../themes/colors";
import { center, fadeIn } from "../../../themes/styled";
import { XXLarge, Large } from "../../../themes/font";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0px;
  overflow: auto;
  box-sizing: border-box;
  animation: ${fadeIn} 0.8s ease-in-out;

  &::-webkit-scrollbar {
    width: 6px;
    background: transparent;
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(${Orange}, ${Pink});
    border-radius: 10px;
  }
`;

const VideoContainer = styled.div`
  max-width: 930px;
  margin-bottom: 30px;
`;

const Code = styled.div`
  font-size: ${XXLarge};
  background: ${(props) =>
    props.uncensored
      ? `linear-gradient(to right, ${DarkBlue}, ${LightBlue})`
      : `linear-gradient(to right, ${Pink}, ${Orange})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 5px;
`;

const Title = styled.div`
  color: ${White};
  font-size: ${Large};
  margin-bottom: 5px;
`;

const StarsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
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

const VideoContent = styled.div`
  ${center};
  width: 943px;
  height: 530px;
  border: solid 1px ${White};
  background: url(${RollingIcon}) center center no-repeat;
`;

function Video() {
  const { code } = useParams();

  const data = useMemo(() => {
    return VIDEO_CONTENT(code);
  }, [code]);

  return (
    <Container>
      <VideoContainer>
        <Code uncensored={get(data, "type", "") === "Uncensored"}>
          {get(data, "code", "")}
        </Code>
        <Title>{get(data, "title", "")} </Title>
        <StarsContainer>
          {get(data, "idols", []).map((item) =>
            item.idIdol === "jai000" ? (
              <TagIdol
                key={item.idIdol}
                name={item.name}
                style={{ background: Grey }}
              />
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
        </StarsContainer>
        <VideoContent>
          <video width={"943px"} height={"530px"} controls>
            <source src={get(data, "content", "")} type={"video/mp4"} />
            Your browser does not support the video tag.
          </video>
        </VideoContent>
      </VideoContainer>
    </Container>
  );
}

export default Video;