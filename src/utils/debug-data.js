import MainDvds from "../data/dvds/main";
import PreReleaseDvds from "../data/dvds/pre-release";
import AmateurDvds from "../data/dvds/amateur";
import Idols from "../data/idols";
import Stars from "../data/stars";

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
        IdolsStars[i].name === IdolsStars[j].name &&
        IdolsStars[i].name !== ""
      ) {
        count++;
        response.push(IdolsStars[i].name);
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
        IdolsStars[i].idIdol === IdolsStars[j].idIdol ||
        IdolsStars[i].idStar === IdolsStars[j].idStar
      ) {
        count++;
        response.push(IdolsStars[i].idIdol || IdolsStars[j].idStar);
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
