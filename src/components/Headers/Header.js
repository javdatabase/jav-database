import React, { memo } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

import DvdsIcon from "../../assets/images/ic_dvds/ic_dvds.svg";

import { isNotMain } from "../../helpers/router-type";

import { White, Black, Grey, Blue, Pink, Orange } from "../../themes/colors";
import { center } from "../../themes/styled";
import { XXLarge } from "../../themes/font";

const Container = styled.div`
  width: 100vw;
  height: 100px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  position: relative;
  z-index: 100;
  background: ${(props) =>
    props.main === "true"
      ? `linear-gradient(to right, ${Pink}, ${Orange})`
      : `linear-gradient(to right, ${Blue}, ${Grey})`};
`;

const ElementsGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const MenuButton = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  ${center}
  flex-direction: column;
  cursor: pointer;

  &:hover {
    background: ${Black};
  }
`;

const Bar = styled.div`
  width: 50px;
  height: 6px;
  border-radius: 12px;
  background: ${White};
  margin: 5px 0px;
  transition: 0.3s;
`;

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  height: 60px;
  margin-left: 50px;
  cursor: pointer;
  text-decoration: none;
`;

const ImageLogo = styled.img`
  height: 50px;
`;

const CompanyName = styled.span`
  font-weight: 900;
  font-size: 50px;
  margin-left: 10px;
  color: ${White};
`;

const Title = styled.span`
  font-size: ${XXLarge};
`;

function Header({ title, toggleMenu }) {
  const location = useLocation();

  return (
    <Container main={String(!isNotMain(location.pathname))}>
      <ElementsGroup>
        <MenuButton onClick={toggleMenu}>
          <Bar />
          <Bar />
          <Bar />
        </MenuButton>
        <LogoContainer to={!isNotMain(location.pathname) ? "/jav" : "/upv"}>
          <ImageLogo src={DvdsIcon} alt={""} />
          <CompanyName>
            {!isNotMain(location.pathname) ? "JAV" : "UPV"} Database Official
          </CompanyName>
        </LogoContainer>
      </ElementsGroup>
      <ElementsGroup>
        <Title>{title}</Title>
      </ElementsGroup>
    </Container>
  );
}

const MemoHeader = memo(Header);

export default MemoHeader;
