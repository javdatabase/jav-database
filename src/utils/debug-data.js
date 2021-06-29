import MainDvds from "../data/dvds/main";
import Idols from "../data/idols";

function checkAlreadyExistDvd() {
  let count = 0;
  let response = [];
  for (let i = 1; i < MainDvds.length; i++) {
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

function checkAlreadyExistPoster() {
  let count = 0;
  let response = [];
  for (let i = 1; i < MainDvds.length; i++) {
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

function checkPosterIsFalsy() {
  const data = MainDvds.filter(
    (item) => item.poster === "" && item.code !== ""
  );
  const response = data.map((item) => item.code);
  if (data.length > 0) {
    return response;
  } else {
    return "* none *";
  }
}

function checkAlreadyExistIdols() {
  let count = 0;
  let response = [];
  for (let i = 1; i < Idols.length; i++) {
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

function checkAlreadyExistIdIdols() {
  let count = 0;
  let response = [];
  for (let i = 1; i < Idols.length; i++) {
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

export {
  checkAlreadyExistDvd,
  checkAlreadyExistPoster,
  checkPosterIsFalsy,
  checkAlreadyExistIdols,
  checkAlreadyExistIdIdols,
};
