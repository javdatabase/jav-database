import React from "react";
import styled from "styled-components";

import { dvdPoints } from "../../helpers/render-color";
import IdolAvatar from "./IdolAvatar";
import IdolCup from "./IdolCup";
import IdolStyle from "./IdolStyle";
import DvdPoster from "../Dvds/DvdPoster";

import {
  Black,
  Pink,
  Orange,
  White,
  Yellow,
  LightBlue
} from "../../themes/colors";
import { center } from "../../themes/styled";
import { Regular, XXLarge } from "../../themes/font";

const Container = styled.div`
  width: 100%;
  display: flex;
  border-radius: 18px;
  padding: 10px;
  margin: 20px 0px;
  box-sizing: border-box;
  background: ${props =>
    props.queen
      ? `linear-gradient(to right, ${Yellow}, ${Pink})`
      : props.runnerUp
      ? `linear-gradient(to right, ${LightBlue}, ${Pink})`
      : `linear-gradient(to right,  ${Orange}, ${Pink})`};
`;

const RankingIdol = styled.div`
  ${center}
  align-self: center;
  width: 50px;
  min-width: 50px;
  height: 50px;
  border: solid 3px ${Black};
  border-radius: 50px;
  margin-right: 10px;
  box-sizing: border-box;
  background-color: ${White};
  color: ${Black};
  font-size: ${XXLarge};
`;

const AvatarIdol = styled(IdolAvatar)`
  width: 10vw;
  min-width: 10vw;
  height: 15vw;
  border-radius: 18px;
  object-fit: cover;
`;

const IdolInformationContainer = styled.div`
  width: 450px;
  min-width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
`;

const NameIdol = styled.div`
  color: ${Black};
  font-size: ${XXLarge};
`;

const InformationIdol = styled.div`
  color: ${White};
`;

const StylesIdolContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyleIdol = styled(IdolStyle)`
  border: solid 2px ${Black};
  margin-top: 10px;
`;

const DvdsContainer = styled.div`
  width: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-right: 10px;
`;

const DvdItem = styled.div`
  ${center}
  flex-direction: column;
  margin: 5px;
  cursor: pointer;
  transform: translateY(0px);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }
`;

const PosterDvd = styled(DvdPoster)`
  width: 7.5vw;
  height: 5vw;
  object-fit: cover;
`;

const CodeDvd = styled.div`
  margin-top: 5px;
  font-size: ${Regular};
  background: ${props => (props.uncensored ? White : Black)};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Points = styled.div`
  ${center}
  width: 90px;
  min-width: 90px;
  height: auto;
  margin: -10px -10px -10px 0px;
  border-radius: 0px 18px 18px 0px;
  box-sizing: border-box;
  background-color: ${White};
  color: ${props => props.color};
  font-size: ${XXLarge};
`;

function IdolRanking({ data }) {
  const dvds = data.dvds.filter((item, index) => index > data.dvds.length - 13);
  const color = dvdPoints(data.points);
  console.log(color);

  return (
    <Container queen={data.rank === 1} runnerUp={data.rank === 2}>
      <RankingIdol>{data.rank}</RankingIdol>
      <div style={{ display: "flex", width: "100%" }}>
        <AvatarIdol src={data.avatar} />
        <IdolInformationContainer>
          <NameIdol>
            {data.name} {data.other ? `(${data.other})` : ""}
          </NameIdol>
          <InformationIdol>
            ● Born: {data.born}
            <br />● Height: {data.height}
            <br />● Breast: {data.breast}{" "}
            <IdolCup cup={data.cup}>({data.cup})</IdolCup>
            <br />● Waist: {data.waist}
            <br />● Hips: {data.hips}
            <br />
          </InformationIdol>
          <StylesIdolContainer>
            {data.styles.map(item => (
              <StyleIdol key={item.tag} tag={item.tag} />
            ))}
          </StylesIdolContainer>
        </IdolInformationContainer>
        <DvdsContainer>
          {dvds.map(item => (
            <DvdItem key={item.code}>
              <PosterDvd src={item.poster} />
              <CodeDvd>{item.code}</CodeDvd>
            </DvdItem>
          ))}
        </DvdsContainer>
      </div>
      <Points color={color}>{data.points}p</Points>
    </Container>
  );
}

export default IdolRanking;
