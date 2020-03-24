import React, { Fragment, useCallback } from "react";
import styled from "styled-components";
import { Link, useHistory, useLocation } from "react-router-dom";

import {
  SIZE_MAIN_DVDS,
  SIZE_PRE_RELEASE_DVDS,
  SIZE_AMATEUR_DVDS
} from "../../services/dvds.service";
import { SIZE_IDOLS } from "../../services/idols.service";
import Backdrop from "../UI/Backdrop/Backdrop";
import DvdsIcon from "../../assets/images/ic_dvds/ic_dvds.svg";
import HomeIcon from "../../assets/images/ic_home/ic_home.svg";
import RankingIcon from "../../assets/images/ic_ranking/ic_ranking.svg";
import WomanIcon from "../../assets/images/ic_woman/ic_woman.svg";
import PlaylistIcon from "../../assets/images/ic_playlist/ic_playlist.svg";
import AlbumIcon from "../../assets/images/ic_album/ic_album.svg";
import ClipboardIcon from "../../assets/images/ic_clipboard/ic_clipboard.svg";
import NextIcon from "../../assets/images/ic_next/ic_next.svg";

import { Black, Pink, Orange, White } from "../../themes/colors";
import { center } from "../../themes/styled";
import { XLarge } from "../../themes/font";

const Container = styled.div`
  width: 300px;
  height: 100vh;
  position: fixed;
  z-index: 300;
  top: 0;
  left: ${props => (props.show ? 0 : -300)}px;
  background-image: linear-gradient(${Pink}, ${Orange});
  overflow: hidden;
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  padding: 30px 0px;
  box-sizing: border-box;
`;

const LogoContainer = styled.div`
  ${center}
  flex-direction: column;
  cursor: pointer;
  margin-bottom: 30px;
`;

const ImageLogo = styled.img`
  height: 80px;
`;

const CompanyName = styled.div`
  font-weight: 900;
  font-size: ${XLarge};
  margin-top: 20px
  color: ${White};
`;

const Navigate = styled(Link)`
  padding: 20px 30px;
  background: ${props => (props.active === 1 ? Black : "transparent")};
  text-decoration: none;
  color: ${White};
  border-bottom: solid 1px ${White};

  &:hover {
    background: ${Black};
  }
`;

const ContentNavigate = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${Navigate}:hover & {
    transform: translateX(20px);
    transition: transform 0.3s linear;
  }
`;

const Icon = styled.img`
  width: 25px;
  height: 25px;
`;

const Arrow = styled.img`
  width: 15px;
  height: 15px;
`;

const navigate = [
  {
    path: "/home",
    title: "Home",
    icon: HomeIcon
  },
  {
    path: "/ranking",
    title: "Ranking",
    icon: RankingIcon
  },
  {
    path: "/idols",
    title: `Idols (${SIZE_IDOLS})`,
    icon: WomanIcon
  },
  {
    path: "/dvds",
    title: `Dvds (${SIZE_MAIN_DVDS})`,
    icon: PlaylistIcon
  },
  {
    path: "/pre-release-dvds",
    title: `Pre Release Dvds (${SIZE_PRE_RELEASE_DVDS})`,
    icon: AlbumIcon
  },
  {
    path: "/amateur-dvds",
    title: `Amateur Dvds (${SIZE_AMATEUR_DVDS})`,
    icon: ClipboardIcon
  }
];

function Navbar({ show, toggleMenu }) {
  const history = useHistory();
  const location = useLocation();

  const handleClickLogo = useCallback(() => {
    history.push("/home");
    toggleMenu();
  }, [history, toggleMenu]);

  return (
    <Fragment>
      <Backdrop show={show} hiddenModal={toggleMenu} />
      <Container show={show}>
        <LogoContainer onClick={handleClickLogo}>
          <ImageLogo src={DvdsIcon} alt={""} />
          <CompanyName>JAV Database Official</CompanyName>
        </LogoContainer>
        {navigate.map((item, index) => (
          <Navigate
            key={item.path}
            active={location.pathname === item.path ? 1 : 0}
            to={item.path}
            onClick={toggleMenu}
            style={{
              borderTop: index === 0 ? `solid 1px ${White}` : "transparent"
            }}
          >
            <ContentNavigate>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Icon src={item.icon} alt={""} />
                <span style={{ marginLeft: "20px" }}>{item.title}</span>
              </div>
              <Arrow src={NextIcon} alt={""} />
            </ContentNavigate>
          </Navigate>
        ))}
      </Container>
    </Fragment>
  );
}

export default Navbar;
