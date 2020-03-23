import React, { memo } from "react";
import { get } from "lodash";
import styled from "styled-components";

import { getIdolRank } from "../../services/common.service";
import IdolAvatar from "./IdolAvatar";
import IdolTag from "./IdolTag";

import { Yellow, Pink, LightBlue, Orange, Red } from "../../themes/colors";
import { center } from "../../themes/styled";
import { Large } from "../../themes/font";

const Container = styled.div`
  ${center}
  flex-direction: column;
  cursor: pointer;
  width: 16vw;
  height: calc(22vw + 50px);
  transform: translateY(0px);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-40px);
  }
`;

const AvatarIdol = styled(IdolAvatar)`
  width: 16vw;
  height: 22vw;
  border-radius: 18px;
  object-fit: cover;
`;

const TagIdol = styled(IdolTag)`
  margin-top: 15px;
  font-size: ${Large};
  background: ${props =>
    props.queen
      ? `linear-gradient(to right, ${Yellow}, ${Red})`
      : props.runnerUp
      ? `linear-gradient(to right, ${LightBlue}, ${Pink})`
      : `linear-gradient(to right,  ${Orange}, ${Pink})`};
`;

function IdolCard({ data, click }) {
  return (
    <Container onClick={click}>
      <AvatarIdol src={get(data, "avatar", "")} />
      <TagIdol
        queen={getIdolRank(get(data, "idIdol", "")) === 1}
        runnerUp={getIdolRank(get(data, "idIdol", "")) === 2}
        name={get(data, "name", "")}
      />
    </Container>
  );
}

const MemoIdolCard = memo(IdolCard);

export default MemoIdolCard;
