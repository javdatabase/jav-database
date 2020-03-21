import React, { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import Navbar from "../components/Navbars/Navbar";
import Header from "../components/Headers/Header";
import Routes from "../routes/Routes";
import { Black } from "../themes/colors";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  font-family: "Fredoka One", cursive;
`;

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${Black};
`;

const generateTitle = path => {
  switch (path) {
    case "/home":
      return "Home";

    case "/idols":
      return "Idols";

    case "/dvds":
      return "Dvds";

    case "/pre-release-dvds":
      return "Pre Release Dvds";

    case "/amateur-dvds":
      return "Amateur Dvds";

    default:
      return "";
  }
};

function Layout() {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");

  useEffect(() => {
    setTitle(generateTitle(location.pathname));
  }, [location]);

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
