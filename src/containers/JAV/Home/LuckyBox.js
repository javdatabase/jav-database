import React, { useState, useMemo, useEffect, useCallback } from "react";
import { get } from "lodash";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";

import {
  getDvdsRandom,
  getIdolsRandom,
  getIdolRank,
  checkBestIdol,
} from "../../../services/jav/common.service";
import WaterWheelSlider from "../../../components/UI/Slider/WaterWheelSlider/Slider";
import NewDvdReleaseCard from "../../../components/Dvds/NewDvdReleaseCard";
import NewDvdReleaseDetail from "../../../components/Dvds/NewDvdReleaseDetail";
import BestIdolCard from "../../../components/Idols/BestIdolCard";
import BestIdolDetail from "../../../components/Idols/BestIdolDetail";

import {
  Pink,
  Orange,
  Black,
  White,
  DarkBlue,
  LightBlue,
  Yellow,
  Red,
  DarkPurple,
  LightPurple,
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
  padding: 20px 0px;
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
  width: calc(${(props) => (props.type === "dvds" ? "21vw" : "14vw")} + 800px);
  height: calc(
    ${(props) => (props.type === "dvds" ? "14vw" : "19.25vw")} + 100px
  );
`;

const DetailContainer = styled.div`
  ${center}
  margin-top: 20px;
  width: calc(100vw - 40px);
`;

function LuckyBox() {
  const history = useHistory();
  const location = useLocation();
  const [first, setFirst] = useState(true);
  const [highlight, setHighlight] = useState(0);
  const [data, setData] = useState([]);

  const type = useMemo(() => {
    const state = location.state;
    return get(state, "type", "dvds");
  }, [location.state]);

  const customColor = useMemo(() => {
    if (data.length) {
      if (type === "dvds") {
        return data[highlight] && data[highlight].type === "Uncensored"
          ? `linear-gradient(to right, ${DarkBlue}, ${LightBlue})`
          : `linear-gradient(to right, ${Pink}, ${Orange})`;
      } else {
        return getIdolRank(data[highlight].idIdol) === 1
          ? `linear-gradient(to right, ${Yellow}, ${Red})`
          : getIdolRank(data[highlight].idIdol) === 2
          ? `linear-gradient(to right, ${LightBlue}, ${Pink})`
          : checkBestIdol(data[highlight].idIdol)
          ? `linear-gradient(to right,  ${DarkPurple}, ${LightPurple})`
          : `linear-gradient(to right,  ${Orange}, ${Pink})`;
      }
    } else {
      return null;
    }
  }, [type, data, highlight]);

  useEffect(() => {
    if (first) {
      if (type === "dvds") {
        setData(getDvdsRandom());
      } else {
        setData(getIdolsRandom());
      }
      setFirst(false);
    }
  }, [first, type]);

  const changeHighlight = useCallback((value) => {
    setHighlight(value);
  }, []);

  const changeType = useCallback(
    (value) => {
      if (value === "dvds") {
        setData(getDvdsRandom());
      } else {
        setData(getIdolsRandom());
      }
      history.push(location.pathname, { type: value });
    },
    [history, location.pathname]
  );

  const endLoop = useCallback(() => {
    if (type === "dvds") {
      setData(getDvdsRandom());
    } else {
      setData(getIdolsRandom());
    }
  }, [type]);

  return (
    <Container>
      <WaterWheelSliderContainer type={type}>
        <ButtonLeft active={type === "dvds"} onClick={() => changeType("dvds")}>
          DVDS
        </ButtonLeft>
        <ButtonRight
          active={type === "idols"}
          onClick={() => changeType("idols")}
        >
          IDOLS
        </ButtonRight>
        <WaterWheelSlider
          highlight={highlight}
          width={type === "dvds" ? "21vw" : "14vw"}
          height={
            type === "dvds" ? "calc(14vw + 40px)" : "calc(19.25vw + 40px)"
          }
          onSelect={changeHighlight}
          endLoop={endLoop}
          customColor={customColor}
        >
          {data.map((item, index) =>
            type === "dvds" ? (
              <NewDvdReleaseCard
                key={item.idDvd}
                data={item}
                active={index === highlight}
              />
            ) : (
              <BestIdolCard
                key={item.idIdol}
                data={item}
                active={index === highlight}
                customColor={
                  checkBestIdol(data[highlight].idIdol) &&
                  getIdolRank(data[highlight].idIdol) > 2
                    ? `linear-gradient(to right,  ${DarkPurple}, ${LightPurple})`
                    : null
                }
              />
            )
          )}
        </WaterWheelSlider>
      </WaterWheelSliderContainer>
      <DetailContainer>
        {data.map((item, index) =>
          type === "dvds" ? (
            <NewDvdReleaseDetail
              key={item.idDvd}
              data={item}
              active={index === highlight}
            />
          ) : (
            <BestIdolDetail
              key={item.idIdol}
              data={item}
              active={index === highlight}
              customColor={
                checkBestIdol(data[highlight].idIdol) &&
                getIdolRank(data[highlight].idIdol) > 2
                  ? `linear-gradient(to right,  ${DarkPurple}, ${LightPurple})`
                  : null
              }
            />
          )
        )}
      </DetailContainer>
    </Container>
  );
}

export default LuckyBox;
