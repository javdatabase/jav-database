import React, { memo } from "react";
import styled from "styled-components";

import { Black, Grey, Blue } from "../../themes/colors";
import { Large } from "../../themes/font";

const Component = styled.div`
  margin-right: 10px;
  padding: 5px 10px;
  border-radius: 6px;
  color: ${Black};
  background: linear-gradient(to right, ${Grey}, ${Blue});
  text-align: center;
  font-size: ${Large};
`;

function StarTag({ name, ...props }) {
  return <Component {...props}>{name}</Component>;
}

const MemoStarTag = memo(StarTag);

export default MemoStarTag;
