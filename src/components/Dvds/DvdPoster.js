import React, {
  Fragment,
  memo,
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";
import styled from "styled-components";

import RollingIcon from "../../assets/images/ic_rolling/ic_rolling.svg";
import SexyShadowBackground from "../../assets/images/bg_sexy_shadow/bg_sexy_shadow.jpg";

import { White } from "../../themes/colors";
import { center } from "../../themes/styled";

const Dummy = styled.div`
  ${center}
  border: solid 1px ${White};
  box-sizing: border-box;

  img {
    width: 50%;
  }
`;

function DvdPoster({ src, ...props }) {
  const [source, setSource] = useState(src || SexyShadowBackground);
  const [dummy, setDummy] = useState(true);
  const [reload, setReload] = useState(false);
  const timer = useRef();

  useEffect(() => {
    setDummy(true);
    timer.current = setTimeout(() => {
      setSource(src || SexyShadowBackground);
    }, 500);

    return () => {
      timer.current && clearTimeout(timer.current);
    };
  }, [src]);

  const handleLoad = useCallback(() => {
    setDummy(false);
  }, []);

  const handleError = useCallback(() => {
    if (reload) {
      setSource(SexyShadowBackground);
    } else {
      timer.current && clearTimeout(timer.current);
      setSource("");
      setDummy(true);
      setReload(true);
      timer.current = setTimeout(() => {
        setSource(src || SexyShadowBackground);
      }, 500);
    }
  }, [reload, src]);

  return (
    <Fragment>
      {dummy && (
        <Dummy className={props.className} style={props.style}>
          <img src={RollingIcon} alt={"error"} onClick={props.onClick} />
        </Dummy>
      )}
      <img
        src={source}
        alt={"error"}
        onLoad={handleLoad}
        onError={handleError}
        style={dummy ? { display: "none", ...props.style } : { ...props.style }}
        {...props}
      />
    </Fragment>
  );
}

const MemoDvdPoster = memo(DvdPoster);

export default MemoDvdPoster;
