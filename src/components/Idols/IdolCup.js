import React, { memo } from "react";
import styled from "styled-components";

import { sizeCup } from "../../helpers/render-color";

import { Black } from "../../themes/colors";

const Component = styled.span`
  color: ${props => props.color};
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: ${Black};
`;

function IdolCup({ children, cup, ...props }) {
  const color = sizeCup(cup);

  return (
    <Component color={color} {...props}>
      {children}
    </Component>
  );
}

const MemoIdolCup = memo(IdolCup);

export default MemoIdolCup;
