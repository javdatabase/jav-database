import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// import { NEW_DVDS_RELEASE } from "../../../services/jav/dvds.service";
import { getNewReleaseDvdsApi } from "../../../services-new/jav/dvds.service";
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
  background: linear-gradient(to right, ${Pink}, ${Orange});
  position: absolute;
  top: 20px;
  left: 45px;
  z-index: 2;
  cursor: pointer;
  font-size: ${Large};
  color: ${Black};

  &:hover {
    background: linear-gradient(to right, ${Pink}, ${Orange});
    color: ${Black};
  }
`;

const ButtonRight = styled(Link)`
  ${center}
  padding: 5px;
  border-radius: 6px;
  background: transparent;
  position: absolute;
  top: 20px;
  right: 45px;
  z-index: 2;
  cursor: pointer;
  font-size: ${Large};
  text-decoration: none;
  color: ${White};

  &:hover {
    background: linear-gradient(to right, ${Pink}, ${Orange});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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

function Home() {
  const [highlight, setHighlight] = useState(0);
  const [newReleaseDvds, setNewReleaseDvds] = useState([]);

  const getNewReleaseDvds = useCallback(async () => {
    const response = await getNewReleaseDvdsApi();
    setNewReleaseDvds(response);
  }, []);

  useEffect(() => {
    getNewReleaseDvds();
  }, [getNewReleaseDvds]);

  const changeHighlight = useCallback((value) => {
    setHighlight(value);
  }, []);

  return (
    <Container>
      <WaterWheelSliderContainer>
        <ButtonLeft>NEW RELEASE</ButtonLeft>
        <ButtonRight to={"/jav/lucky-box"}>LUCKY BOX</ButtonRight>
        <WaterWheelSlider
          highlight={highlight}
          width={"21vw"}
          height={"calc(14vw + 40px)"}
          onSelect={changeHighlight}
          customColor={
            newReleaseDvds[highlight] &&
            newReleaseDvds[highlight].type === "Uncensored"
              ? `linear-gradient(to right, ${DarkBlue}, ${LightBlue})`
              : `linear-gradient(to right, ${Pink}, ${Orange})`
          }
        >
          {newReleaseDvds.map((item, index) => (
            <NewDvdReleaseCard
              key={item.idDvd}
              data={item}
              active={index === highlight}
            />
          ))}
        </WaterWheelSlider>
      </WaterWheelSliderContainer>
      <DetailContainer>
        {newReleaseDvds.map((item, index) => (
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
