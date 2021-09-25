import React, { memo } from "react";
import styled from "styled-components";

import Image from "../Image/Image";

import { Grey, Blue } from "../../themes/colors";
import { center } from "../../themes/styled";
import { Large } from "../../themes/font";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  cursor: pointer;
  width: 14vw;
  height: calc(19.25vw + 40px);
`;

const AvatarContainer = styled.div`
  ${center}
  width: calc(14vw + 6px);
  height: calc(19.25vw + 6px);
  background: ${(props) =>
    props.active
      ? props.customColor
        ? props.customColor
        : `linear-gradient(to right,  ${Grey}, ${Blue})`
      : "transparent"};
  border-radius: 18px;
`;

const AvatarStar = styled(Image)`
  width: 14vw;
  height: 19.25vw;
  border-radius: 18px;
  object-fit: cover;
`;

const NameStar = styled.div`
  margin-top: 10px;
  font-size: ${Large};
  background: ${(props) =>
    props.customColor
      ? props.customColor
      : `linear-gradient(to right,  ${Grey}, ${Blue})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

function BestStarCard({ data, active, customColor }) {
  return (
    <Container>
      <AvatarContainer active={active} customColor={customColor}>
        <AvatarStar src={data.avatar} />
      </AvatarContainer>
      <NameStar customColor={customColor}>{data.name}</NameStar>
    </Container>
  );
}

const MemoBestStarCard = memo(BestStarCard);

export default MemoBestStarCard;
