import React, { memo } from "react";
import styled from "styled-components";

import DvdPoster from "./DvdPoster";
import { center } from "../../themes/styled";
import { Large } from "../../themes/font";
import { Pink, Orange, DarkBlue, LightBlue } from "../../themes/colors";

const Container = styled.div`
  ${center}
  flex-direction: column;
  cursor: pointer;
  width: 15vw;
  height: calc(10vw + 50px);
  transform: translateY(0px);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-20px);
  }
`;

const PosterDvd = styled(DvdPoster)`
  width: 15vw;
  height: 10vw;
  object-fit: cover;
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

function DvdCard({ data, click }) {
  return (
    <Container onClick={click}>
      <PosterDvd src={data.poster} />
      <CodeDvd uncensored={data.type === "Uncensored"}>{data.code}</CodeDvd>
    </Container>
  );
}

const MemoDvdCard = memo(DvdCard);

export default MemoDvdCard;
