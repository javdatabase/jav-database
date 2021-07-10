import React, { Fragment, useState, useMemo, useCallback } from "react";
import { get } from "lodash";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import { priceCurrency } from "../../../helpers/render-price";
import {
  getEarningStar,
  getPriceOneNight,
} from "../../../services/jav/earnings.service";
import { STAR_PROFILE } from "../../../services/upv/stars.service";
import Tabs from "../../../components/UI/Tabs/Tabs";
import IdolAvatar from "../../../components/Idols/IdolAvatar";
import StarCup from "../../../components/Idols/IdolCup";
import StarPicture from "../../../components/Idols/IdolPicture";

import { Black, Grey, Blue } from "../../../themes/colors";
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
    background: linear-gradient(${Grey}, ${Blue});
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
    border: solid 5px ${Blue};
  }
`;

const AvatarStar = styled(IdolAvatar)`
  width: 18vw;
  height: 25vw;
  object-fit: cover;
`;

const Information = styled.div`
  margin-left: 10px;
  color: ${Grey};
  font-size: ${Large};
  line-height: 35px;
`;

const NameStar = styled.div`
  font-size: ${XXLarge};
  background: linear-gradient(to right, ${Grey}, ${Blue});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const PointsStar = styled.div`
  ${center}
  width: 150px;
  margin-top: 10px;
  margin-bottom: 50px;
  border-radius: 18px;
  background: linear-gradient(to right, ${Grey}, ${Blue});
  color: ${Black};
  font-size: ${XLarge};
`;

const ProductContainer = styled(ProfileContainer)`
  align-items: center;
`;

const Content = styled.div`
  max-height: calc(100vh - 204px);
  margin-top: 5px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 6px;
    background: transparent;
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${Blue};
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
    border: solid 5px ${Blue};
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
  background-color: ${Grey};
  color: ${Black};
  font-size: ${Large};
`;

function Star() {
  const { id } = useParams();
  const [tab, setTab] = useState(0);
  const [showPicture, setShowPicture] = useState(false);
  const [picture, setPicture] = useState(null);

  const data = useMemo(() => {
    return STAR_PROFILE(id);
  }, [id]);

  const listImages = useMemo(() => {
    return [get(data, "avatar", "")].concat(
      get(data, "album", []).map((item) => item.picture)
    );
  }, [data]);

  const earnings = useMemo(() => {
    return getEarningStar(get(data, "points", 0));
  }, [data]);

  const price = useMemo(() => {
    return getPriceOneNight(earnings);
  }, [earnings]);

  const tabs = useMemo(() => {
    return [`Pictures (${get(data, "album.length", 0)})`];
  }, [data]);

  const handleChangeTab = useCallback((value) => {
    setTab(value);
  }, []);

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

  return (
    <Fragment>
      <Container>
        <ProfileContainer>
          <InformationContainer>
            <AvatarContainer>
              <AvatarStar
                src={get(data, "avatar", "")}
                onClick={() => handleModalPicture(get(data, "avatar", ""))}
              />
            </AvatarContainer>
            <Information>
              <NameStar>{get(data, "name", "")}</NameStar>
              <PointsStar>{get(data, "points", 0)} points</PointsStar>● Born:{" "}
              {get(data, "born", "")} ({get(data, "age", "")} year olds)
              <br />● Height: {get(data, "height", "")}
              <br />● Breast: {get(data, "breast", "")}{" "}
              <StarCup cup={get(data, "cup", "")}>
                ({get(data, "cup", "")})
              </StarCup>
              <br />● Waist: {get(data, "waist", "")}
              <br />● Hips: {get(data, "hips", "")}
            </Information>
          </InformationContainer>
        </ProfileContainer>
        <ProductContainer>
          <div style={{ width: "100%" }}>
            <Tabs
              data={tabs}
              active={tab}
              tabColor={`linear-gradient(${Blue}, ${Grey})`}
              barColor={`linear-gradient(${Grey}, ${Blue})`}
              onChange={handleChangeTab}
            />
            <Content>
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
            </Content>
          </div>
        </ProductContainer>
        <EarningContainer>
          <PriceIdol>
            ${priceCurrency(earnings)} ({priceCurrency(price)})
          </PriceIdol>
        </EarningContainer>
      </Container>
      <StarPicture
        show={showPicture}
        toggleModal={toggleModalPicture}
        listData={listImages}
        data={picture}
        setData={handleChangePicture}
      />
    </Fragment>
  );
}

export default Star;
