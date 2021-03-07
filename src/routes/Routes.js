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

const Home = lazy(() => import("../containers/Home/Home"));

const BestIdols = lazy(() => import("../containers/Idols/BestIdols"));

const TopEarnings = lazy(() => import("../containers/Idols/TopEarnings"));

const Ranking = lazy(() => import("../containers/Idols/Ranking"));

const Idols = lazy(() => import("../containers/Idols/Idols"));

const Idol = lazy(() => import("../containers/Idols/Idol"));

const Dvds = lazy(() => import("../containers/Dvds/Dvds"));

const PreReleaseDvds = lazy(() => import("../containers/Dvds/PreReleaseDvds"));

const AmateurDvds = lazy(() => import("../containers/Dvds/AmateurDvds"));

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
        <Route path={"*"} component={NotFound} />
      </Switch>
    </Suspense>
  );
}

export default Routes;
