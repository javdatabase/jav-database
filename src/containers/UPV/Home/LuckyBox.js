import React, { useState, useCallback } from "react";
import styled from "styled-components";

import { getDvdsRandom } from "../../../services/jav/common.service";
import WaterWheelSlider from "../../../components/UI/Slider/WaterWheelSlider/Slider";
import NewDvdReleaseCard from "../../../components/Dvds/NewDvdReleaseCard";
import NewDvdReleaseDetail from "../../../components/Dvds/NewDvdReleaseDetail";

import {
  Pink,
  Orange,
  Black,
  White,
  DarkBlue,
  LightBlue,
} from "../../../themes/colors";
import { center, fadeIn } from "../../../themes/styled";
import { Large } from "../../../themes/font";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 35px 0px;
  box-sizing: border-box;
  animation: ${fadeIn} 0.8s ease-in-out;
`;

const ButtonLeft = styled.div`
  ${center}
  padding: 5px;
  border-radius: 6px;
  background: ${(props) =>
    props.active
      ? `linear-gradient(to right, ${Pink}, ${Orange})`
      : "transparent"};
  position: absolute;
  top: 20px;
  left: 45px;
  z-index: 2;
  cursor: pointer;
  font-size: ${Large};
  color: ${(props) => (props.active ? Black : White)};

  &:hover {
    background: linear-gradient(to right, ${Pink}, ${Orange});
    color: ${Black};
  }
`;

const ButtonRight = styled.div`
  ${center}
  padding: 5px;
  border-radius: 6px;
  background: ${(props) =>
    props.active
      ? `linear-gradient(to right, ${Pink}, ${Orange})`
      : "transparent"};
  position: absolute;
  top: 20px;
  right: 45px;
  z-index: 2;
  cursor: pointer;
  font-size: ${Large};
  color: ${(props) => (props.active ? Black : White)};

  &:hover {
    background: linear-gradient(to right, ${Pink}, ${Orange});
    color: ${Black};
  }
`;

const WaterWheelSliderContainer = styled.div`
  width: calc(21vw + 800px);
  height: calc(14vw + 100px);
`;

const DetailContainer = styled.div`
  ${center}
  margin-top: 20px;
  width: calc(60vw + 50px);
`;

function LuckyBox() {
  const [type, setType] = useState("videos");
  const [highlight, setHighlight] = useState(0);
  const [data, setData] = useState(getDvdsRandom());

  const changeHighlight = useCallback((value) => {
    setHighlight(value);
  }, []);

  const changeType = useCallback((value) => {
    if (value === "videos") {
      setData(getDvdsRandom());
    } else {
      setData(getDvdsRandom());
    }
    setType(value);
  }, []);

  const endLoop = useCallback(() => {
    if (type === "videos") {
      setData(getDvdsRandom());
    }
  }, [type]);

  return (
    <Container>
      <WaterWheelSliderContainer>
        <ButtonLeft
          active={type === "videos"}
          onClick={() => changeType("videos")}
        >
          VIDEOS
        </ButtonLeft>
        <ButtonRight
          active={type === "stars"}
          onClick={() => changeType("stars")}
        >
          STARS
        </ButtonRight>
        <WaterWheelSlider
          highlight={highlight}
          width={"21vw"}
          height={"calc(14vw + 40px)"}
          onSelect={changeHighlight}
          endLoop={endLoop}
          customColor={
            data[highlight] && data[highlight].type === "Uncensored"
              ? `linear-gradient(to right, ${DarkBlue}, ${LightBlue})`
              : `linear-gradient(to right, ${Pink}, ${Orange})`
          }
        >
          {data.map((item, index) => (
            <NewDvdReleaseCard
              key={item.idDvd}
              data={item}
              active={index === highlight}
            />
          ))}
        </WaterWheelSlider>
      </WaterWheelSliderContainer>
      <DetailContainer>
        {data.map((item, index) => (
          <NewDvdReleaseDetail
            key={item.idDvd}
            data={item}
            active={index === highlight}
          />
        ))}
      </DetailContainer>
    </Container>
  );
}

export default LuckyBox;
