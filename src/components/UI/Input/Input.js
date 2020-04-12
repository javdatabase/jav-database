import React, { memo } from "react";
import styled from "styled-components";

import { Grey } from "../../../themes/colors";
import { Large } from "../../../themes/font";

const InputCustom = styled.input`
  width: 300px;
  min-width: 300px;
  height: 40px;
  border-radius: 6px;
  border: none;
  padding: 2px 10px;
  box-sizing: border-box;
  font-family: Fredoka One;
  font-size: ${Large};

  ::placeholder {
    color: ${Grey};
  }
`;

function Input(props) {
  return <InputCustom {...props} />;
}

const MemoInput = memo(Input);

export default MemoInput;
