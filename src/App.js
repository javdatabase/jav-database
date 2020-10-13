import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import {
  RESULT_CHECK_ALREADY_EXIST_DVD,
  RESULT_CHECK_ALREADY_EXIST_POSTER,
  RESULT_CHECK_POSTER_FALSY,
  RESULT_CHECK_ALREADY_EXIST_IDOLS,
  RESULT_CHECK_ALREADY_EXIST_ID_IDOLS,
} from "./utils/debug-data";
import Layout from "./layout/Layout";

import "./services/bootstrap.service";

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
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
