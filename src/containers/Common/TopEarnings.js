import React, {
  useState,
  useMemo,
  useEffect,
  useCallback,
  Fragment,
} from "react";
import styled from "styled-components";
import Cookies from "js-cookie";
import { InfiniteLoader, List } from "react-virtualized";

import { priceCurrency } from "../../helpers/render-price";
import {
  ALL_EARNING_STARS,
  TOTAL_EARNINGS as STAR_TOTAL_EARNINGS,
} from "../../services/upv/stars.service";
import {
  ALL_EARNING_IDOLS,
  TOTAL_EARNINGS as IDOL_TOTAL_EARNINGS,
} from "../../services/jav/idols.service";
import StarEarning from "../../components/Stars/StarEarning";
import IdolEarning from "../../components/Idols/IdolEarning";

import { Grey, Blue, White } from "../../themes/colors";
import { center, fadeIn } from "../../themes/styled";
import { XLarge } from "../../themes/font";

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

const Item = styled.div`
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

  const data = useMemo(() => {
    return []
      .concat(ALL_EARNING_STARS, ALL_EARNING_IDOLS)
      .sort((a, b) => b.earnings + b.bonus - (a.earnings + a.bonus))
      .map((item, index) => ({ ...item, position: index + 1 }));
  }, []);

  const total = useMemo(() => {
    return STAR_TOTAL_EARNINGS + IDOL_TOTAL_EARNINGS;
  }, []);

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

  const loadMoreRows = useCallback(
    ({ startIndex, stopIndex }) => {
      return new Promise((resolve) => {
        resolve(data.slice(startIndex, stopIndex));
      }).then((response) => response);
    },
    [data]
  );

  return (
    <Fragment>
      <FilterStarsContainer>
        <Total>
          Total: <Value>{priceCurrency(total)} ❂</Value>
        </Total>
      </FilterStarsContainer>
      <Container>
        <InfiniteLoader
          isRowLoaded={isRowLoaded}
          loadMoreRows={loadMoreRows}
          rowCount={data.length}
        >
          {({ onRowsRendered, registerChild }) => (
            <List
              style={{ padding: "30px 20px" }}
              ref={registerChild}
              width={window.innerWidth}
              height={window.innerHeight - 180}
              rowCount={data.length}
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
                  <Item>
                    {data[index].idStar ? (
                      <StarEarning data={data[index]} overall={true} />
                    ) : (
                      <IdolEarning data={data[index]} overall={true} />
                    )}
                  </Item>
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
