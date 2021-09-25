import React, { useState, useMemo, useCallback } from "react";
import styled from "styled-components";

import { getIdolRank } from "../../../services/jav/common.service";
import { BEST_IDOLS } from "../../../services/jav/idols.service";
import WaterWheelSlider from "../../../components/UI/Slider/WaterWheelSlider/Slider";
import BestIdolCard from "../../../components/Idols/BestIdolCard";
import BestIdolDetail from "../../../components/Idols/BestIdolDetail";

import { Pink, Orange, LightBlue, Yellow, Red } from "../../../themes/colors";
import { center, fadeIn } from "../../../themes/styled";

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

const WaterWheelSliderContainer = styled.div`
  width: calc(14vw + 800px);
  height: calc(19.25vw + 100px);
`;

const DetailContainer = styled.div`
  ${center}
  width: calc(100vw - 40px);
  margin-top: 20px;
`;

function BestIdols() {
  const [highlight, setHighlight] = useState(0);

  const data = useMemo(() => {
    return BEST_IDOLS || [];
  }, []);

  const changeHighlight = useCallback((value) => {
    setHighlight(value);
  }, []);

  return (
    <Container>
      <WaterWheelSliderContainer>
        <WaterWheelSlider
          highlight={highlight}
          width={"14vw"}
          height={"calc(19.25vw + 40px)"}
          onSelect={changeHighlight}
          customColor={
            getIdolRank(data[highlight].idIdol) === 1
              ? `linear-gradient(to right, ${Yellow}, ${Red})`
              : getIdolRank(data[highlight].idIdol) === 2
              ? `linear-gradient(to right, ${LightBlue}, ${Pink})`
              : `linear-gradient(to right,  ${Orange}, ${Pink})`
          }
        >
          {data.map((item, index) => (
            <BestIdolCard
              key={item.idIdol}
              data={item}
              active={index === highlight}
            />
          ))}
        </WaterWheelSlider>
      </WaterWheelSliderContainer>
      <DetailContainer>
        {data.map((item, index) => (
          <BestIdolDetail
            key={item.idIdol}
            data={item}
            active={index === highlight}
          />
        ))}
      </DetailContainer>
    </Container>
  );
}

export default BestIdols;
