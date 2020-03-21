import React, { useState, useEffect, useCallback } from "react";

import SexyShadowBackground from "../../assets/images/bg_sexy_shadow/bg_sexy_shadow.jpg";

function IdolAvatar({ src, ...props }) {
  const [source, setSource] = useState(src);

  useEffect(() => {
    setSource(src);
  }, [src]);

  const handleError = useCallback(() => {
    setSource(SexyShadowBackground);
  }, []);

  return <img src={source} alt={"error"} onError={handleError} {...props} />;
}

export default IdolAvatar;
