import React, { Suspense, lazy } from "react";
import styled from "styled-components";
import { Routes, Route, Navigate } from "react-router-dom";

import LoadingIcon from "../assets/images/ic_loading_jav/ic_loading_jav.svg";

import { Black, White } from "../themes/colors";
import { center } from "../themes/styled";
import { XXLarge } from "../themes/font";

const ContainerLoading = styled.div`
  position: absolute;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  top: 0px;
  left: 0px;
  background: rgba(0, 0, 0, 0.5);
  ${center}
`;

const LoadingIconStyled = styled.img`
  width: 150px;
`;

const ContainerNotFound = styled.div`
  width: 100%;
  height: 100%;
  ${center};
  background: ${Black};
  color: ${White};
  font-size: ${XXLarge};
  line-height: 50px;
  text-align: center;
`;

function Loading() {
  return (
    <ContainerLoading>
      <LoadingIconStyled src={LoadingIcon} alt={""} />
    </ContainerLoading>
  );
}

function NotFound() {
  return (
    <ContainerNotFound>
      404
      <br />
      Not Found
    </ContainerNotFound>
  );
}

function componentLoader(lazyComponent, attemptsLeft = 3) {
  return new Promise((resolve, reject) => {
    lazyComponent()
      .then(resolve)
      .catch((error) => {
        setTimeout(() => {
          if (attemptsLeft === 1) {
            reject(error);
            return;
          }
          componentLoader(lazyComponent, attemptsLeft - 1).then(
            resolve,
            reject
          );
        }, 500);
      });
  });
}

const Home = lazy(() =>
  componentLoader(() => import("../containers/JAV/Home/Home"))
);

const LuckyBox = lazy(() =>
  componentLoader(() => import("../containers/JAV/Home/LuckyBox"))
);

const BestIdols = lazy(() =>
  componentLoader(() => import("../containers/JAV/Idols/BestIdols"))
);

const TopEarnings = lazy(() =>
  componentLoader(() => import("../containers/JAV/Idols/TopEarnings"))
);

const Ranking = lazy(() =>
  componentLoader(() => import("../containers/JAV/Idols/Ranking"))
);

const Idols = lazy(() =>
  componentLoader(() => import("../containers/JAV/Idols/Idols"))
);

const Idol = lazy(() =>
  componentLoader(() => import("../containers/JAV/Idols/Idol"))
);

const Dvds = lazy(() =>
  componentLoader(() => import("../containers/JAV/Dvds/Dvds"))
);

const PreReleaseDvds = lazy(() =>
  componentLoader(() => import("../containers/JAV/Dvds/PreReleaseDvds"))
);

const AmateurDvds = lazy(() =>
  componentLoader(() => import("../containers/JAV/Dvds/AmateurDvds"))
);

const Videos = lazy(() =>
  componentLoader(() => import("../containers/JAV/Videos/Videos"))
);

const Video = lazy(() =>
  componentLoader(() => import("../containers/JAV/Videos/Video"))
);

function JRoutes() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route index element={<Navigate to="/jav/home" replace />} />
        <Route path="home" element={<Home />} />
        <Route path="lucky-box" element={<LuckyBox />} />
        <Route path="best-idols" element={<BestIdols />} />
        <Route path="top-earnings" element={<TopEarnings />} />
        <Route path="ranking" element={<Ranking />} />
        <Route path="idols" element={<Idols />} />
        <Route path="idol/:id/*" element={<Idol />} />
        <Route path="dvds" element={<Dvds />} />
        <Route path="pre-release-dvds" element={<PreReleaseDvds />} />
        <Route path="amateur-dvds" element={<AmateurDvds />} />
        <Route path="videos" element={<Videos />} />
        <Route path="video/:code" element={<Video />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default JRoutes;
