import MainDvds from "../data/jav/dvds/main";
import PreReleaseDvds from "../data/jav/dvds/pre-release";
import AmateurDvds from "../data/jav/dvds/amateur";
import Videos from "../data/jav/videos";
import Idols from "../data/jav/idols";
import Stars from "../data/upv/stars";

const Dvds = MainDvds.concat(PreReleaseDvds, AmateurDvds);

const IdolsStars = Idols.concat(Stars);

function checkAlreadyExistDvd() {
  let count = 0;
  let response = [];
  for (let i = 1; i < Dvds.length; i++) {
    for (let j = 0; j < i; j++) {
      if (Dvds[i].code === Dvds[j].code && Dvds[i].code !== "") {
        count++;
        response.push(Dvds[i].code);
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
  for (let i = 1; i < Dvds.length; i++) {
    for (let j = 0; j < i; j++) {
      if (Dvds[i].poster === Dvds[j].poster && Dvds[i].poster !== "") {
        count++;
        response.push(Dvds[i].code);
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
  const data = Dvds.filter((item) => item.poster === "" && item.code !== "");
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
  for (let i = 1; i < IdolsStars.length; i++) {
    for (let j = 0; j < i; j++) {
      if (
        IdolsStars[i].idIdol &&
        IdolsStars[i].idIdol === IdolsStars[j].idIdol
      ) {
        count++;
        response.push(IdolsStars[i].idIdol);
      }
      if (
        IdolsStars[i].idStar &&
        IdolsStars[i].idStar === IdolsStars[j].idStar
      ) {
        count++;
        response.push(IdolsStars[j].idStar);
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
  for (let i = 1; i < IdolsStars.length; i++) {
    for (let j = 0; j < i; j++) {
      if (
        IdolsStars[i].idIdol &&
        IdolsStars[i].idIdol === IdolsStars[j].idIdol
      ) {
        count++;
        response.push(IdolsStars[i].idIdol);
      }
      if (
        IdolsStars[i].idStar &&
        IdolsStars[i].idStar === IdolsStars[j].idStar
      ) {
        count++;
        response.push(IdolsStars[j].idStar);
      }
    }
  }
  if (count !== 0) {
    return response;
  } else {
    return "* none *";
  }
}

function checkAlreadyExistVideos() {
  let count = 0;
  let response = [];
  for (let i = 1; i < Videos.length; i++) {
    for (let j = 0; j < i; j++) {
      if (Videos[i].xid && Videos[i].xid === Videos[j].xid) {
        count++;
        response.push(Videos[i].code);
      }
      if (Videos[i].code && Videos[i].code === Videos[j].code) {
        count++;
        response.push(Videos[j].code);
      }
    }
  }
  if (count !== 0) {
    return response;
  } else {
    return "* none *";
  }
}

function checkVideoIsFalsy() {
  let count = 0;
  let response = [];
  for (let i = 1; i < Videos.length; i++) {
    if (!Dvds.find((item) => item.code === Videos[i].code)) {
      count++;
      response.push(Videos[i].code);
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
  checkAlreadyExistVideos,
  checkVideoIsFalsy,
};
