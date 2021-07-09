import React, { useState, useEffect, useCallback } from "react";
import { matchPath, useLocation, Link } from "react-router-dom";
import styled from "styled-components";

import { getIdolName } from "../services/common.service";
import { BEST_IDOL_IDS } from "../services/idols.service";
import { STAR_PROFILE } from "../services/stars.service";
import Navbar from "../components/Navbars/Navbar";
import Header from "../components/Headers/Header";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import Routes from "../routes/Routes";

import { Black, White, Grey } from "../themes/colors";
import { center } from "../themes/styled";
import BugIcon from "../assets/images/ic_bug/ic_bug.svg";

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: ${Black};
`;

const ButtonLink = styled(Link)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  ${center};
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: ${White};
  box-shadow: 0px 0px 20px 0px ${Black};

  &:hover {
    box-shadow: 0px 0px 20px 0px ${Grey};
  }

  img {
    width: 30px;
    height: 30px;
  }
`;

function Layout() {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");

  const renderTitle = useCallback(() => {
    const path = location.pathname;
    if (matchPath(path, { path: "/jav/home", exact: true })) {
      return "Home";
    } else if (matchPath(path, { path: "/jav/best-idols", exact: true })) {
      return `${BEST_IDOL_IDS.length} Best Idols`;
    } else if (matchPath(path, { path: "/jav/ranking", exact: true })) {
      return "Ranking";
    } else if (matchPath(path, { path: "/jav/top-earnings", exact: true })) {
      return "Top Earnings";
    } else if (matchPath(path, { path: "/jav/idols", exact: true })) {
      return "Idols";
    } else if (matchPath(path, { path: "/jav/idol/:id", exact: false })) {
      return getIdolName(path.replace("/jav/idol/", ""));
    } else if (matchPath(path, { path: "/jav/dvds", exact: true })) {
      return "Dvds";
    } else if (
      matchPath(path, { path: "/jav/pre-release-dvds", exact: true })
    ) {
      return "Pre Release Dvds";
    } else if (matchPath(path, { path: "/jav/amateur-dvds", exact: true })) {
      return "Amateur Dvds";
    } else if (matchPath(path, { path: "/upv/home", exact: true })) {
      return "Home";
    } else if (matchPath(path, { path: "/upv/star/:id", exact: true })) {
      return STAR_PROFILE(path.replace("/upv/star/", "")).name;
    } else if (matchPath(path, { path: "/debug", exact: true })) {
      return "Debug";
    } else {
      return "Not Found";
    }
  }, [location.pathname]);

  useEffect(() => {
    setTitle(renderTitle());
  }, [renderTitle]);

  const toggleMenu = useCallback(() => {
    setShow(!show);
  }, [show]);

  return (
    <Container>
      <Navbar show={show} toggleMenu={toggleMenu} />
      <Header title={title} toggleMenu={toggleMenu} />
      <Body>
        <ErrorBoundary>
          <Routes />
        </ErrorBoundary>
      </Body>
      <ButtonLink to={"/debug"}>
        <img src={BugIcon} alt={""} />
      </ButtonLink>
    </Container>
  );
}

export default Layout;
