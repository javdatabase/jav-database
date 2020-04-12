import React, { memo } from "react";
import styled from "styled-components";

import { Orange, Pink } from "../../../themes/colors";
import { center } from "../../../themes/styled";
import { XLarge } from "../../../themes/font";

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const Tab = styled.div`
  flex: 1;
  ${center}
  padding: 10px;
  font-size: ${XLarge};
  background: linear-gradient(to right, ${Pink}, ${Orange});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: background 0.3s ease-in-out;
  cursor: pointer;
`;

const Bar = styled.div`
  position: absolute;
  bottom: -4px;
  left: ${(props) => `calc(100% * ${props.active} / ${props.size})`};
  width: calc(100% / ${(props) => props.size});
  height: 5px;
  background: linear-gradient(${Orange}, ${Pink});
  transition: left 0.3s ease-in-out;
`;

function Tabs({ data, active, onChange }) {
  const size = data.length;

  return (
    <Container>
      <Bar size={size} active={active} />
      {data.map((item, index) => (
        <Tab
          key={`tab-${index}`}
          activated={index === active}
          onClick={() => onChange(index)}
        >
          {item}
        </Tab>
      ))}
    </Container>
  );
}

const MemoTabs = memo(Tabs);

export default MemoTabs;
