import React, { Suspense, lazy } from "react";
import styled from "styled-components";
import { Route, Switch, Redirect } from "react-router-dom";

import LoadingIcon from "../assets/images/icon_loading/icon_loading.svg";
import { Black, White } from "../themes/colors";
import { XXLarge } from "../themes/font";
import { center } from "../themes/styled";

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

const Idols = lazy(() => import("../containers/Idols/Idols"));

const Dvds = lazy(() => import("../containers/Dvds/Dvds"));

const PreReleaseDvds = lazy(() => import("../containers/Dvds/PreReleaseDvds"));

const AmateurDvds = lazy(() => import("../containers/Dvds/AmateurDvds"));

function Routes() {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        {window.location.pathname === "/" && <Redirect to={"/home"} />}
        <Route path={"/home"} exact={true} component={Home} />
        <Route path={"/idols"} exact={true} component={Idols} />
        <Route path={"/dvds"} exact={true} component={Dvds} />
        <Route
          path={"/pre-release-dvds"}
          exact={true}
          component={PreReleaseDvds}
        />
        <Route path={"/amateur-dvds"} exact={true} component={AmateurDvds} />
        <Route path={"**"} component={NotFound} />Î
      </Switch>
    </Suspense>
  );
}

export default Routes;