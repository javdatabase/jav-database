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

const Jav = lazy(() => componentLoader(() => import("./JRoutes")));

const Upv = lazy(() => componentLoader(() => import("./URoutes")));

const Debug = lazy(() =>
  componentLoader(() => import("../containers/Common/Debug"))
);

const Tools = lazy(() =>
  componentLoader(() => import("../containers/Common/Tools/Tools"))
);

const TopEarnings = lazy(() =>
  componentLoader(() => import("../containers/Common/TopEarnings"))
);

const GetJAVDvdDataTool = lazy(() =>
  componentLoader(() => import("../containers/Common/Tools/GetJAVDvdData"))
);

const JAVDvdDataTool = lazy(() =>
  componentLoader(() => import("../containers/Common/Tools/JAVDvdData"))
);

const JAVIdolDataTool = lazy(() =>
  componentLoader(() => import("../containers/Common/Tools/JAVIdolData"))
);

const JAVVideoDataTool = lazy(() =>
  componentLoader(() => import("../containers/Common/Tools/JAVVideoData"))
);

const UPVVideoDataTool = lazy(() =>
  componentLoader(() => import("../containers/Common/Tools/UPVVideoData"))
);

const UPVStarDataTool = lazy(() =>
  componentLoader(() => import("../containers/Common/Tools/UPVStarData"))
);

function AppRoutes() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Navigate to="/jav" replace />} />
        <Route path="/jav/*" element={<Jav />} />
        <Route path="/upv/*" element={<Upv />} />
        <Route path="/debug" element={<Debug />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/top-earnings" element={<TopEarnings />} />
        <Route path="/tools/get-jav-dvd-data" element={<GetJAVDvdDataTool />} />
        <Route path="/tools/jav-dvd-data" element={<JAVDvdDataTool />} />
        <Route path="/tools/jav-idol-data" element={<JAVIdolDataTool />} />
        <Route path="/tools/jav-video-data" element={<JAVVideoDataTool />} />
        <Route path="/tools/upv-video-data" element={<UPVVideoDataTool />} />
        <Route path="/tools/upv-star-data" element={<UPVStarDataTool />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
