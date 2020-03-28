import React, { memo } from "react";
import styled from "styled-components";

import DvdPoster from "../Dvds/DvdPoster";

import { Pink, Orange, DarkBlue, LightBlue } from "../../themes/colors";
import { center } from "../../themes/styled";
import { Large } from "../../themes/font";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  cursor: pointer;
  width: 21vw;
  height: calc(14vw + 40px);
`;

const PosterDvdWrapper = styled.div`
  ${center}
  width: calc(21vw + 6px);
  height: calc(14vw + 6px);
  background: ${props =>
    props.active
      ? props.uncensored
        ? `linear-gradient(to right, ${DarkBlue}, ${LightBlue})`
        : `linear-gradient(to right, ${Pink}, ${Orange})`
      : "transparent"};
`;

const PosterDvd = styled(DvdPoster)`
  width: 21vw;
  height: 14vw;
`;

const CodeDvd = styled.div`
  margin-top: 10px;
  font-size: ${Large};
  background: ${props =>
    props.uncensored
      ? `linear-gradient(to right, ${DarkBlue}, ${LightBlue})`
      : `linear-gradient(to right, ${Pink}, ${Orange})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

function NewDvdRelease({ data, active }) {
  return (
    <Container>
      <PosterDvdWrapper active={active} uncensored={data.type === "Uncensored"}>
        <PosterDvd src={data.poster} />
      </PosterDvdWrapper>
      <CodeDvd uncensored={data.type === "Uncensored"}>{data.code}</CodeDvd>
    </Container>
  );
}

const MemoNewDvdRelease = memo(NewDvdRelease);

export default MemoNewDvdRelease;
