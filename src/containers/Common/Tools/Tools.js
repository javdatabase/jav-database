import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import {
  White,
  Grey,
  Orange,
  Pink,
  LightPurple,
  Yellow,
  Red,
  DarkBlue,
  LightBlue,
  Blue,
} from "../../../themes/colors";
import { center, fadeIn } from "../../../themes/styled";
import { Large, XXLarge } from "../../../themes/font";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  padding: 35px 320px;
  box-sizing: border-box;
  animation: ${fadeIn} 0.8s ease-in-out;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 6px;
    background: transparent;
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(${Orange}, ${Pink});
    border-radius: 10px;
  }
`;

const Title = styled.div`
  ${center}
  font-size: ${XXLarge};
  font-weight: bold;
  color: ${LightPurple};
  margin-bottom: 80px;
`;

const Content = styled.div`
  position: relative;
  ${center};
  margin-bottom: 60px;
`;

const ButtonType = styled(Link)`
  ${center};
  width: 150px;
  background: ${(props) => props.background};
  padding: 10px 30px;
  border-radius: 6px;
  margin: 0px 30px;
  box-shadow: none;
  white-space: nowrap;
  color: ${White};
  font-size: ${Large};
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

function Tools() {
  return (
    <Container>
      <Title>TOOLS</Title>
      <Content>
        <ButtonType
          to={"/tools/jav-dvd-data"}
          background={`linear-gradient(to right, ${Pink}, ${Orange})`}
        >
          JAV Dvd Data
        </ButtonType>
        <ButtonType
          to={"/tools/jav-idol-data"}
          background={`linear-gradient(to right, ${Red}, ${Yellow})`}
        >
          JAV Idol Data
        </ButtonType>
        <ButtonType
          to={"/tools/jav-video-data"}
          background={`linear-gradient(to right, ${DarkBlue}, ${LightBlue})`}
        >
          JAV Video Data
        </ButtonType>
      </Content>
      <Content>
        <ButtonType
          to={"/tools/jav-upv-data"}
          background={`linear-gradient(to right, ${Grey}, ${Blue})`}
        >
          UPV Video Data
        </ButtonType>
        <ButtonType
          to={"/tools/jav-star-data"}
          background={`linear-gradient(to right, ${LightBlue}, ${Yellow})`}
        >
          UPV Star Data
        </ButtonType>
      </Content>
    </Container>
  );
}

export default Tools;
