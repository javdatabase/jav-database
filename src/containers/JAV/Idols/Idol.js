import React, { Fragment, useState, useMemo, useCallback } from "react";
import { get } from "lodash";
import styled from "styled-components";
import { Link, useLocation, useParams } from "react-router-dom";
import LazyLoad from "react-lazyload";

import { priceCurrency } from "../../../helpers/render-price";
import { checkBestIdol } from "../../../services/common.service";
import {
  getEarningIdol,
  getPriceOneNight,
  getBonusEarnings,
} from "../../../services/earnings.service";
import { IDOL_PROFILE } from "../../../services/idols.service";
import Tabs from "../../../components/UI/Tabs/Tabs";
import IdolAvatar from "../../../components/Idols/IdolAvatar";
import IdolCup from "../../../components/Idols/IdolCup";
import IdolStyle from "../../../components/Idols/IdolStyle";
import IdolPicture from "../../../components/Idols/IdolPicture";
import DvdPoster from "../../../components/Dvds/DvdPoster";
import DvdDetail from "../../../components/Dvds/DvdDetail";

import {
  Orange,
  Pink,
  White,
  DarkBlue,
  LightBlue,
  Yellow,
  Red,
  Black,
  LightPurple,
  DarkPurple,
} from "../../../themes/colors";
import { center, fadeIn } from "../../../themes/styled";
import { Large, XLarge, XXLarge } from "../../../themes/font";

const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: calc(100vh - 100px);
  overflow: auto;
  padding: 30px;
  box-sizing: border-box;
  animation: ${fadeIn} 0.8s ease-in-out;

  &::-webkit-scrollbar {
    width: 6px;
    background: transparent;
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(${Orange}, ${Pink});
    border-radius: 10px;
  }
`;

const ProfileContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const InformationContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const AvatarContainer = styled.div`
  position: relative;
  ${center}
  width: 18vw;
  height: 25vw;
  border-radius: 18px;
  border: solid 5px transparent;
  overflow: hidden;
  transition: border 0.3s ease-in-out;

  &:hover {
    border: solid 5px ${Pink};
  }
`;

const BadgeIdol = styled(Link)`
  position: absolute;
  top: -5px;
  left: -35px;
  ${center}
  width: 100px;
  height: 40px;
  background: linear-gradient(to right, ${LightPurple}, ${DarkPurple});
  transform: rotate(135deg);
  text-align: center;
  text-decoration: none;
  font-size: ${XLarge};
  color: ${White};
`;

const AvatarIdol = styled(IdolAvatar)`
  width: 18vw;
  height: 25vw;
  object-fit: cover;
`;

const RankIdol = styled.div`
  position: absolute;
  bottom: 0px;
  ${center}
  width: 18vw;
  height: 50px;
  border-radius: 0px 0px 12px 12px;
  background: ${(props) =>
    props.queen
      ? `linear-gradient(to right, ${Yellow}, ${Red})`
      : props.runnerUp
      ? `linear-gradient(to right, ${LightBlue}, ${Pink})`
      : `linear-gradient(to right, ${Orange}, ${Pink})`};
  color: ${Black};
  font-size: ${XLarge};
`;

const Information = styled.div`
  margin-left: 10px;
  color: ${White};
  font-size: ${Large};
  line-height: 35px;
`;

const NameIdol = styled.div`
  font-size: ${XXLarge};
  background: ${(props) =>
    props.queen
      ? `linear-gradient(to right, ${Yellow}, ${Red})`
      : props.runnerUp
      ? `linear-gradient(to right, ${LightBlue}, ${Pink})`
      : `linear-gradient(to right, ${Orange}, ${Pink})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const PointsIdol = styled.div`
  ${center}
  width: 150px;
  margin-top: 10px;
  margin-bottom: 50px;
  border-radius: 18px;
  background: ${(props) =>
    props.queen
      ? `linear-gradient(to right, ${Yellow}, ${Red})`
      : props.runnerUp
      ? `linear-gradient(to right, ${LightBlue}, ${Pink})`
      : `linear-gradient(to right, ${Orange}, ${Pink})`};
  color: ${Black};
  font-size: ${XLarge};
`;

const StylesIdolContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ProductContainer = styled(ProfileContainer)`
  align-items: center;
`;

const TabContent = styled.div`
  max-height: calc(100vh - 204px);
  margin-top: 5px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 6px;
    background: transparent;
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(${Orange}, ${Pink});
    border-radius: 10px;
  }
