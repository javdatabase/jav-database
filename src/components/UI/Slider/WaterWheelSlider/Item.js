import React, { useCallback } from "react";
import styled from "styled-components";

const AnimationItem = styled.div`
  transition: all 0.3s ease-in-out;
  position: absolute;
  left: 0;
  right: 0;
  display: none;

  &.highlight-item {
    display: block;
    z-index: 5;
  }

  &.opacity-item {
    opacity: 0.6;
  }

  &.opacity-next-item {
    opacity: 0.45;
  }

  &.opacity-next-next-time {
    opacity: 0.3;
  }

  &.opacity-last-item {
    opacity: 0.15;
  }

  &.hidden-item {
    opacity: 0;
    pointer-events: none;
  }

  &.left-item {
    display: block;
    z-index: 4;
    left: -40%;
    transform: scale(0.75);
  }

  &.right-item {
    display: block;
    z-index: 4;
    left: 35%;
    transform: scale(0.75);
  }

  &.left-left-item {
    display: block;
    z-index: 3;
    left: -70%;
    transform: scale(0.55);
  }

  &.right-right-item {
    display: block;
    z-index: 3;
    left: 70%;
    transform: scale(0.55);
  }

  &.left-left-left-item {
    display: block;
    z-index: 2;
    left: -100%;
    transform: scale(0.35);
  }

  &.right-right-right-item {
    display: block;
    z-index: 2;
    left: 100%;
    transform: scale(0.35);
  }

  &.left-last-item {
    display: block;
    z-index: 1;
    left: -120%;
    transform: scale(0.15);
  }

  &.right-last-item {
    display: block;
    z-index: 1;
    left: 120%;
    transform: scale(0.15);
  }
`;

function Item({ current, size, index, ...props }) {
  const getClassNames = useCallback(() => {
    if (index - current === 0) {
      return "highlight-item";
    }
    if (
      (index - current === -1 && current > 0) ||
      (index === size - 1 && current === 0)
    ) {
      return "left-item opacity-item";
    }
    if (
      (index - current === 1 && current < size - 1) ||
      (index === 0 && current === size - 1)
    ) {
      return "right-item opacity-item";
    }
    if (
      (index - current === -2 && current > 1) ||
      (index === size - 1 && current === 1) ||
      (index === size - 2 && current === 0)
    ) {
      return "left-left-item opacity-next-item";
    }
    if (
      (index - current === 2 && current < size - 2) ||
      (index === 0 && current === size - 2) ||
      (index === 1 && current === size - 1)
    ) {
      return "right-right-item opacity-next-item";
    }
    if (
      (index - current === -3 && current > 2) ||
      (index === size - 1 && current === 2) ||
      (index === size - 2 && current === 1) ||
      (index === size - 3 && current === 0)
    ) {
      return "left-left-left-item opacity-next-next-time";
    }
    if (
      (index - current === 3 && current < size - 3) ||
      (index === 0 && current === size - 3) ||
      (index === 1 && current === size - 2) ||
      (index === 2 && current === size - 1)
    ) {
      return "right-right-right-item opacity-next-next-time";
    }
    if (
      (index - current === -4 && current > 3) ||
      (index === size - 1 && current === 3) ||
      (index === size - 2 && current === 2) ||
      (index === size - 3 && current === 1) ||
      (index === size - 4 && current === 0)
    ) {
      return "left-last-item opacity-last-item";
    }
    if (
      (index - current === 4 && current < size - 4) ||
      (index === 0 && current === size - 4) ||
      (index === 1 && current === size - 3) ||
      (index === 2 && current === size - 2) ||
      (index === 3 && current === size - 1)
    ) {
      return "right-last-item opacity-last-item";
    }
    if (index - current < -2 && size > 9) {
      return "left-last-item hidden-item";
    }
    if (index - current > 2 && size > 9) {
      return "right-last-item hidden-item";
    }
    return "";
  }, [current, size, index]);

  return (
    <AnimationItem className={getClassNames()} {...props}>
      {props.children}
    </AnimationItem>
  );
}

export default Item;
