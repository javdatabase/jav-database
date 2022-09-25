import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import Cookies from "js-cookie";
import { InfiniteLoader, List } from "react-virtualized";

import { ALL_IDOLS_DETAIL } from "../../../services/jav/idols.service";
import IdolRanking from "../../../components/Idols/IdolRanking";

import { Orange, Pink } from "../../../themes/colors";
import { center, fadeIn } from "../../../themes/styled";

const Container = styled.div`
  ${center};
  position: relative;
  box-sizing: border-box;

  & > .ReactVirtualized__List::-webkit-scrollbar {
    width: 6px;
    background: transparent;
    border-radius: 12px;
  }

  & > .ReactVirtualized__List::-webkit-scrollbar-thumb {
    background: linear-gradient(${Orange}, ${Pink});
    border-radius: 10px;
  }
`;

const IdolItem = styled.div`
  ${center};
  width: 100%;
  animation: ${fadeIn} 1s linear;
`;

const data = [];

function isRowLoaded({ index }) {
  return !!data[index];
}

function Ranking() {
  const [mount, setMount] = useState(false);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    if (!mount) {
      const scrollCookies = Cookies.get("scroll");
      setScroll(Number(scrollCookies || 0));
      setMount(true);
    }
  }, [mount]);

  useEffect(() => {
    return () => {
      Cookies.set("scroll", String(scroll));
    };
  }, [scroll]);

  const handleScroll = useCallback(({ scrollTop }) => {
    setScroll(scrollTop || 0);
  }, []);

  const loadMoreRows = useCallback(({ startIndex, stopIndex }) => {
    return new Promise((resolve) => {
      resolve(ALL_IDOLS_DETAIL.slice(startIndex, stopIndex));
    }).then((response) => response);
  }, []);

  return (
    <Container>
      <InfiniteLoader
        isRowLoaded={isRowLoaded}
        loadMoreRows={loadMoreRows}
        rowCount={ALL_IDOLS_DETAIL.length}
      >
        {({ onRowsRendered, registerChild }) => (
          <List
            style={{ padding: "30px 20px" }}
            ref={registerChild}
            width={window.innerWidth}
            height={window.innerHeight - 100}
            rowCount={ALL_IDOLS_DETAIL.length}
            rowHeight={320}
            scrollTop={scroll}
            onScroll={handleScroll}
            onRowsRendered={onRowsRendered}
            rowRenderer={({ index, key, style }) => (
              <div
                key={key}
                style={{
                  ...style,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IdolItem>
                  <IdolRanking data={ALL_IDOLS_DETAIL[index]} />
                </IdolItem>
              </div>
            )}
          />
        )}
      </InfiniteLoader>
    </Container>
  );
}

export default Ranking;
