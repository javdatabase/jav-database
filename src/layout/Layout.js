import React, { useState, useEffect, useCallback } from "react";
import { matchPath, useLocation } from "react-router-dom";
import styled from "styled-components";

import { getIdolName } from "../services/common.service";
import Navbar from "../components/Navbars/Navbar";
import Header from "../components/Headers/Header";
import Routes from "../routes/Routes";

import { Black } from "../themes/colors";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${Black};
`;

function Layout() {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");

  const renderTitle = useCallback(() => {
    const path = location.pathname;
    if (matchPath(path, { path: "/home", exact: true })) {
      return "Home";
    } else if (matchPath(path, { path: "/ranking", exact: true })) {
      return "Ranking";
    } else if (matchPath(path, { path: "/idols", exact: true })) {
      return "Idols";
    } else if (matchPath(path, { path: "/idol/:id", exact: false })) {
      return getIdolName(path.replace("/idol/", ""));
    } else if (matchPath(path, { path: "/dvds", exact: true })) {
      return "Dvds";
    } else if (matchPath(path, { path: "/pre-release-dvds", exact: true })) {
      return "Pre Release Dvds";
    } else if (matchPath(path, { path: "/amateur-dvds", exact: true })) {
      return "Amateur Dvds";
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
        <Routes />
      </Body>
    </Container>
  );
}

export default Layout;
