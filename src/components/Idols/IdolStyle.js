import React, { memo } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

import { modelStyle } from "../../helpers/render-color";

import { Large } from "../../themes/font";
import { Black } from "../../themes/colors";

const Component = styled.div`
  margin-right: 10px;
  padding: 5px 10px;
  border-radius: 6px;
  background: ${(props) => props.color};
  text-align: center;
  font-size: ${Large};
`;

function IdolStyle({ tag, ...props }) {
  const location = useLocation();
  const color = modelStyle(tag);

  return (
    <Link
      style={{ textDecoration: "none", color: Black }}
      to={{
        pathname: "/jav/idols",
        state: {
          ...location.state,
          styles: [
            {
              label: tag,
              value: tag,
              color: color,
            },
          ],
          page: 1,
        },
      }}
    >
      <Component color={color} {...props}>
        {tag}
      </Component>
    </Link>
  );
}

const MemoIdolStyle = memo(IdolStyle);

export default MemoIdolStyle;
