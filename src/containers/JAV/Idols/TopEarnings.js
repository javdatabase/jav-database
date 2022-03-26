import React, {
  Fragment,
  useState,
  useRef,
  useMemo,
  useEffect,
  useCallback,
} from "react";
import { get } from "lodash";
import styled from "styled-components";
import { useHistory, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import LazyLoad from "react-lazyload";

import { priceCurrency } from "../../../helpers/render-price";
import {
  ALL_EARNING_IDOLS,
  ALL_BONUS_IDOLS,
  ALL_ORIGINAL_IDOLS,
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
  position: relative;
  width: 100%;
  height: calc(100vh - 183px);
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

const TopEarningsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  box-sizing: border-box;
`;

const IdolItem = styled.div`
  ${center}
  width: 100%;
  animation: ${fadeIn} 1s linear;
`;

function TopEarnings() {
  const history = useHistory();
  const location = useLocation();
  const [mount, setMount] = useState(false);
  const [scroll, setScroll] = useState(0);
  const containerRef = useRef();

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
    if (containerRef && containerRef.current && !mount) {
      const scrollCookies = Cookies.get("scroll");
      if (scrollCookies) {
        containerRef.current.scrollTo({ top: scrollCookies });
      }
      setMount(true);
    }
  }, [mount]);

  useEffect(() => {
    return () => {
      Cookies.set("scroll", scroll);
    };
  }, [scroll]);

  const handleScroll = useCallback(() => {
    if (containerRef && containerRef.current) {
      setScroll(get(containerRef.current, "scrollTop", 0));
    }
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
          Total: <Value>${priceCurrency(TOTAL_EARNINGS)}</Value>
        </Total>
      </FilterIdolsContainer>
      <Container ref={containerRef} onScroll={handleScroll}>
        <TopEarningsContainer>
          {idols.map((item) => (
            <LazyLoad
              key={item.idIdol}
              height={200}
              once={true}
              overflow={true}
            >
              <IdolItem>
                <IdolEarning data={item} />
              </IdolItem>
            </LazyLoad>
          ))}
        </TopEarningsContainer>
      </Container>
    </Fragment>
  );
}

export default TopEarnings;
