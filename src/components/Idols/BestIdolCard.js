import React, { memo } from "react";
import { get } from "lodash";
import styled from "styled-components";

import { getIdolRank } from "../../services/jav/common.service";
import Image from "../Image/Image";

import { Pink, Orange, LightBlue, Yellow, Red } from "../../themes/colors";
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
        : props.queen
        ? `linear-gradient(to right, ${Yellow}, ${Red})`
        : props.runnerUp
        ? `linear-gradient(to right, ${LightBlue}, ${Pink})`
        : `linear-gradient(to right,  ${Orange}, ${Pink})`
      : "transparent"};
  border-radius: 18px;
`;

const AvatarIdol = styled(Image)`
  width: 14vw;
  height: 19.25vw;
  border-radius: 18px;
  object-fit: cover;
`;

const NameIdol = styled.div`
  margin-top: 10px;
  font-size: ${Large};
  background: ${(props) =>
    props.customColor
      ? props.customColor
      : props.queen
      ? `linear-gradient(to right, ${Yellow}, ${Red})`
      : props.runnerUp
      ? `linear-gradient(to right, ${LightBlue}, ${Pink})`
      : `linear-gradient(to right,  ${Orange}, ${Pink})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

function BestIdolCard({ data, active, customColor }) {
  return (
    <Container>
      <AvatarContainer
        active={active}
        queen={getIdolRank(get(data, "idIdol", "")) === 1}
        runnerUp={getIdolRank(get(data, "idIdol", "")) === 2}
        customColor={customColor}
      >
        <AvatarIdol src={data.avatar} />
      </AvatarContainer>
      <NameIdol
        queen={getIdolRank(get(data, "idIdol", "")) === 1}
        runnerUp={getIdolRank(get(data, "idIdol", "")) === 2}
        customColor={customColor}
      >
        {data.name}
      </NameIdol>
    </Container>
  );
}

const MemoBestIdolCard = memo(BestIdolCard);

export default MemoBestIdolCard;
