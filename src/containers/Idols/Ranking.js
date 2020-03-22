import React, { useMemo } from "react";
import styled from "styled-components";
import LazyLoad from "react-lazyload";

import { ALL_IDOLS_DETAIL } from "../../services/idols.service";
import IdolRanking from "../../components/Idols/IdolRanking";

import { Orange, Pink } from "../../themes/colors";
import { center, fadeIn } from "../../themes/styled";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 100px);
  overflow: auto;
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

const RankingContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  box-sizing: border-box;
`;

const IdolItem = styled.div`
  ${center}
  width: 100%;
  animation: ${fadeIn} 1s linear;
`;

function Ranking() {
  const idols = useMemo(() => ALL_IDOLS_DETAIL(), []);

  return (
    <Container>
      <RankingContainer>
        {idols.map(item => (
          <LazyLoad key={item.idIdol} height={200} once={true} overflow={true}>
            <IdolItem>
              <IdolRanking data={item} />
            </IdolItem>
          </LazyLoad>
        ))}
      </RankingContainer>
    </Container>
  );
}

export default Ranking;
