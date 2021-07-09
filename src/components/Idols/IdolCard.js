import React, { memo } from "react";
import { get } from "lodash";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

import { getIdolRank, checkBestIdol } from "../../services/common.service";
import IdolAvatar from "./IdolAvatar";
import IdolTag from "./IdolTag";

import {
  Yellow,
  Pink,
  LightBlue,
  Orange,
  Red,
  White,
  LightPurple,
  DarkPurple,
} from "../../themes/colors";
import { center } from "../../themes/styled";
import { Large, XLarge } from "../../themes/font";

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

const AvatarContainer = styled.div`
  position: relative;
  width: 16vw;
  height: 22vw;
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
  width: 16vw;
  height: 22vw;
  border-radius: 18px;
  object-fit: cover;
`;

const TagIdol = styled(IdolTag)`
  margin-top: 15px;
  font-size: ${Large};
  background: ${(props) =>
    props.queen
      ? `linear-gradient(to right, ${Yellow}, ${Red})`
      : props.runnerUp
      ? `linear-gradient(to right, ${LightBlue}, ${Pink})`
      : `linear-gradient(to right,  ${Orange}, ${Pink})`};
`;

function IdolCard({ data, click }) {
  const location = useLocation();

  return (
    <Container onClick={click}>
      <AvatarContainer>
        {checkBestIdol(get(data, "idIdol", "")) && (
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
        <AvatarIdol src={get(data, "avatar", "")} />
      </AvatarContainer>
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
