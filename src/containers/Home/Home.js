import React, { useState, useCallback } from "react";
import styled from "styled-components";

import {
  RANDOM_DVDS_DETAIL,
  NEW_DVDS_RELEASE_DETAIL
} from "../../services/dvds.service";
import WaterWheelSlider from "../../components/UI/Slider/WaterWheelSlider/Slider";
import NewDvdRelease from "../../components/Home/NewDvdRelease";
import NewDvdReleaseDetail from "../../components/Home/NewDvdReleaseDetail";

import { Pink, Orange, Black, White } from "../../themes/colors";
import { center } from "../../themes/styled";
import { Large } from "../../themes/font";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 35px 0px;
  box-sizing: border-box;
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

const ButtonLeft = styled.div`
  ${center}
  padding: 5px;
  border-radius: 6px;
  background: ${props =>
    props.active
      ? `linear-gradient(to right, ${Pink}, ${Orange})`
      : "transparent"};
  position: absolute;
  top: 20px;
  left: 45px;
  z-index: 2;
  cursor: pointer;
  font-size: ${Large};
  color: ${props => (props.active ? Black : White)};

  &:hover {
    background: linear-gradient(to right, ${Pink}, ${Orange});
    color: ${Black};
  }
`;

const ButtonRight = styled.div`
  ${center}
  padding: 5px;
  border-radius: 6px;
  background: ${props =>
    props.active
      ? `linear-gradient(to right, ${Pink}, ${Orange})`
      : "transparent"};
  position: absolute;
  top: 20px;
  right: 45px;
  z-index: 2;
  cursor: pointer;
  font-size: ${Large};
  color: ${props => (props.active ? Black : White)};

  &:hover {
    background: linear-gradient(to right, ${Pink}, ${Orange});
    color: ${Black};
  }
`;

function Home() {
  const [type, setType] = useState("new");
  const [highlight, setHighlight] = useState(0);
  const [data, setData] = useState(NEW_DVDS_RELEASE_DETAIL);

  const changeHighlight = useCallback(value => {
    setHighlight(value);
  }, []);

  const changeType = useCallback(value => {
    if (value === "new") {
      setData(NEW_DVDS_RELEASE_DETAIL);
    } else {
      setData(RANDOM_DVDS_DETAIL());
    }
    setType(value);
  }, []);

  return (
    <Container>
      <WaterWheelSliderContainer>
        <ButtonLeft active={type === "new"} onClick={() => changeType("new")}>
          NEW RELEASE
        </ButtonLeft>
        <ButtonRight
          active={type === "random"}
          onClick={() => changeType("random")}
        >
          RANDOM
        </ButtonRight>
        <WaterWheelSlider
          highlight={highlight}
          width={"21vw"}
          height={"calc(14vw + 40px)"}
          onSelect={changeHighlight}
          customColor={data[highlight].type === "Uncensored"}
        >
          {data.map((item, index) => (
            <NewDvdRelease
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

export default Home;
