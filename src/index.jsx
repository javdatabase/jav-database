import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { prewarm } from "./services/prewarm";

import "react-virtualized/styles.css";
import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

if (typeof requestIdleCallback !== "undefined") {
  requestIdleCallback(prewarm);
} else {
  setTimeout(prewarm, 1);
}

reportWebVitals(console.log);