`;

const DvdContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(11vw, 1fr));
  gap: 10px;
  padding: 20px;
  box-sizing: border-box;
`;

const DvdItem = styled.div`
  ${center}
  flex-direction: column;
  margin: 5px;
  cursor: pointer;
  transform: translateY(0px);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }
`;

const PosterDvd = styled(DvdPoster)`
  width: 12vw;
  height: 8vw;
  object-fit: cover;
`;

const CodeDvd = styled.div`
  margin-top: 5px;
  font-size: ${Large};
  background: ${(props) =>
    props.uncensored
      ? `linear-gradient(to right, ${DarkBlue}, ${LightBlue})`
      : `linear-gradient(to right, ${Pink}, ${Orange})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const PictureContainer = styled(DvdContainer)`
  grid-template-columns: repeat(auto-fill, minmax(17vw, 1fr));
  gap: 20px;
`;

const PictureBorder = styled.div`
  ${center}
  width: 18vw;
  padding: 0px;
  border-radius: 12px;
  border: solid 5px transparent;
  overflow: hidden;
  cursor: pointer;
  transition: border 0.3s ease-in-out;

  &:hover {
    border: solid 5px ${Pink};
  }
`;

const Picture = styled(IdolAvatar)`
  width: 18vw;
  object-fit: cover;
`;

const EarningContainer = styled.div`
  position: absolute;
  left: 20px;
  bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const PriceIdol = styled.div`
  padding: 5px 10px;
  border-radius: 12px;
  background-color: ${White};
  color: ${Black};
  font-size: ${Large};
`;

const BonusIdol = styled(PriceIdol)`
  background: linear-gradient(to right, ${LightPurple}, ${DarkPurple});
  color: ${White};
  margin-top: 10px;
`;

const TotalIdol = styled(BonusIdol)`
  background: linear-gradient(to right, ${Orange}, ${Pink});
  color: ${White};
