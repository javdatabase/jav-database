import React, { memo } from "react";
import styled from "styled-components";

import IdolAvatar from "./IdolAvatar";
import IdolTag from "./IdolTag";
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
`;

function DvdCard({ data, click }) {
  return (
    <Container onClick={click}>
      <AvatarIdol src={data.avatar} />
      <TagIdol name={data.name} />
    </Container>
  );
}

const MemoDvdCard = memo(DvdCard);

export default MemoDvdCard;
