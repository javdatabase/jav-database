import React, { Suspense, lazy } from "react";
import styled from "styled-components";
import { Routes, Route, Navigate } from "react-router-dom";

import LoadingIcon from "../assets/images/ic_loading_upv/ic_loading_upv.svg";

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
  componentLoader(() => import("../containers/UPV/Home/Home"))
);

const LuckyBox = lazy(() =>
  componentLoader(() => import("../containers/UPV/Home/LuckyBox"))
);

const Stars = lazy(() =>
  componentLoader(() => import("../containers/UPV/Stars/Stars"))
);

const Star = lazy(() =>
  componentLoader(() => import("../containers/UPV/Stars/Star"))
);

const TopEarnings = lazy(() =>
  componentLoader(() => import("../containers/UPV/Stars/TopEarnings"))
);

function URoutes() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route index element={<Navigate to="/upv/home" replace />} />
        <Route path="home" element={<Home />} />
        <Route path="lucky-box" element={<LuckyBox />} />
        <Route path="top-earnings" element={<TopEarnings />} />
        <Route path="stars" element={<Stars />} />
        <Route path="star/:id/*" element={<Star />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default URoutes;
