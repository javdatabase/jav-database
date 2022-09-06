import React, {
  Fragment,
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";
import { get } from "lodash";
import styled from "styled-components";
import Cookies from "js-cookie";
import LazyLoad from "react-lazyload";

import { ALL_EARNING_STARS } from "../../../services/upv/stars.service";
import StarEarning from "../../../components/Stars/StarEarning";

import { Grey, Blue } from "../../../themes/colors";
import { center, fadeIn } from "../../../themes/styled";

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
    background: linear-gradient(${Grey}, ${Blue});
    border-radius: 10px;
  }
`;

const TopEarningsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  box-sizing: border-box;
`;

const StarItem = styled.div`
  ${center}
  width: 100%;
  animation: ${fadeIn} 1s linear;
`;

function TopEarnings() {
  const [mount, setMount] = useState(false);
  const [scroll, setScroll] = useState(0);
  const containerRef = useRef();

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

  return (
    <Fragment>
      <Container ref={containerRef} onScroll={handleScroll}>
        <TopEarningsContainer>
          {ALL_EARNING_STARS.map((item) => (
            <LazyLoad key={item.idStar} height={50} once={true} overflow={true}>
              <StarItem>
                <StarEarning data={item} />
              </StarItem>
            </LazyLoad>
          ))}
        </TopEarningsContainer>
      </Container>
    </Fragment>
  );
}

export default TopEarnings;
