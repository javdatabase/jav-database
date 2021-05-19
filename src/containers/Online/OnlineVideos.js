import React, { useMemo, useCallback } from "react";
import { get } from "lodash";
import styled from "styled-components";
import { useHistory, useLocation } from "react-router-dom";

import { SIZE_VIDEOS, ALL_VIDEOS } from "../../services/videos.service";
import Pagination from "../../components/UI/Pagination/Pagination";
import IdolTag from "../../components/Idols/IdolTag";

import { White, Grey, Pink, Orange } from "../../themes/colors";
import { center, fadeIn } from "../../themes/styled";
import { XLarge } from "../../themes/font";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0px;
  box-sizing: border-box;
  animation: ${fadeIn} 0.8s ease-in-out;
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

const VideoContainer = styled.div`
  margin: 30px 0px;
`;

const Title = styled.div`
  color: ${White};
  font-size: ${XLarge};
`;

const IdolsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

const TagIdol = styled(IdolTag)`
  cursor: pointer;
  margin-top: 10px;
  background: ${Grey};
`;

const Content = styled.div``;

const PaginationContainer = styled.div`
  ${center}
  margin-bottom: 5px;
`;

function OnlineVideos() {
  const history = useHistory();
  const location = useLocation();

  const highlight = useMemo(() => {
    return get(location.state, "page", 1) - 1;
  }, [location.state]);

  const handleChangePage = useCallback(
    (page) => {
      const state = { ...location.state, page: page };
      history.push(location.pathname, state);
    },
    [history, location]
  );

  return (
    <Container>
      <VideoContainer>
        <Title>{get(ALL_VIDEOS[highlight], "title", "")}</Title>
        <IdolsContainer>
          {get(ALL_VIDEOS[highlight], "idols", []).map((item) => (
            <TagIdol key={item} name={item} />
          ))}
        </IdolsContainer>
        <Content
          dangerouslySetInnerHTML={{
            __html: get(ALL_VIDEOS[highlight], "content", ""),
          }}
        />
      </VideoContainer>
      <PaginationContainer>
        <Pagination
          count={SIZE_VIDEOS}
          page={get(location.state, "page", 1)}
          size={1}
          handleChangePage={handleChangePage}
        />
      </PaginationContainer>
    </Container>
  );
}

export default OnlineVideos;
