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
import SexyShadowImage from "../../assets/images/img_sexy_shadow/img_sexy_shadow.jpg";

import { White } from "../../themes/colors";
import { center } from "../../themes/styled";

const Dummy = styled.div`
  ${center}
  border: solid 1px ${White};
  border-radius: 18px;
  box-sizing: border-box;

  img {
    width: 50%;
  }
`;

function Avatar({ src, lazy, ...props }) {
  const [source, setSource] = useState(src || SexyShadowImage);
  const [dummy, setDummy] = useState(true);
  const [reload, setReload] = useState(false);
  const timer = useRef();

  useEffect(() => {
    setDummy(true);
    timer.current = setTimeout(() => {
      setSource(src || SexyShadowImage);
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
      setSource(SexyShadowImage);
    } else {
      timer.current && clearTimeout(timer.current);
      setSource("");
      setDummy(true);
      setReload(true);
      timer.current = setTimeout(() => {
        setSource(src || SexyShadowImage);
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

const MemoAvatar = memo(Avatar);

export default MemoAvatar;
