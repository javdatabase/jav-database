import React, { memo } from "react";
import styled from "styled-components";

import { modelStyle } from "../../helpers/render-color";

import { Large } from "../../themes/font";

const Component = styled.div`
  margin-right: 10px;
  padding: 5px 10px;
  border-radius: 6px;
  background-color: ${props => props.color};
  font-size: ${Large};
`;

function IdolStyle({ tag, ...props }) {
  const color = modelStyle(tag);

  return (
    <Component color={color} {...props}>
      {tag}
    </Component>
  );
}

const MemoIdolStyle = memo(IdolStyle);

export default MemoIdolStyle;
