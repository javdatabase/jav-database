import React, { useState, useEffect, useMemo, useCallback } from "react";
import { get } from "lodash";
import styled from "styled-components";

import Item from "./Item";

import {
  Pink,
  White,
  Orange,
  DarkBlue,
  LightBlue
} from "../../../themes/colors";
import { center } from "../../../themes/styled";

const Container = styled.div`
  width: 100%;
  height: 100%;
  ${center}
  flex-direction: column;
  position: relative;
`;

const SliderContainer = styled.div`
  width: 100%;
  height: 100%;
  ${center}
  position: relative;
`;

const Dots = styled.div`
  ${center}
  flex-direction: row;
  margin-top: 20px;
`;

const Dot = styled.div`
  width: ${props => (props.active ? "12px" : "8px")};
  height: ${props => (props.active ? "12px" : "8px")};
  background: ${props =>
    props.active
      ? props.customColor
        ? `linear-gradient(to right, ${DarkBlue}, ${LightBlue})`
        : `linear-gradient(to right, ${Pink}, ${Orange})`
      : White};
  border-radius: 100%;
  margin: 0px 3px;
  cursor: pointer;
`;

function Slider({ highlight, width, height, onSelect, customColor, ...props }) {
  const [current, setCurrent] = useState(highlight);

  const dots = useMemo(() => {
    return get(props.children, "length", null)
      ? props.children.map((item, index) => index)
      : [];
  }, [props.children]);

  const changeCurrent = useCallback(
    value => {
      setCurrent(value);
      if (onSelect) {
        onSelect(value);
      }
    },
    [onSelect]
  );

  const autoNext = useCallback(() => {
    if (current < get(props.children, "length", 1) - 1) {
      changeCurrent(current + 1);
    } else {
      changeCurrent(0);
    }
  }, [current, changeCurrent, props.children]);

  useEffect(() => {
    const id = setInterval(autoNext, 6000);
    return () => clearInterval(id);
  }, [autoNext]);

  return (
    <Container>
      <SliderContainer style={{ width: width, height: height }}>
        {props.children.map((item, index) => (
          <Item
            key={"item-" + index.toString()}
            current={current}
            size={get(props.children, "length", 1)}
            index={index}
            style={{ width: width, height: height }}
            onClick={() => changeCurrent(index)}
          >
            <div className={"item-water-wheel"}>{item}</div>
          </Item>
        ))}
      </SliderContainer>
      <Dots>
        {dots.map(item => (
          <Dot
            key={"dot-" + item.toString()}
            active={item === current}
            onClick={() => changeCurrent(item)}
            customColor={customColor}
          />
        ))}
      </Dots>
    </Container>
  );
}

export default Slider;
