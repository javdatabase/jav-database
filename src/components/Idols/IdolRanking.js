import React, { Fragment, memo, useState, useMemo, useCallback } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

import { dvdPoints } from "../../helpers/render-color";
import { checkBestIdol } from "../../services/jav/common.service";
import Image from "../Image/Image";
import IdolCup from "./IdolCup";
import IdolStyle from "./IdolStyle";
import DvdPoster from "../Dvds/DvdPoster";
import DvdDetail from "../Dvds/DvdDetail";

import {
  Black,
  Pink,
  Orange,
  White,
  Yellow,
  LightBlue,
  Grey,
  Red,
  LightPurple,
  DarkPurple,
} from "../../themes/colors";
import { center } from "../../themes/styled";
import { Regular, XLarge, XXLarge } from "../../themes/font";

const Container = styled.div`
  width: 100%;
  display: flex;
  border-radius: 18px;
  padding: 10px;
  margin: 20px 0px;
  box-sizing: border-box;
  background: ${(props) =>
    props.queen
      ? `linear-gradient(to right, ${Yellow}, ${Red})`
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
  background: ${White};
  color: ${Black};
  font-size: ${XXLarge};
`;

const AvatarContainer = styled.div`
  position: relative;
  width: 10vw;
  min-width: 10vw;
  height: 15vw;
  border-radius: 18px;
  overflow: hidden;
`;

const BadgeIdol = styled(Link)`
  position: absolute;
  top: -5px;
  left: -35px;
  ${center}
  width: 100px;
  height: 40px;
  background: linear-gradient(to right, ${LightPurple}, ${DarkPurple});
  transform: rotate(135deg);
  text-align: center;
  text-decoration: none;
  font-size: ${XLarge};
  color: ${White};
`;

const AvatarIdol = styled(Image)`
  width: 10vw;
  min-width: 10vw;
  height: 15vw;
  border-radius: 18px;
  object-fit: cover;
`;

const IdolInformationContainer = styled.div`
  position: relative;
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
  max-width: 7.5vw;
  height: 5vw;
  max-height: 5vw;
`;

const CodeDvd = styled.div`
  margin-top: 5px;
  font-size: ${Regular};
  color: ${(props) => (props.uncensored ? Grey : Black)};
`;

const Points = styled.div`
  ${center}
  width: 90px;
  min-width: 90px;
  height: auto;
  margin: -10px -10px -10px 0px;
  border-radius: 0px 18px 18px 0px;
  box-sizing: border-box;
  background: ${White};
  color: ${(props) => props.color};
  font-size: ${XXLarge};
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: ${Black};
`;

const ViewProfile = styled(Link)`
  position: absolute;
  bottom: 0px;
  ${center}
  width: 10vw;
  height: 0px;
  overflow: hidden;
  border-radius: 0px 0px 18px 18px;
  box-sizing: border-box;
  background: ${(props) =>
    props.queen === "true"
      ? `linear-gradient(to right, ${Yellow}, ${Red})`
      : props.runner === "true"
      ? `linear-gradient(to right, ${LightBlue}, ${Pink})`
      : `linear-gradient(to right,  ${Orange}, ${Pink})`};
  text-decoration: none;
  color: ${Black};
  font-size: ${Regular};
  transition: height 0.3s ease-in-out;

  ${Container}:hover & {
    height: 30px;
    border: solid 1px ${Black};
  }
`;

function IdolRanking({ data }) {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const [dvd, setDvd] = useState(null);

  const dvds = useMemo(
    () =>
      data.dvds
        .filter((item, index) => index > data.dvds.length - 13)
        .reverse(),
    [data.dvds]
  );

  const color = useMemo(() => dvdPoints(data.points), [data.points]);

  const toggleModal = useCallback(() => {
    setShow(!show);
  }, [show]);

  const handleChangeDvd = useCallback(
    (value) => {
      if (value) {
        setDvd(value);
      } else {
        setDvd(null);
      }
      toggleModal();
    },
    [toggleModal]
  );

  return (
    <Fragment>
      <Container queen={data.rank === 1} runnerUp={data.rank === 2}>
        <RankingIdol>{data.rank}</RankingIdol>
        <div style={{ display: "flex", width: "100%" }}>
          <AvatarContainer>
            {checkBestIdol(data.idIdol) && (
              <BadgeIdol
                to={{
                  pathname: "/jav/idols",
                  state: {
                    ...location.state,
                    best: true,
                    page: 1,
                  },
                }}
              >
                ☿
              </BadgeIdol>
            )}
            <AvatarIdol src={data.avatar} />
            <ViewProfile
              to={`/jav/idol/${data.idIdol}`}
              queen={(data.rank === 1).toString()}
              runner={(data.rank === 2).toString()}
            >
              View
            </ViewProfile>
          </AvatarContainer>
          <IdolInformationContainer>
            <NameIdol>
              {data.name} {data.other ? `(${data.other})` : ""}
            </NameIdol>
            <InformationIdol>
              ● Born: {data.born} ({data.age} year olds)
              <br />● Height: {data.height}
              <br />● Breast: {data.breast}{" "}
              <IdolCup cup={data.cup}>({data.cup})</IdolCup>
              <br />● Waist: {data.waist}
              <br />● Hips: {data.hips}
            </InformationIdol>
            <StylesIdolContainer>
              {data.styles.map((item) => (
                <StyleIdol key={item.tag} tag={item.tag} />
              ))}
            </StylesIdolContainer>
          </IdolInformationContainer>
          <DvdsContainer>
            {dvds.map((item) => (
              <DvdItem key={item.idDvd} onClick={() => handleChangeDvd(item)}>
                <PosterDvd src={item.poster} />
                <CodeDvd uncensored={item.type === "Uncensored"}>
                  {item.code}
                </CodeDvd>
              </DvdItem>
            ))}
          </DvdsContainer>
        </div>
        <Points color={color}>{data.points}p</Points>
      </Container>
      <DvdDetail show={show} toggleModal={toggleModal} data={dvd} />
    </Fragment>
  );
}

const MemoIdolRanking = memo(IdolRanking);

export default MemoIdolRanking;
