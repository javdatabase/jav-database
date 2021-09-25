import React, { memo } from "react";
import styled from "styled-components";

import { Pink, Orange } from "../../themes/colors";
import { Large } from "../../themes/font";

const Component = styled.div`
  margin-right: 10px;
  padding: 5px 10px;
  border-radius: 6px;
  background: linear-gradient(to right, ${Pink}, ${Orange});
  text-align: center;
  font-size: ${Large};
`;

function IdolTag({ name, ...props }) {
  return <Component {...props}>{name}</Component>;
}

const MemoIdolTag = memo(IdolTag);

export default MemoIdolTag;
