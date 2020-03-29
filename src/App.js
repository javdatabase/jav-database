import React, { useEffect } from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import {
  RESULT_CHECK_ALREADY_EXIST_DVD,
  RESULT_CHECK_ALREADY_EXIST_POSTER,
  RESULT_CHECK_POSTER_FALSY,
  RESULT_CHECK_ALREADY_EXIST_IDOLS,
  RESULT_CHECK_ALREADY_EXIST_ID_IDOLS
} from "./utils/debug-data";
import Layout from "./layout/Layout";

const CONFIG_BASE = "/jav-database";

const history = createBrowserHistory({ basename: CONFIG_BASE });

function App() {
  useEffect(() => {
    console.log("Dvds Already Exists:", RESULT_CHECK_ALREADY_EXIST_DVD);
    console.log("Poster Already Exists:", RESULT_CHECK_ALREADY_EXIST_POSTER);
    console.log("Poster Error:", RESULT_CHECK_POSTER_FALSY);
    console.log("Idols Already Exists:", RESULT_CHECK_ALREADY_EXIST_IDOLS);
    console.log(
      "ID Idols Already Exists:",
      RESULT_CHECK_ALREADY_EXIST_ID_IDOLS
    );
  }, []);

  return (
    <Router history={history}>
      <Layout />
    </Router>
  );
}

export default App;
