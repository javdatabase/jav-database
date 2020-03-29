import { SIZE_MAIN_DVDS } from "../services/dvds.service";
import { SIZE_IDOLS } from "../services/idols.service";

import MainDvds from "../data/dvds/main";
import Idols from "../data/idols";

function CheckAlreadyExistDvd() {
  let count = 0;
  let response = [];
  for (let i = 1; i < SIZE_MAIN_DVDS; i++) {
    for (let j = 0; j < i; j++) {
      if (MainDvds[i].code === MainDvds[j].code && MainDvds[i].code !== "") {
        count++;
        response.push(MainDvds[i].code);
      }
    }
  }
  if (count !== 0) {
    return response;
  } else {
    return "* none *";
  }
}

const RESULT_CHECK_ALREADY_EXIST_DVD = CheckAlreadyExistDvd();

function CheckAlreadyExistPoster() {
  let count = 0;
  let response = [];
  for (let i = 1; i < SIZE_MAIN_DVDS; i++) {
    for (let j = 0; j < i; j++) {
      if (
        MainDvds[i].poster === MainDvds[j].poster &&
        MainDvds[i].poster !== ""
      ) {
        count++;
        response.push(MainDvds[i].code);
      }
    }
  }
  if (count !== 0) {
    return response;
  } else {
    return "* none *";
  }
}

const RESULT_CHECK_ALREADY_EXIST_POSTER = CheckAlreadyExistPoster();

function CheckPosterIsFalsy() {
  const data = MainDvds.filter(item => item.poster === "" && item.code !== "");
  const response = data.map(item => item.code);
  if (data.length > 0) {
    return response;
  } else {
    return "* none *";
  }
}

const RESULT_CHECK_POSTER_FALSY = CheckPosterIsFalsy();

function CheckAlreadyExistIdols() {
  let count = 0;
  let response = [];
  for (let i = 1; i < SIZE_IDOLS; i++) {
    for (let j = 0; j < i; j++) {
      if (Idols[i].name === Idols[j].name && Idols[i].name !== "") {
        count++;
        response.push(Idols[i].name);
      }
    }
  }
  if (count !== 0) {
    return response;
  } else {
    return "* none *";
  }
}

const RESULT_CHECK_ALREADY_EXIST_IDOLS = CheckAlreadyExistIdols();

function CheckAlreadyExistIdIdols() {
  let count = 0;
  let response = [];
  for (let i = 1; i < SIZE_IDOLS; i++) {
    for (let j = 0; j < i; j++) {
      if (Idols[i].idIdol === Idols[j].idIdol) {
        count++;
        response.push(Idols[i].idIdol);
      }
    }
  }
  if (count !== 0) {
    return response;
  } else {
    return "* none *";
  }
}

const RESULT_CHECK_ALREADY_EXIST_ID_IDOLS = CheckAlreadyExistIdIdols();

export {
  RESULT_CHECK_ALREADY_EXIST_DVD,
  RESULT_CHECK_ALREADY_EXIST_POSTER,
  RESULT_CHECK_POSTER_FALSY,
  RESULT_CHECK_ALREADY_EXIST_IDOLS,
  RESULT_CHECK_ALREADY_EXIST_ID_IDOLS
};
