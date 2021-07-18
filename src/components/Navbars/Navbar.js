import React, { Fragment, memo, useMemo, useCallback } from "react";
import styled from "styled-components";
import { Link, useHistory, useLocation } from "react-router-dom";

import {
  SIZE_MAIN_DVDS,
  SIZE_PRE_RELEASE_DVDS,
  SIZE_AMATEUR_DVDS,
} from "../../services/jav/dvds.service";
import { SIZE_IDOLS } from "../../services/jav/idols.service";
// import { SIZE_VIDEOS } from "../../services/upv/videos.service";
import { isNotMain } from "../../helpers/router-type";
import Backdrop from "../UI/Backdrop/Backdrop";
import DvdsIcon from "../../assets/images/ic_dvds/ic_dvds.svg";
import HomeIcon from "../../assets/images/ic_home/ic_home.svg";
import RankingIcon from "../../assets/images/ic_ranking/ic_ranking.svg";
import LineChartIcon from "../../assets/images/ic_line_chart/ic_line_chart.svg";
import WomanIcon from "../../assets/images/ic_woman/ic_woman.svg";
import PlaylistIcon from "../../assets/images/ic_playlist/ic_playlist.svg";
import AlbumIcon from "../../assets/images/ic_album/ic_album.svg";
import ClipboardIcon from "../../assets/images/ic_clipboard/ic_clipboard.svg";
import MedalIcon from "../../assets/images/ic_medal/ic_medal.svg";
// import OnlineVideoIcon from "../../assets/images/ic_online_video/ic_online_video.svg";
import NextIcon from "../../assets/images/ic_next/ic_next.svg";
import SwapIcon from "../../assets/images/ic_swap/ic_swap.svg";

import { Black, White, Grey, Blue, Pink, Orange } from "../../themes/colors";
import { center } from "../../themes/styled";
import { XLarge } from "../../themes/font";

const Container = styled.div`
  width: 300px;
  height: 100vh;
  position: fixed;
  z-index: 300;
  top: 0;
  left: ${(props) => (props.show ? 0 : -300)}px;
  background: ${(props) =>
    props.main === "true"
      ? `linear-gradient(to right, ${Pink}, ${Orange})`
      : `linear-gradient(to right, ${Blue}, ${Grey})`};
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
  margin-bottom: 20px;
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

const ButtonContainer = styled.div`
  ${center}
  width: 100%;
  height: 60px;
  margin-bottom: 20px;
`;

const ButtonSwitch = styled(Link)`
  ${center};
  width: 150px;
  background: ${(props) =>
    props.main === "true"
      ? `linear-gradient(to right, ${Blue}, ${Grey})`
      : `linear-gradient(to right, ${Pink}, ${Orange})`};
  padding: 10px 30px;
  border-radius: 6px;
  box-shadow: none;
  white-space: nowrap;
  color: ${White};
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 15px 10px -10px ${Black};
  }

  img {
    width: 20px;
    height: 20px;
    margin: 0px 10px;
  }
`;

const Navigate = styled(Link)`
  padding: 20px 30px;
  background: ${(props) => (props.active === 1 ? Black : "transparent")};
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

function Navbar({ show, toggleMenu }) {
  const history = useHistory();
  const location = useLocation();

  const navigate = useMemo(
    () =>
      !isNotMain(location.pathname)
        ? [
            {
              path: "/jav/home",
              title: "Home",
              icon: HomeIcon,
            },
            {
              path: "/jav/ranking",
              title: "Ranking",
              icon: RankingIcon,
            },
            {
              path: "/jav/top-earnings",
              title: "Top Earnings",
              icon: LineChartIcon,
            },
            {
              path: "/jav/best-idols",
              title: "Best Idols",
              icon: MedalIcon,
            },
            {
              path: "/jav/idols",
              title: `Idols (${SIZE_IDOLS})`,
              icon: WomanIcon,
            },
            {
              path: "/jav/dvds",
              title: `Dvds (${SIZE_MAIN_DVDS})`,
              icon: PlaylistIcon,
            },
            {
              path: "/jav/pre-release-dvds",
              title: `Pre Release Dvds (${SIZE_PRE_RELEASE_DVDS})`,
              icon: AlbumIcon,
            },
            {
              path: "/jav/amateur-dvds",
              title: `Amateur Dvds (${SIZE_AMATEUR_DVDS})`,
              icon: ClipboardIcon,
            },
          ]
        : [
            {
              path: "/upv/home",
              title: `Home`,
              icon: HomeIcon,
            },
            {
              path: "/upv/top-earnings",
              title: "Top Earnings",
              icon: LineChartIcon,
            },
          ],
    [location.pathname]
  );

  const handleClickLogo = useCallback(() => {
    history.push(!isNotMain(location.pathname) ? "/jav" : "/upv");
    toggleMenu();
  }, [history, location.pathname, toggleMenu]);

  return (
    <Fragment>
      <Backdrop show={show} hiddenModal={toggleMenu} />
      <Container show={show} main={String(!isNotMain(location.pathname))}>
        <LogoContainer onClick={handleClickLogo}>
          <ImageLogo src={DvdsIcon} alt={""} />
          <CompanyName>
            {!isNotMain(location.pathname) ? "JAV" : "UPV"} Database Official
          </CompanyName>
        </LogoContainer>
        <ButtonContainer>
          <ButtonSwitch
            to={isNotMain(location.pathname) ? "/jav" : "/upv"}
            main={String(!isNotMain(location.pathname))}
            onClick={toggleMenu}
          >
            <img src={SwapIcon} alt={""} /> Switch to{" "}
            {isNotMain(location.pathname) ? "JAV" : "UPV"}{" "}
            <img src={SwapIcon} alt={""} />
          </ButtonSwitch>
        </ButtonContainer>
        {navigate.map((item, index) => (
          <Navigate
            key={item.path}
            active={location.pathname === item.path ? 1 : 0}
            to={item.path}
            onClick={toggleMenu}
            style={{
              borderTop: index === 0 ? `solid 1px ${White}` : "transparent",
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

const MemoNavbar = memo(Navbar);

export default MemoNavbar;
