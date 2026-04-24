import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { debugDvds, debugIdols, debugVideos } from "../../utils/debug-data";

import { White, Orange, Pink, Yellow } from "../../themes/colors";
import { center, fadeIn } from "../../themes/styled";
import { Large, XXLarge } from "../../themes/font";

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
  color: ${Yellow};
  margin-bottom: 50px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Label = styled.div`
  font-size: ${Large};
  color: ${White};
  margin-right: 10px;
`;

const Description = styled.div`
  font-size: ${Large};
  color: ${Orange};
`;

function Debug() {
  const [alreadyExistDvds, setAlreadyExistDvds] = useState("");
  const [alreadyExistPoster, setAlreadyExistPoster] = useState("");
  const [posterIsFalsy, setPosterIsFalsy] = useState("");
  const [alreadyExistIdIdols, setAlreadyExistIdIdols] = useState("");
  const [alreadyExistVideos, setAlreadyExistVideos] = useState("");
  const [videoIsFalsy, setVideoIsFalsy] = useState("");

  useEffect(() => {
    setTimeout(() => {
      const dvds = debugDvds();
      setAlreadyExistDvds(dvds.alreadyExistDvd);
      setAlreadyExistPoster(dvds.alreadyExistPoster);
      setPosterIsFalsy(dvds.posterIsFalsy);
      const idols = debugIdols();
      setAlreadyExistIdIdols(idols);
      const videos = debugVideos();
      setAlreadyExistVideos(videos.alreadyExistVideo);
      setVideoIsFalsy(videos.videoIsFalsy);
    }, 0);
  }, []);

  return (
    <Container>
      <Title>WARNING DATA</Title>
      <Content>
        <Label>● Dvds Already Exists: </Label>
        <Description>
          {typeof alreadyExistDvds === "string"
            ? alreadyExistDvds
            : alreadyExistDvds.join(", ")}
        </Description>
      </Content>
      <Content>
        <Label>● Poster Already Exists: </Label>
        <Description>
          {typeof alreadyExistPoster === "string"
            ? alreadyExistPoster
            : alreadyExistPoster.join(", ")}
        </Description>
      </Content>
      <Content>
        <Label>● Poster Error: </Label>
        <Description>
          {typeof posterIsFalsy === "string"
            ? posterIsFalsy
            : posterIsFalsy.join(", ")}
        </Description>
      </Content>
      <Content>
        <Label>● ID Idols Already Exists: </Label>
        <Description>
          {typeof alreadyExistIdIdols === "string"
            ? alreadyExistIdIdols
            : alreadyExistIdIdols.join(", ")}
        </Description>
      </Content>
      <Content>
        <Label>● Videos Already Exists: </Label>
        <Description>
          {typeof alreadyExistVideos === "string"
            ? alreadyExistVideos
            : alreadyExistVideos.join(", ")}
        </Description>
      </Content>
      <Content>
        <Label>● Videos Error: </Label>
        <Description>
          {typeof videoIsFalsy === "string"
            ? videoIsFalsy
            : videoIsFalsy.join(", ")}
        </Description>
      </Content>
    </Container>
  );
}

export default Debug;
