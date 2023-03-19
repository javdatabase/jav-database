import React, { useState, useMemo, useEffect, useCallback } from "react";
import { get } from "lodash";
import { Link, useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";

import {
  getVideoRandom,
  getStarsRandom,
} from "../../../services/upv/common.service";
import StarTag from "../../../components/Stars/StarTag";
import WaterWheelSlider from "../../../components/UI/Slider/WaterWheelSlider/Slider";
import BestStarCard from "../../../components/Stars/BestStarCard";
import BestStarDetail from "../../../components/Stars/BestStarDetail";
import RollingIcon from "../../../assets/images/ic_rolling/ic_rolling.svg";

import { Black, White, Grey, Orange, Blue } from "../../../themes/colors";
import { center, fadeIn } from "../../../themes/styled";
import { Large, XLarge } from "../../../themes/font";

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
      ? `linear-gradient(to right, ${Blue}, ${Grey})`
      : "transparent"};
  position: absolute;
  top: 20px;
  left: 45px;
  z-index: 2;
  cursor: pointer;
  font-size: ${Large};
  color: ${(props) => (props.active ? Black : White)};

  &:hover {
    background: linear-gradient(to right, ${Blue}, ${Grey});
    color: ${Black};
  }
`;

const ButtonRight = styled.div`
  ${center}
  padding: 5px;
  border-radius: 6px;
  background: ${(props) =>
    props.active
      ? `linear-gradient(to right, ${Blue}, ${Grey})`
      : "transparent"};
  position: absolute;
  top: 20px;
  right: 45px;
  z-index: 2;
  cursor: pointer;
  font-size: ${Large};
  color: ${(props) => (props.active ? Black : White)};

  &:hover {
    background: linear-gradient(to right, ${Blue}, ${Grey});
    color: ${Black};
  }
`;

const VideoContainer = styled.div`
  margin: 10px 0px 30px;
`;

const Title = styled.div`
  color: ${White};
  font-size: ${XLarge};
  margin-bottom: 5px;
`;

const Type = styled.span`
  color: ${Orange};
`;

const StarsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

const TagStar = styled(StarTag)`
  cursor: pointer;
  margin-top: 10px;
`;

const VideoContent = styled.div`
  width: 943px;
  height: 530px;
  border: solid 1px ${White};
  background: url(${RollingIcon}) center center no-repeat;
`;

const WaterWheelSliderContainer = styled.div`
  width: calc(14vw + 800px);
  height: calc(19.25vw + 100px);
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
    return get(state, "type", "videos");
  }, [location.state]);

  useEffect(() => {
    if (first) {
      if (type === "videos") {
        setData(getVideoRandom());
      } else {
        setData(getStarsRandom());
      }
      setFirst(false);
    }
  }, [first, type]);

  const changeHighlight = useCallback((value) => {
    setHighlight(value);
  }, []);

  const changeType = useCallback(
    (value) => {
      if (value === "videos") {
        setData(getVideoRandom());
      } else {
        setData(getStarsRandom());
      }
      history.push(location.pathname, { type: value });
    },
    [history, location.pathname]
  );

  const endLoop = useCallback(() => {
    setData(getStarsRandom());
  }, []);

  return (
    <Container>
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
      {type === "videos" ? (
        <VideoContainer>
          <Title>
            {get(data, "title", "")} <Type>[{get(data, "type", "")}]</Type>
          </Title>
          <StarsContainer>
            {get(data, "stars", []).map((item) =>
              item.idStar === "ups000" ? (
                <TagStar
                  key={item.idStar}
                  name={item.name}
                  style={{ cursor: "auto", background: Grey }}
                />
              ) : (
                <Link
                  key={item.idStar}
                  to={`/upv/star/${item.idStar}`}
                  style={{ textDecoration: "none", color: Black }}
                >
                  <TagStar name={item.name} />
                </Link>
              )
            )}
          </StarsContainer>
          <VideoContent
            dangerouslySetInnerHTML={{
              __html: get(data, "content", ""),
            }}
          />
        </VideoContainer>
      ) : (
        <>
          <WaterWheelSliderContainer type={type}>
            <WaterWheelSlider
              highlight={highlight}
              width={"14vw"}
              height={"calc(19.25vw + 40px)"}
              onSelect={changeHighlight}
              endLoop={endLoop}
              customColor={`linear-gradient(to right, ${Blue}, ${Grey})`}
            >
              {data.map((item, index) => (
                <BestStarCard
                  key={item.idStar}
                  data={item}
                  active={index === highlight}
                />
              ))}
            </WaterWheelSlider>
          </WaterWheelSliderContainer>
          <DetailContainer>
            {data.map((item, index) => (
              <BestStarDetail
                key={item.idStar}
                data={item}
                active={index === highlight}
              />
            ))}
          </DetailContainer>
        </>
      )}
    </Container>
  );
}

export default LuckyBox;
