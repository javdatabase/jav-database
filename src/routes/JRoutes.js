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

function JRoutes() {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route
          path={"/jav"}
          exact={true}
          render={() => <Redirect to={"/jav/home"} exact={true} />}
        />
        <Route path={"/jav/home"} exact={true} component={Home} />
        <Route path={"/jav/lucky-box"} exact={true} component={LuckyBox} />
        <Route path={"/jav/best-idols"} exact={true} component={BestIdols} />
        <Route
          path={"/jav/top-earnings"}
          exact={true}
          component={TopEarnings}
        />
        <Route path={"/jav/ranking"} exact={true} component={Ranking} />
        <Route path={"/jav/idols"} exact={true} component={Idols} />
        <Route path={"/jav/idol/:id"} exact={false} component={Idol} />
        <Route path={"/jav/dvds"} exact={true} component={Dvds} />
        <Route
          path={"/jav/pre-release-dvds"}
          exact={true}
          component={PreReleaseDvds}
        />
        <Route
          path={"/jav/amateur-dvds"}
          exact={true}
          component={AmateurDvds}
        />
        <Route path={"*"} component={NotFound} />
      </Switch>
    </Suspense>
  );
}

export default JRoutes;