`;

function Idol() {
  const location = useLocation();
  const { id } = useParams();
  const [tab, setTab] = useState(0);
  const [showPicture, setShowPicture] = useState(false);
  const [picture, setPicture] = useState(null);
  const [showDvd, setShowDvd] = useState(false);
  const [dvd, setDvd] = useState(null);

  const data = useMemo(() => {
    return IDOL_PROFILE(id);
  }, [id]);

  const listImages = useMemo(() => {
    return [get(data, "avatar", "")].concat(
      get(data, "album", []).map((item) => item.picture)
    );
  }, [data]);

  const earnings = useMemo(() => {
    const uncensored = get(data, "dvds", []).filter(
      (item) => item.type === "Uncensored"
    );
    return getEarningIdol(
      get(data, "rank", 1000000),
      get(data, "points", 0),
      get(data, "styles", []),
      uncensored.length,
      checkBestIdol(get(data, "idIdol", ""))
    );
  }, [data]);

  const price = useMemo(() => {
    return getPriceOneNight(earnings);
  }, [earnings]);

  const bonus = useMemo(() => {
    return getBonusEarnings(id);
  }, [id]);

  const total = useMemo(() => {
    return bonus + earnings;
  }, [bonus, earnings]);

  const fee = useMemo(() => {
    return getPriceOneNight(total);
  }, [total]);

  const tabs = useMemo(() => {
    return [
      `Pictures (${get(data, "album.length", 0)})`,
      `Dvds (${get(data, "dvds.length", 0)})`,
    ];
  }, [data]);

  const handleChangeTab = useCallback((value) => {
    setTab(value);
  }, []);

  const toggleModalDvd = useCallback(() => {
    setShowDvd(!showDvd);
  }, [showDvd]);

  const handleChangeDvd = useCallback(
    (value) => {
      if (value) {
        setDvd(value);
      } else {
        setDvd(null);
      }
      toggleModalDvd();
    },
    [toggleModalDvd]
  );

  const toggleModalPicture = useCallback(() => {
    setShowPicture(!showPicture);
  }, [showPicture]);

  const handleChangePicture = useCallback((value) => {
    setPicture(value);
  }, []);

  const handleModalPicture = useCallback(
    (value) => {
      if (value) {
        setPicture(value);
      } else {
        setPicture(null);
      }
      toggleModalPicture();
    },
    [toggleModalPicture]
  );

  const renderTabContent = useCallback(() => {
    switch (tab) {
      case 0:
        return (
          <PictureContainer>
            {get(data, "album", []).map((item) => (
              <PictureBorder key={item.picture}>
                <Picture
                  src={item.picture}
                  onClick={() => handleModalPicture(item.picture)}
                  alt={""}
                />
              </PictureBorder>
            ))}
          </PictureContainer>
        );

      case 1:
        return (
          <DvdContainer>
            {get(data, "dvds", []).map((item) => (
              <LazyLoad
                key={item.idDvd}
                height={200}
                once={true}
                overflow={true}
              >
                <DvdItem onClick={() => handleChangeDvd(item)}>
                  <PosterDvd src={item.poster} />
                  <CodeDvd uncensored={item.type === "Uncensored"}>
                    {item.code}
                  </CodeDvd>
                </DvdItem>
              </LazyLoad>
            ))}
          </DvdContainer>
        );

      default:
        return null;
    }
  }, [tab, data, handleChangeDvd, handleModalPicture]);

  return (
    <Fragment>
      <Container>
        <ProfileContainer>
          <InformationContainer>
            <AvatarContainer>
              {checkBestIdol(data.idIdol) && (
                <BadgeIdol
                  to={{
                    pathname: "/jav/idols",
                    state: {
                      ...location.state,
                      best: true,
                      page: 1,
                    },
                  }}
                >
                  ☿
                </BadgeIdol>
              )}
              <AvatarIdol
                src={get(data, "avatar", "")}
                onClick={() => handleModalPicture(get(data, "avatar", ""))}
              />
              <RankIdol
                queen={get(data, "rank", "") === 1}
                runnerUp={get(data, "rank", "") === 2}
              >
                #{get(data, "rank", 0)}
              </RankIdol>
            </AvatarContainer>
            <Information>
              <NameIdol
                queen={get(data, "rank", "") === 1}
                runnerUp={get(data, "rank", "") === 2}
              >
                {get(data, "name", "")}{" "}
                {get(data, "other", "") ? `(${get(data, "other")})` : ""}
              </NameIdol>
              <PointsIdol
                queen={get(data, "rank", "") === 1}
                runnerUp={get(data, "rank", "") === 2}
              >
                {get(data, "points", 0)} points
              </PointsIdol>
              ● Born: {get(data, "born", "")} ({get(data, "age", "")} year olds)
              <br />● Height: {get(data, "height", "")}
              <br />● Breast: {get(data, "breast", "")}{" "}
              <IdolCup cup={get(data, "cup", "")}>
                ({get(data, "cup", "")})
              </IdolCup>
              <br />● Waist: {get(data, "waist", "")}
              <br />● Hips: {get(data, "hips", "")}
            </Information>
          </InformationContainer>
          <StylesIdolContainer>
            {get(data, "styles", []).map((item) => (
              <IdolStyle
                key={item.tag}
                tag={item.tag}
                style={{ marginTop: "10px" }}
              />
            ))}
          </StylesIdolContainer>
        </ProfileContainer>
        <ProductContainer>
          <div style={{ width: "100%" }}>
            <Tabs data={tabs} active={tab} onChange={handleChangeTab} />
            <TabContent>{renderTabContent()}</TabContent>
          </div>
        </ProductContainer>
        <EarningContainer>
          <PriceIdol>
            ${priceCurrency(earnings)} ({priceCurrency(price)})
          </PriceIdol>
          {!!bonus && (
            <Fragment>
              <BonusIdol>${priceCurrency(bonus)}</BonusIdol>
              <TotalIdol>
                ${priceCurrency(total)} ({priceCurrency(fee)})
              </TotalIdol>
            </Fragment>
          )}
        </EarningContainer>
      </Container>
      <IdolPicture
        show={showPicture}
        toggleModal={toggleModalPicture}
        listData={listImages}
        data={picture}
        setData={handleChangePicture}
      />
      <DvdDetail show={showDvd} toggleModal={toggleModalDvd} data={dvd} />
    </Fragment>
  );
}

export default Idol;
