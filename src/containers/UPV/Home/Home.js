import React, { useMemo, useCallback } from "react";
import { get } from "lodash";
import styled from "styled-components";
import { Link, useHistory, useLocation } from "react-router-dom";

import { SIZE_VIDEOS, ALL_VIDEOS } from "../../../services/upv/videos.service";
import Pagination from "../../../components/UI/Pagination/Pagination";
import StarTag from "../../../components/Stars/StarTag";
import RollingIcon from "../../../assets/images/ic_rolling/ic_rolling.svg";

import {
  White,
  Black,
  Grey,
  Orange,
  Blue,
  DarkBlue,
  LightBlue,
} from "../../../themes/colors";
import { center, fadeIn } from "../../../themes/styled";
import { XLarge, Large, Regular } from "../../../themes/font";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0px;
  box-sizing: border-box;
  animation: ${fadeIn} 0.8s ease-in-out;
`;

const ButtonLeft = styled.div`
  ${center}
  padding: 5px;
  border-radius: 6px;
  background: linear-gradient(to right, ${Blue}, ${Grey});
  position: absolute;
  top: 20px;
  left: 45px;
  z-index: 2;
  cursor: pointer;
  font-size: ${Large};
  color: ${Black};

  &:hover {
    background: linear-gradient(to right, ${Blue}, ${Grey});
    color: ${Black};
  }
`;

const ButtonRight = styled(Link)`
  ${center}
  padding: 5px;
  border-radius: 6px;
  background: transparent;
  position: absolute;
  top: 20px;
  right: 45px;
  z-index: 2;
  cursor: pointer;
  font-size: ${Large};
  text-decoration: none;
  color: ${White};

  &:hover {
    background: linear-gradient(to right, ${Blue}, ${Grey});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const VideoContainer = styled.div`
  max-width: 930px;
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

const StarsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

const TagStar = styled(StarTag)`
  cursor: pointer;
  margin-top: 10px;
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
      <ButtonLeft>NEW ADDED</ButtonLeft>
      <ButtonRight to={"/upv/lucky-box"}>LUCKY BOX</ButtonRight>
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
        <StarsContainer>
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
        </StarsContainer>
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
