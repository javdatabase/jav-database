import React, { Fragment, useState, useMemo, useCallback } from "react";
import { get } from "lodash";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import LazyLoad from "react-lazyload";

import { IDOL_PROFILE } from "../../services/idols.service";
import Tabs from "../../components/UI/Tabs/Tabs";
import IdolAvatar from "../../components/Idols/IdolAvatar";
import IdolCup from "../../components/Idols/IdolCup";
import IdolStyle from "../../components/Idols/IdolStyle";
import IdolPicture from "../../components/Idols/IdolPicture";
import DvdPoster from "../../components/Dvds/DvdPoster";
import DvdDetail from "../../components/Dvds/DvdDetail";

import {
  Orange,
  Pink,
  White,
  DarkBlue,
  LightBlue,
  Yellow,
  Red
} from "../../themes/colors";
import { center } from "../../themes/styled";
import { Large, XXLarge } from "../../themes/font";

const tabs = ["Pictures", "Dvds"];

const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: calc(100vh - 100px);
  overflow: auto;
  padding: 30px;
  box-sizing: border-box;

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

const AvatarIdol = styled(IdolAvatar)`
  width: 16vw;
  height: 22vw;
  border: solid 5px transparent;
  border-radius: 18px;
  object-fit: cover;
  cursor: pointer;
  transition: border 0.3s ease-in-out;

  &:hover {
    border: solid 5px ${Pink};
  }
`;

const Information = styled.div`
  color: ${White};
  font-size: ${Large};
  line-height: 35px;
  margin-left: 10px;
`;

const NameIdol = styled.div`
  margin-bottom: 50px;
  font-size: ${XXLarge};
  background: ${props =>
    props.queen
      ? `linear-gradient(to right, ${Yellow}, ${Red})`
      : props.runnerUp
      ? `linear-gradient(to right, ${LightBlue}, ${Pink})`
      : `linear-gradient(to right, ${Orange}, ${Pink})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
  background: ${props =>
    props.uncensored
      ? `linear-gradient(to right, ${DarkBlue}, ${LightBlue})`
      : `linear-gradient(to right, ${Pink}, ${Orange})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const PictureContainer = styled(DvdContainer)`
  gap: 20px;
`;

const Picture = styled(IdolAvatar)`
  width: 12vw;
  border: solid 5px transparent;
  border-radius: 12px;
  cursor: pointer;
  transition: border 0.3s ease-in-out;

  &:hover {
    border: solid 5px ${Pink};
  }
`;

function Idol() {
  const { id } = useParams();
  const [tab, setTab] = useState(0);
  const [showPicture, setShowPicture] = useState(false);
  const [picture, setPicture] = useState(null);
  const [showDvd, setShowDvd] = useState(false);
  const [dvd, setDvd] = useState(null);

  const data = useMemo(() => {
    return IDOL_PROFILE(id);
  }, [id]);

  const handleChangeTab = useCallback(value => {
    setTab(value);
  }, []);

  const toggleModalDvd = useCallback(() => {
    setShowDvd(!showDvd);
  }, [showDvd]);

  const handleChangeDvd = useCallback(
    value => {
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

  const handleChangePicture = useCallback(
    value => {
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
            {get(data, "album", []).map(item => (
              <Picture
                key={item.picture}
                src={item.picture}
                onClick={() => handleChangePicture(item.picture)}
                alt={""}
              />
            ))}
          </PictureContainer>
        );

      case 1:
        return (
          <DvdContainer>
            {get(data, "dvds", []).map(item => (
              <LazyLoad
                key={item.code}
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
  }, [tab, data, handleChangeDvd, handleChangePicture]);

  return (
    <Fragment>
      <Container>
        <ProfileContainer>
          <InformationContainer>
            <AvatarIdol
              src={get(data, "avatar", "")}
              onClick={() => handleChangePicture(get(data, "avatar", ""))}
            />
            <Information>
              <NameIdol
                queen={get(data, "rank", "") === 1}
                runnerUp={get(data, "rank", "") === 2}
              >
                {get(data, "name", "")}{" "}
                {get(data, "other", "") ? `(${get(data, "other")})` : ""}
              </NameIdol>
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
            {get(data, "styles", []).map(item => (
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
      </Container>
      <IdolPicture
        show={showPicture}
        toggleModal={toggleModalPicture}
        data={picture}
      />
      <DvdDetail show={showDvd} toggleModal={toggleModalDvd} data={dvd} />
    </Fragment>
  );
}

export default Idol;