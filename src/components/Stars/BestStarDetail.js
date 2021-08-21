import React, { Fragment, memo, useState, useCallback } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Image from "../Image/Image";
import StarCup from "./StarCup";
import StarPicture from "./StarPicture";

import { Black, White, Blue, LightBlue, Yellow } from "../../themes/colors";
import { center, fadeIn } from "../../themes/styled";
import { Regular, XXLarge } from "../../themes/font";

const Container = styled.div`
  width: 100%;
  display: flex;
  border-radius: 18px;
  padding: 10px;
  box-sizing: border-box;
  background: ${(props) =>
    props.customColor || `linear-gradient(to right, ${Yellow}, ${LightBlue})`};
  animation: ${fadeIn} 1s linear;
`;

const PositionStar = styled.div`
  ${center}
  align-self: center;
  width: 50px;
  min-width: 50px;
  height: 50px;
  border: solid 3px ${Black};
  border-radius: 50px;
  margin-right: 10px;
  box-sizing: border-box;
  background: ${White};
  color: ${Black};
  font-size: ${XXLarge};
`;

const AvatarContainer = styled.div`
  position: relative;
  width: 10vw;
  height: 15vw;
`;

const AvatarStar = styled(Image)`
  width: 10vw;
  min-width: 10vw;
  height: 15vw;
  border-radius: 18px;
  object-fit: cover;
`;

const StarInformationContainer = styled.div`
  position: relative;
  width: 450px;
  min-width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
`;

const NameStar = styled.div`
  color: ${Blue};
  font-size: ${XXLarge};
`;

const InformationStar = styled.div`
  color: ${Black};
`;

const PicturesContainer = styled.div`
  width: auto;
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
    border: solid 5px ${Blue};
  }
`;

const Picture = styled(Image)`
  width: 5vw;
  min-width: 5vw;
  height: 7.5vw;
  object-fit: cover;
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
  background: ${(props) =>
    props.customColor || `linear-gradient(to right, ${Yellow}, ${LightBlue})`};
  text-decoration: none;
  color: ${Black};
  font-size: ${Regular};
  transition: height 0.3s ease-in-out;

  ${Container}:hover & {
    height: 30px;
    border: solid 1px ${Black};
  }
`;

function BestStarDetail({ data, active, customColor }) {
  const [show, setShow] = useState(false);
  const [picture, setPicture] = useState(null);

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
      {active && (
        <Container customColor={customColor}>
          <PositionStar>{data.position}</PositionStar>
          <div style={{ display: "flex", width: "100%" }}>
            <AvatarContainer>
              <AvatarStar src={data.avatar} />
              <ViewProfile
                to={`/upv/star/${data.idStar}`}
                customColor={customColor}
              >
                View
              </ViewProfile>
            </AvatarContainer>
            <StarInformationContainer>
              <NameStar>
                {data.name} {data.other ? `(${data.other})` : ""}
              </NameStar>
              <InformationStar>
                ● Born: {data.born} ({data.age} year olds)
                <br />● Height: {data.height}
                <br />● Breast: {data.breast}{" "}
                <StarCup cup={data.cup}>({data.cup})</StarCup>
                <br />● Waist: {data.waist}
                <br />● Hips: {data.hips}
              </InformationStar>
              <div style={{ height: 46 }} />
            </StarInformationContainer>
            <PicturesContainer>
              {data.album
                .filter((item, index) => index < 18)
                .map((item) => (
                  <PictureBorder key={item.picture}>
                    <Picture
                      src={item.picture}
                      onClick={() => handleModal(item.picture)}
                      alt={""}
                    />
                  </PictureBorder>
                ))}
            </PicturesContainer>
          </div>
        </Container>
      )}
      <StarPicture
        show={show}
        toggleModal={toggleModal}
        listData={data.album
          .filter((item, index) => index < 10)
          .map((item) => item.picture)}
        data={picture}
        setData={handleChangePicture}
      />
    </Fragment>
  );
}

const MemoBestStarDetail = memo(BestStarDetail);

export default MemoBestStarDetail;
