import React, { useState, useEffect, useCallback } from "react";
import { matchPath, useLocation, Link } from "react-router-dom";
import styled from "styled-components";

import { getIdolName } from "../services/jav/common.service";
import { getStarName } from "../services/upv/common.service";
import { BEST_IDOL_IDS } from "../services/jav/idols.service";
import Routes from "../routes/Routes";
import Navbar from "../components/Navbars/Navbar";
import Header from "../components/Headers/Header";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import BugIcon from "../assets/images/ic_bug/ic_bug.svg";
import ToolsIcon from "../assets/images/ic_tools/ic_tools.svg";

import { Black, White, Grey, Pink } from "../themes/colors";
import { center } from "../themes/styled";
import { XXLarge } from "../themes/font";

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
  background: ${Black};
`;

const ButtonLink = styled(Link)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 500;
  ${center};
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background: ${White};
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
    if (matchPath({ path: "/jav/home" }, path)) {
      return "Home";
    } else if (matchPath({ path: "/jav/lucky-box" }, path)) {
      return "Lucky Box";
    } else if (matchPath({ path: "/jav/best-idols" }, path)) {
      return `${BEST_IDOL_IDS.length} Best Idols`;
    } else if (matchPath({ path: "/jav/ranking" }, path)) {
      return "Ranking";
    } else if (
      matchPath({ path: "/jav/top-earnings" }, path) ||
      matchPath({ path: "/upv/top-earnings" }, path)
    ) {
      return "Top Earnings";
    } else if (matchPath({ path: "/jav/idols" }, path)) {
      return "Idols";
    } else if (matchPath({ path: "/jav/idol/:id", end: false }, path)) {
      return getIdolName(path.replace("/jav/idol/", ""));
    } else if (matchPath({ path: "/jav/dvds" }, path)) {
      return "Dvds";
    } else if (matchPath({ path: "/jav/pre-release-dvds" }, path)) {
      return "Pre Release Dvds";
    } else if (matchPath({ path: "/jav/amateur-dvds" }, path)) {
      return "Amateur Dvds";
    } else if (matchPath({ path: "/jav/videos" }, path)) {
      return "Videos";
    } else if (matchPath({ path: "/jav/video/:code" }, path)) {
      return path.replace("/jav/video/", "");
    } else if (matchPath({ path: "/upv/home" }, path)) {
      return "Home";
    } else if (matchPath({ path: "/upv/lucky-box" }, path)) {
      return "Lucky Box";
    } else if (matchPath({ path: "/upv/stars" }, path)) {
      return "Stars";
    } else if (matchPath({ path: "/upv/star/:id" }, path)) {
      return getStarName(path.replace("/upv/star/", ""));
    } else if (matchPath({ path: "/debug" }, path)) {
      return "Debug";
    } else if (matchPath({ path: "/tools" }, path)) {
      return "Tools";
    } else if (matchPath({ path: "/tools/:type" }, path)) {
      return "Tools";
    } else if (matchPath({ path: "/top-earnings" }, path)) {
      return "Top Earnings";
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
      <ButtonLink
        to={"/top-earnings"}
        style={{
          bottom: "unset",
          top: "25px",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: XXLarge,
          textDecoration: "none",
          backgroundColor: Black,
          color: Pink,
        }}
      >
        ❂
      </ButtonLink>
      <Body>
        <ErrorBoundary>
          <Routes />
        </ErrorBoundary>
      </Body>
      <ButtonLink to={"/debug"}>
        <img src={BugIcon} alt={""} />
      </ButtonLink>
      <ButtonLink to={"/tools"} style={{ left: "20px" }}>
        <img src={ToolsIcon} alt={""} />
      </ButtonLink>
    </Container>
  );
}

export default Layout;
