import React, { useMemo, useCallback } from "react";
import { get } from "lodash";
import styled from "styled-components";
import { Link, useHistory, useLocation } from "react-router-dom";

import { SIZE_VIDEOS, ALL_VIDEOS } from "../../../services/upv/videos.service";
import Pagination from "../../../components/UI/Pagination/Pagination";
import IdolTag from "../../../components/Idols/IdolTag";
import RollingIcon from "../../../assets/images/ic_rolling/ic_rolling.svg";

import {
  White,
  Black,
  Grey,
  Blue,
  Orange,
  DarkBlue,
  LightBlue,
} from "../../../themes/colors";
import { center, fadeIn } from "../../../themes/styled";
import { XLarge, Regular } from "../../../themes/font";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0px;
  box-sizing: border-box;
  animation: ${fadeIn} 0.8s ease-in-out;
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
  color: ${DarkBlue};
  text-decoration: underline;

  &:hover {
    color: ${LightBlue};
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
  background: linear-gradient(to right, ${Grey}, ${Blue});
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

function Home() {
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
          {get(ALL_VIDEOS[highlight], "stars", []).map((item) =>
            item.idStar === "ups000" ? (
              <TagStar
                key={item.idStar}
                name={item.name}
                style={{ cursor: "auto", background: Grey }}
              />
            ) : (
              <Link
                key={item.idStar}
                to={`/upv/star/${item.idStar}`}
                style={{ textDecoration: "none", color: Black }}
              >
                <TagStar name={item.name} />
              </Link>
            )
          )}
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

export default Home;