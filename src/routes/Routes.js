import React, { Suspense, lazy } from "react";
import styled from "styled-components";
import { Switch, Route, Redirect } from "react-router-dom";

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
        // let us retry after 500 ms
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

function Routes() {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route
          path={"/"}
          exact={true}
          render={() => <Redirect to={"/jav"} />}
        />
        <Route path={"/jav"} component={Jav} />
        <Route path={"/upv"} component={Upv} />
        <Route path={"/debug"} exact={true} component={Debug} />
        <Route path={"/tools"} exact={true} component={Tools} />
        <Route path={"/top-earnings"} exact={true} component={TopEarnings} />
        <Route
          path={"/tools/jav-dvd-data"}
          exact={true}
          component={JAVDvdDataTool}
        />
        <Route
          path={"/tools/jav-idol-data"}
          exact={true}
          component={JAVIdolDataTool}
        />
        <Route
          path={"/tools/jav-video-data"}
          exact={true}
          component={JAVVideoDataTool}
        />
        <Route
          path={"/tools/upv-video-data"}
          exact={true}
          component={UPVVideoDataTool}
        />
        <Route
          path={"/tools/upv-star-data"}
          exact={true}
          component={UPVStarDataTool}
        />
        <Route path={"*"} component={NotFound} />
      </Switch>
    </Suspense>
  );
}

export default Routes;
