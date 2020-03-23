import React, { useState, useEffect, useCallback } from "react";

import SexyShadowBackground from "../../assets/images/bg_sexy_shadow/bg_sexy_shadow.jpg";

function DvdPoster({ src, ...props }) {
  const [source, setSource] = useState(src || SexyShadowBackground);

  useEffect(() => {
    setSource(src || SexyShadowBackground);
  }, [src]);

  const handleError = useCallback(() => {
    setSource(SexyShadowBackground);
  }, []);

  return <img src={source} alt={"error"} onError={handleError} {...props} />;
}

export default DvdPoster;
