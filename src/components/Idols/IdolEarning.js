import React, { Fragment, memo, useState, useMemo, useCallback } from "react";
import { get } from "lodash";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

import { priceCurrency } from "../../helpers/render-price";
import { checkBestIdol } from "../../services/common.service";
import { getPriceOneNight } from "../../services/earnings.service";
import IdolAvatar from "./IdolAvatar";
import IdolCup from "./IdolCup";
import IdolStyle from "./IdolStyle";
import IdolPicture from "../../components/Idols/IdolPicture";

import {
  Black,
  Pink,
  Orange,
  White,
  Yellow,
  DarkBlue,
  LightBlue,
  Grey,
  LightPurple,
  DarkPurple,
} from "../../themes/colors";
import { center } from "../../themes/styled";
import { Regular, XLarge, XXLarge } from "../../themes/font";

const Container = styled.div`
  width: 100%;
  display: flex;
  border-radius: 18px;
  padding: 10px;
  margin: 20px 0px;
  box-sizing: border-box;
  background: linear-gradient(to right, ${White}, ${Grey});
`;

const PositionIdol = styled.div`
  ${center}
  align-self: center;
  width: 50px;
  min-width: 50px;
  height: 50px;
  border: solid 3px ${Black};
  border-radius: 50px;
  margin-right: 10px;
  box-sizing: border-box;
  background-color: ${White};
  color: ${Black};
  font-size: ${XXLarge};
`;

const AvatarContainer = styled.div`
  position: relative;
  width: 10vw;
  min-width: 10vw;
  height: 15vw;
  border-radius: 18px;
  overflow: hidden;
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
  width: 10vw;
  min-width: 10vw;
  height: 15vw;
  border-radius: 18px;
  object-fit: cover;
`;

const IdolInformationContainer = styled.div`
  position: relative;
  width: 450px;
  min-width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
`;

const NameIdol = styled.div`
  color: ${Pink};
  font-size: ${XXLarge};
`;

const InformationIdol = styled.div`
  color: ${Black};
`;

const StylesIdolContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyleIdol = styled(IdolStyle)`
  border: solid 2px ${Black};
  margin-top: 10px;
`;

const PicturesContainer = styled.div`
  width: calc(25vw + 50px);
  min-width: calc(25vw + 50px);
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-right: 10px;
`;

const PictureBorder = styled.div`
  ${center}
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
  width: 5vw;
  min-width: 5vw;
  height: 7.5vw;
`;

const EarningContainer = styled.div`
  flex: 1;
  padding-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PriceIdol = styled.div`
  border: solid 6px ${Grey};
  padding: 10px 20px;
  border-radius: 12px;
  background: linear-gradient(to right, ${LightBlue}, ${DarkBlue});
  color: ${White};
  font-size: ${XLarge};
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: ${Black};
`;

const BonusContainer = styled.div`
  color: transparent;
  font-size: ${XLarge};
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: ${Black};
`;

const BonusIdol = styled(PriceIdol)`
  border: solid 6px ${(props) => (props.bonus === "true" ? Black : Grey)};
  background: linear-gradient(to right, ${LightPurple}, ${DarkPurple});
  color: ${White};
  margin-top: 10px;
  font-size: ${XLarge};
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: ${Black};
`;

const TotalIdol = styled(BonusIdol)`
  border: solid 6px ${(props) => (props.bonus === "false" ? Black : Grey)};
  background: linear-gradient(to right, ${Yellow}, ${Orange});
  color: ${White};
  font-size: ${XLarge};
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: ${Black};
`;

const ViewProfile = styled(Link)`
  position: absolute;
  bottom: 0px;
  ${center}
  width: 10vw;
  height: 0px;
  overflow: hidden;
  border-radius: 0px 0px 18px 18px;
  box-sizing: border-box;
  background: linear-gradient(to right, ${White}, ${Grey});
  text-decoration: none;
  color: ${Black};
  font-size: ${Regular};
  transition: height 0.3s ease-in-out;

  ${Container}:hover & {
    height: 30px;
    border: solid 1px ${Black};
  }
`;

function IdolEarning({ data }) {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const [picture, setPicture] = useState(null);

  const price = useMemo(() => {
    return getPriceOneNight(data.earnings);
  }, [data.earnings]);

  const total = useMemo(() => {
    return data.bonus + data.earnings;
  }, [data.bonus, data.earnings]);

  const fee = useMemo(() => {
    return getPriceOneNight(total);
  }, [total]);

  const toggleModal = useCallback(() => {
    setShow(!show);
  }, [show]);

  const handleChangePicture = useCallback((value) => {
    setPicture(value);
  }, []);

  const handleModal = useCallback(
    (value) => {
      if (value) {
        setPicture(value);
      } else {
        setPicture(null);
      }
      toggleModal();
    },
    [toggleModal]
  );

  return (
    <Fragment>
      <Container>
        <PositionIdol>{data.position}</PositionIdol>
        <div style={{ display: "flex", width: "100%" }}>
          <AvatarContainer>
            {checkBestIdol(data.idIdol) && (
              <BadgeIdol
                to={{
                  pathname: "/idols",
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
            <AvatarIdol src={data.avatar} />
            <ViewProfile to={`/idol/${data.idIdol}`}>View</ViewProfile>
          </AvatarContainer>
          <IdolInformationContainer>
            <NameIdol>
              {data.name} {data.other ? `(${data.other})` : ""}
            </NameIdol>
            <InformationIdol>
              ● Born: {data.born} ({data.age} year olds)
              <br />● Height: {data.height}
              <br />● Breast: {data.breast}{" "}
              <IdolCup cup={data.cup}>({data.cup})</IdolCup>
              <br />● Waist: {data.waist}
              <br />● Hips: {data.hips}
            </InformationIdol>
            <StylesIdolContainer>
              {data.styles.map((item) => (
                <StyleIdol key={item.tag} tag={item.tag} />
              ))}
            </StylesIdolContainer>
          </IdolInformationContainer>
          <PicturesContainer>
            {data.album.map((item) => (
              <PictureBorder key={item.picture}>
                <Picture
                  src={item.picture}
                  onClick={() => handleModal(item.picture)}
                  alt={""}
                />
              </PictureBorder>
            ))}
          </PicturesContainer>
          <EarningContainer>
            <PriceIdol>
              ${priceCurrency(data.earnings)} ({priceCurrency(price)})
            </PriceIdol>
            {!!data.bonus && (
              <BonusContainer>
                +
                <BonusIdol
                  bonus={get(location.state, "bonus", false).toString()}
                >
                  ${priceCurrency(data.bonus)}
                </BonusIdol>
                =
                <TotalIdol
                  bonus={get(location.state, "bonus", false).toString()}
                >
                  ${priceCurrency(total)} ({priceCurrency(fee)})
                </TotalIdol>
              </BonusContainer>
            )}
          </EarningContainer>
        </div>
      </Container>
      <IdolPicture
        show={show}
        toggleModal={toggleModal}
        listData={data.album.map((item) => item.picture)}
        data={picture}
        setData={handleChangePicture}
      />
    </Fragment>
  );
}

const MemoIdolEarning = memo(IdolEarning);

export default MemoIdolEarning;
