import React, { useMemo, useCallback } from "react";
import { get } from "lodash";
import styled from "styled-components";
import { Link, useHistory, useLocation } from "react-router-dom";

import { SIZE_VIDEOS, ALL_VIDEOS } from "../../services/videos.service";
import Pagination from "../../components/UI/Pagination/Pagination";
import IdolTag from "../../components/Idols/IdolTag";
import RollingIcon from "../../assets/images/ic_rolling/ic_rolling.svg";

import { White, Black, Grey, Pink, Orange } from "../../themes/colors";
import { center, fadeIn } from "../../themes/styled";
import { XLarge, Regular } from "../../themes/font";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0px;
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
  margin-bottom: 30px;
`;

const Title = styled.div`
  color: ${White};
  font-size: ${XLarge};
  margin-bottom: 5px;
`;

const Type = styled.span`
  color: ${Orange};
`;

const Source = styled.div`
  font-size: ${Regular};
  color: ${White};
`;

const Studio = styled.a`
  font-size: ${Regular};
  color: ${Pink};
  text-decoration: underline;

  &:hover {
    color: ${Orange};
  }
`;

const IdolsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

const TagStar = styled(IdolTag)`
  cursor: pointer;
  margin-top: 10px;
  color: ${Black};
  background: ${Grey};
`;

const VideoContent = styled.div`
  width: 943px;
  height: 530px;
  border: solid 1px ${White};
  background: url(${RollingIcon}) center center no-repeat;
`;

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
        <Title>
          {get(ALL_VIDEOS[highlight], "title", "")}{" "}
          <Type>[{get(ALL_VIDEOS[highlight], "type", "")}]</Type>
        </Title>
        <Source>
          in{" "}
          <Studio
            href={get(ALL_VIDEOS[highlight], "link", "")}
            target={"_blank"}
            rel={"noreferrer noopener"}
          >
            {get(ALL_VIDEOS[highlight], "source", "")}
          </Studio>
        </Source>
        <IdolsContainer>
          {get(ALL_VIDEOS[highlight], "stars", []).map((item) => (
            <Link
              key={item.idStar}
              to={`/star/${item.idStar}`}
              style={{ textDecoration: "none", color: Black }}
            >
              <TagStar name={item.name} />
            </Link>
          ))}
        </IdolsContainer>
        <VideoContent
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
