import React, { memo } from "react";
import { get } from "lodash";
import styled from "styled-components";

import Image from "../Image/Image";
import StarTag from "./StarTag";

import { center } from "../../themes/styled";

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

const AvatarStar = styled(Image)`
  width: 16vw;
  height: 22vw;
  border-radius: 18px;
  object-fit: cover;
`;

const TagStar = styled(StarTag)`
  margin-top: 15px;
`;

function StarCard({ data, click }) {
  return (
    <Container onClick={click}>
      <AvatarContainer>
        <AvatarStar src={get(data, "avatar", "")} />
      </AvatarContainer>
      <TagStar name={get(data, "name", "")} />
    </Container>
  );
}

const MemoStarCard = memo(StarCard);

export default MemoStarCard;
