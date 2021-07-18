import React, { Suspense, lazy } from "react";
import styled from "styled-components";
import { Switch, Route, Redirect } from "react-router-dom";

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
  componentLoader(() => import("../containers/UPV/Home/Home"))
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
      <Switch>
        <Route
          path={"/upv"}
          exact={true}
          render={() => <Redirect to={"/upv/home"} exact={true} />}
        />
        <Route path={"/upv/home"} exact={true} component={Home} />
        <Route
          path={"/upv/top-earnings"}
          exact={true}
          component={TopEarnings}
        />
        <Route path={"/upv/stars"} exact={true} component={Stars} />
        <Route path={"/upv/star/:id"} exact={false} component={Star} />
        <Route path={"*"} component={NotFound} />
      </Switch>
    </Suspense>
  );
}

export default URoutes;
