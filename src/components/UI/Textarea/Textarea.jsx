import React, { memo } from "react";
import styled from "styled-components";

import { Grey } from "../../../themes/colors";
import { Large } from "../../../themes/font";

const TextareaCustom = styled.textarea`
  width: 300px;
  min-width: 300px;
  border-radius: 6px;
  border: none;
  padding: 10px 10px;
  box-sizing: border-box;
  font-family: Fredoka One;
  font-size: ${Large};
  outline: none;

  ::placeholder {
    color: ${Grey};
  }
`;

function Textarea(props) {
  return <TextareaCustom {...props} />;
}

const MemoTextarea = memo(Textarea);

export default MemoTextarea;
