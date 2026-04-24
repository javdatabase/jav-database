import React, { memo } from "react";
import styled from "styled-components";

import { White, Pink, Orange } from "../../../themes/colors";
import { Large } from "../../../themes/font";

const Label = styled.label`
  position: relative;
  display: block;
  height: 40px;
  margin: 0px;
  cursor: pointer;
  user-select: none;
`;

const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

const CheckMark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 6px;
  height: 40px;
  width: 40px;
  background: ${(props) =>
    props.checked
      ? props.customColor
        ? props.customColor
        : `linear-gradient(to right, ${Pink}, ${Orange})`
      : White};

  &:after {
    content: "";
    position: absolute;
    display: ${(props) => (props.checked ? "block" : "none")};
    left: 12.5px;
    top: 5px;
    width: 10px;
    height: 20px;
    border: solid ${White};
    border-width: 0px 5px 5px 0px;
    transform: rotate(45deg);
  }
`;

const LabelCheckbox = styled.p`
  margin: 9px 0px 9px 50px;
  font-size: ${Large};
  background: ${(props) =>
    props.checked
      ? props.customColor
        ? props.customColor
        : `linear-gradient(to right, ${Pink}, ${Orange})`
      : White};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

function Checkbox({ label, value, onChange, customColor }) {
  return (
    <Label htmlFor={label}>
      <Input id={label} type={"checkbox"} checked={value} onChange={onChange} />
      <CheckMark customColor={customColor} checked={value} />
      <LabelCheckbox customColor={customColor} checked={value}>{label}</LabelCheckbox>
    </Label>
  );
}

const MemoCheckbox = memo(Checkbox);

export default MemoCheckbox;
