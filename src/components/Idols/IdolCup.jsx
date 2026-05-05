import React, { memo } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

import { sizeCup } from "../../helpers/render-color";

import { Black } from "../../themes/colors";

const Component = styled.span`
  color: ${(props) => props.color};
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: ${Black};
`;

function IdolCup({ children, cup, ...props }) {
  const location = useLocation();
  const color = sizeCup(cup);

  return (
    <Link
      style={{ textDecoration: "none", color: Black }}
      to={{
        pathname: "/jav/idols",
        state: {
          ...location.state,
          cup: [
            {
              label: cup,
              value: cup,
              color: color,
            },
          ],
          page: 1,
        },
      }}
    >
      <Component color={color} {...props}>
        {children}
      </Component>
    </Link>
  );
}

const MemoIdolCup = memo(IdolCup);

export default MemoIdolCup;
