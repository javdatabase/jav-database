import React, {
  Fragment,
  useState,
  useMemo,
  useEffect,
  useCallback,
} from "react";
import { get } from "lodash";
import styled from "styled-components";
import { useHistory, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import { InfiniteLoader, List } from "react-virtualized";

import { priceCurrency } from "../../../helpers/render-price";
import {
  ALL_EARNING_IDOLS,
  ALL_BONUS_IDOLS,
  ALL_ORIGINAL_IDOLS,
  TOTAL_ORIGINAL_EARNINGS,
  TOTAL_BONUS_EARNINGS,
  TOTAL_EARNINGS,
} from "../../../services/jav/idols.service";
import Checkbox from "../../../components/UI/Checkbox/Checkbox";
import IdolEarning from "../../../components/Idols/IdolEarning";

import {
  White,
  Orange,
  Pink,
  LightPurple,
  DarkPurple,
  LightBlue,
  DarkBlue,
} from "../../../themes/colors";
import { center, fadeIn } from "../../../themes/styled";
import { XLarge } from "../../../themes/font";

const FilterIdolsContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  padding: 20px 0px;
  border-bottom: solid 3px ${Pink};
  box-sizing: border-box;
`;

const CheckboxGroup = styled.div`
  display: flex;
  margin-left: 30px;
`;

const Total = styled.div`
  align-self: center;
  color: ${White};
  font-size: ${XLarge};
  margin-right: 30px;
`;

const Value = styled.span`
  color: ${Pink};
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

function TopEarnings() {
  const history = useHistory();
  const location = useLocation();
  const [mount, setMount] = useState(false);
  const [scroll, setScroll] = useState(0);

  const idols = useMemo(() => {
    if (get(location.state, "bonus", false)) {
      return ALL_BONUS_IDOLS;
    } else if (get(location.state, "original", false)) {
      return ALL_ORIGINAL_IDOLS;
    } else {
      return ALL_EARNING_IDOLS;
    }
  }, [location]);

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

  const handleChangeBonus = useCallback(() => {
    history.push(location.pathname, {
      original: false,
      bonus: !get(location.state, "bonus", false),
    });
  }, [history, location]);

  const handleChangeOriginal = useCallback(() => {
    history.push(location.pathname, {
      original: !get(location.state, "original", false),
      bonus: false,
    });
  }, [history, location]);

  const loadMoreRows = useCallback(
    ({ startIndex, stopIndex }) => {
      return new Promise((resolve) => {
        resolve(idols.slice(startIndex, stopIndex));
      }).then((response) => response);
    },
    [idols]
  );

  return (
    <Fragment>
      <FilterIdolsContainer>
        <div style={{ display: "flex", alignItems: "center" }}>
          <CheckboxGroup>
            <Checkbox
              label={"Bonus"}
              value={get(location.state, "bonus", false)}
              onChange={handleChangeBonus}
              customColor={`linear-gradient(to right, ${LightPurple}, ${DarkPurple})`}
            />
          </CheckboxGroup>
          <CheckboxGroup>
            <Checkbox
              label={"Original"}
              value={get(location.state, "original", false)}
              onChange={handleChangeOriginal}
              customColor={`linear-gradient(to right, ${LightBlue}, ${DarkBlue})`}
            />
          </CheckboxGroup>
        </div>
        <Total>
          Total:{" "}
          <Value>
            {priceCurrency(
              get(location.state, "original", false)
                ? TOTAL_ORIGINAL_EARNINGS
                : get(location.state, "bonus", false)
                ? TOTAL_BONUS_EARNINGS
                : TOTAL_EARNINGS
            )}{" "}
            ❂
          </Value>
        </Total>
      </FilterIdolsContainer>
      <Container>
        <InfiniteLoader
          isRowLoaded={isRowLoaded}
          loadMoreRows={loadMoreRows}
          rowCount={idols.length}
        >
          {({ onRowsRendered, registerChild }) => (
            <List
              style={{ padding: "30px 20px" }}
              ref={registerChild}
              width={window.innerWidth}
              height={window.innerHeight - 180}
              rowCount={idols.length}
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
                    <IdolEarning data={idols[index]} />
                  </IdolItem>
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
