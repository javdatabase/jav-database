import React, { memo } from "react";
import styled from "styled-components";

import DvdPoster from "./DvdPoster";

import { Pink, Orange, DarkBlue, LightBlue } from "../../themes/colors";
import { center } from "../../themes/styled";
import { Large } from "../../themes/font";

const Container = styled.div`
  ${center}
  flex-direction: column;
  cursor: pointer;
  width: 100%;
  transform: translateY(0px);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }
`;

const PosterWrapper = styled.div`
  width: 100%;
  aspect-ratio: 3 / 2;
  overflow: hidden;
  border-radius: 8px;
`;

const PosterDvd = styled(DvdPoster)`
  width: 100%;
  height: 100%;
`;

const CodeDvd = styled.div`
  margin-top: 8px;
  font-size: ${Large};
  background: ${(props) =>
    props.uncensored
      ? `linear-gradient(to right, ${DarkBlue}, ${LightBlue})`
      : `linear-gradient(to right, ${Pink}, ${Orange})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

function DvdCard({ data, click }) {
  return (
    <Container onClick={click}>
      <PosterWrapper>
        <PosterDvd src={data.poster} />
      </PosterWrapper>
      <CodeDvd uncensored={data.type === "Uncensored"}>{data.code}</CodeDvd>
    </Container>
  );
}

const MemoDvdCard = memo(DvdCard);

export default MemoDvdCard;
