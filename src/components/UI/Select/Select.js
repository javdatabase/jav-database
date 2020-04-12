import React, { memo } from "react";
import Select from "react-select";

import { Large } from "../../../themes/font";
import { Grey } from "../../../themes/colors";

const selectStyle = {
  control: (styles) => ({
    ...styles,
    width: "300px",
    minWidth: "300px",
    minHeight: "40px",
    borderRadius: "6px",
    border: "none",
  }),
  option: (styles) => ({
    ...styles,
    fontSize: Large,
  }),
  input: (styles) => ({
    ...styles,
    fontFamily: "Fredoka One !important",
    fontSize: Large,
    "& input": {
      font: "inherit",
    },
  }),
  placeholder: (styles) => ({
    ...styles,
    fontFamily: "Fredoka One",
    fontSize: Large,
    color: Grey,
  }),
  singleValue: (styles) => ({ ...styles, fontSize: Large }),
  multiValue: (styles) => ({ ...styles, fontSize: Large }),
};

function Selectable(props) {
  return <Select {...props} styles={selectStyle} />;
}

const MemoSelectable = memo(Selectable);

export default MemoSelectable;
