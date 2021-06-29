import React, { Suspense, lazy } from "react";
import styled from "styled-components";
import { Switch, Route, Redirect } from "react-router-dom";

import LoadingIcon from "../assets/images/ic_loading/ic_loading.svg";

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
  background-color: rgba(0, 0, 0, 0.5);
  ${center}
`;

const LoadingIconStyled = styled.img`
  width: 150px;
`;

const ContainerNotFound = styled.div`
  width: 100%;
  height: 100%;
  ${center};
  background-color: ${Black};
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

const Home = lazy(() =>
  componentLoader(() => import("../containers/Home/Home"))
);

const BestIdols = lazy(() =>
  componentLoader(() => import("../containers/Idols/BestIdols"))
);

const TopEarnings = lazy(() =>
  componentLoader(() => import("../containers/Idols/TopEarnings"))
);

const Ranking = lazy(() =>
  componentLoader(() => import("../containers/Idols/Ranking"))
);

const Idols = lazy(() =>
  componentLoader(() => import("../containers/Idols/Idols"))
);

const Idol = lazy(() =>
  componentLoader(() => import("../containers/Idols/Idol"))
);

const Dvds = lazy(() =>
  componentLoader(() => import("../containers/Dvds/Dvds"))
);

const PreReleaseDvds = lazy(() =>
  componentLoader(() => import("../containers/Dvds/PreReleaseDvds"))
);

const AmateurDvds = lazy(() =>
  componentLoader(() => import("../containers/Dvds/AmateurDvds"))
);

const OnlineVideos = lazy(() =>
  componentLoader(() => import("../containers/Videos/OnlineVideos"))
);

const Debug = lazy(() =>
  componentLoader(() => import("../containers/Common/Debug"))
);

function Routes() {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route
          path={"/"}
          exact={true}
          render={() => <Redirect to={"/home"} exact={true} />}
        />
        <Route path={"/home"} exact={true} component={Home} />
        <Route path={"/best-idols"} exact={true} component={BestIdols} />
        <Route path={"/top-earnings"} exact={true} component={TopEarnings} />
        <Route path={"/ranking"} exact={true} component={Ranking} />
        <Route path={"/idols"} exact={true} component={Idols} />
        <Route path={"/idol/:id"} exact={false} component={Idol} />
        <Route path={"/dvds"} exact={true} component={Dvds} />
        <Route
          path={"/pre-release-dvds"}
          exact={true}
          component={PreReleaseDvds}
        />
        <Route path={"/amateur-dvds"} exact={true} component={AmateurDvds} />
        <Route path={"/online-videos"} exact={true} component={OnlineVideos} />
        <Route path={"/debug"} exact={true} component={Debug} />
        <Route path={"*"} component={NotFound} />
      </Switch>
    </Suspense>
  );
}

export default Routes;
