import React, { useState, useEffect, useCallback, Fragment } from "react";
import styled from "styled-components";
import Cookies from "js-cookie";
import { InfiniteLoader, List } from "react-virtualized";

import { priceCurrency } from "../../../helpers/render-price";
import {
  ALL_EARNING_STARS,
  TOTAL_EARNINGS,
} from "../../../services/upv/stars.service";
import StarEarning from "../../../components/Stars/StarEarning";

import { Grey, Blue, White } from "../../../themes/colors";
import { center, fadeIn } from "../../../themes/styled";
import { XLarge } from "../../../themes/font";

const FilterStarsContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 80px;
  padding: 20px 0px;
  border-bottom: solid 3px ${Blue};
  box-sizing: border-box;
`;

const Total = styled.div`
  align-self: center;
  color: ${White};
  font-size: ${XLarge};
  margin-right: 30px;
`;

const Value = styled.span`
  color: ${Blue};
`;

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
    background: linear-gradient(${Grey}, ${Blue});
    border-radius: 10px;
  }
`;

const StarItem = styled.div`
  ${center}
  width: 100%;
  animation: ${fadeIn} 1s linear;
`;

const data = [];

function isRowLoaded({ index }) {
  return !!data[index];
}

function TopEarnings() {
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
      resolve(ALL_EARNING_STARS.slice(startIndex, stopIndex));
    }).then((response) => response);
  }, []);

  return (
    <Fragment>
      <FilterStarsContainer>
        <Total>
          Total: <Value>{priceCurrency(TOTAL_EARNINGS)} ❂</Value>
        </Total>
      </FilterStarsContainer>
      <Container>
        <InfiniteLoader
          isRowLoaded={isRowLoaded}
          loadMoreRows={loadMoreRows}
          rowCount={ALL_EARNING_STARS.length}
        >
          {({ onRowsRendered, registerChild }) => (
            <List
              style={{ padding: "30px 20px" }}
              ref={registerChild}
              width={window.innerWidth}
              height={window.innerHeight - 180}
              rowCount={ALL_EARNING_STARS.length}
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
                  <StarItem>
                    <StarEarning data={ALL_EARNING_STARS[index]} />
                  </StarItem>
                </div>
              )}
            />
          )}
        </InfiniteLoader>
      </Container>
    </Fragment>
  );
}

export default TopEarnings;
