import React, { memo } from "react";
import styled from "styled-components";

import DvdPoster from "./DvdPoster";

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

const PosterDvdContainer = styled.div`
  ${center}
  width: calc(21vw + 6px);
  height: calc(14vw + 6px);
  background: ${(props) =>
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
  background: ${(props) =>
    props.uncensored
      ? `linear-gradient(to right, ${DarkBlue}, ${LightBlue})`
      : `linear-gradient(to right, ${Pink}, ${Orange})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

function NewDvdReleaseCard({ data, active }) {
  return (
    <Container>
      <PosterDvdContainer
        active={active}
        uncensored={data.type === "Uncensored"}
      >
        <PosterDvd src={data.poster} />
      </PosterDvdContainer>
      <CodeDvd uncensored={data.type === "Uncensored"}>{data.code}</CodeDvd>
    </Container>
  );
}

const MemoNewDvdReleaseCard = memo(NewDvdReleaseCard);

export default MemoNewDvdReleaseCard;
