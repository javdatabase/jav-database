import React, { memo } from "react";
import styled from "styled-components";

import DvdPoster from "../Dvds/DvdPoster";
import IdolTag from "../Idols/IdolTag";
import { Pink, White, Orange, DarkBlue, LightBlue } from "../../themes/colors";
import { Regular, XLarge } from "../../themes/font";
import { center, fadeIn } from "../../themes/styled";

const Container = styled.div`
  ${center}
  animation: ${fadeIn} 1s linear;
`;

const PosterDvdWrapper = styled.div`
  ${center}
  width: calc(30vw + 6px);
  height: calc(20vw + 6px);
  background: ${props =>
    props.uncensored
      ? `linear-gradient(to right, ${DarkBlue}, ${LightBlue})`
      : `linear-gradient(to right, ${Pink}, ${Orange})`};
`;

const PosterDvd = styled(DvdPoster)`
  width: 30vw;
  height: 20vw;
  object-fit: cover;
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
  background: ${props =>
    props.uncensored
      ? ` linear-gradient(to right, ${DarkBlue}, ${LightBlue})`
      : ` linear-gradient(to right, ${Pink}, ${Orange})`};
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

function NewDvdReleaseDetail({ data, active }) {
  if (active) {
    return (
      <Container>
        <PosterDvdWrapper uncensored={data.type === "Uncensored"}>
          <PosterDvd src={data.poster} />
        </PosterDvdWrapper>
        <DetailContainer>
          <div>
            <CodeDvd uncensored={data.type === "Uncensored"}>
              {data.code}
            </CodeDvd>
          </div>
          <Title>{data.title}</Title>
          <IdolsContainer>
            {data.idols.map(item => (
              <IdolTag key={item.idIdol} name={item.name} />
            ))}
          </IdolsContainer>
        </DetailContainer>
      </Container>
    );
  } else return null;
}

const MemoNewDvdReleaseDetail = memo(NewDvdReleaseDetail);

export default MemoNewDvdReleaseDetail;
