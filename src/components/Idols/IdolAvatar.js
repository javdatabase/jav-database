import React, { Fragment, memo, useState, useEffect, useCallback } from "react";
import styled from "styled-components";

import RollingIcon from "../../assets/images/ic_rolling/ic_rolling.svg";
import SexyShadowImage from "../../assets/images/img_sexy_shadow/img_sexy_shadow.jpg";

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

function IdolAvatar({ src, lazy, ...props }) {
  const [source, setSource] = useState(src || SexyShadowImage);
  const [dummy, setDummy] = useState(true);

  useEffect(() => {
    setSource(src || SexyShadowImage);
  }, [src]);

  const handleLoad = useCallback(() => {
    setDummy(false);
  }, []);

  const handleError = useCallback(() => {
    setSource(SexyShadowImage);
  }, []);

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

const MemoIdolAvatar = memo(IdolAvatar);

export default MemoIdolAvatar;
