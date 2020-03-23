import React, { useState, useEffect, useCallback } from "react";

import SexyShadowImage from "../../assets/images/img_sexy_shadow/img_sexy_shadow.jpg";

function IdolAvatar({ src, ...props }) {
  const [source, setSource] = useState(src || SexyShadowImage);

  useEffect(() => {
    setSource(src || SexyShadowImage);
  }, [src]);

  const handleError = useCallback(() => {
    setSource(SexyShadowImage);
  }, []);

  return <img src={source} alt={"error"} onError={handleError} {...props} />;
}

export default IdolAvatar;
