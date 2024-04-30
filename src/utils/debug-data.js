import MainDvds from "../data/jav/dvds/main";
import PreReleaseDvds from "../data/jav/dvds/pre-release";
import AmateurDvds from "../data/jav/dvds/amateur";
import Videos from "../data/jav/videos";
import Idols from "../data/jav/idols";
import Stars from "../data/upv/stars";

const Dvds = MainDvds.concat(PreReleaseDvds, AmateurDvds);

const IdolsStars = Idols.concat(Stars);

function debugDvds() {
  const response = {
    alreadyExistDvd: [],
    alreadyExistPoster: [],
    posterIsFalsy: [],
  };
  for (let i = 1; i < Dvds.length; i++) {
    if (Dvds[i].poster === "" && Dvds[i].code !== "") {
      response.posterIsFalsy.push(Dvds[i].code);
    }
    for (let j = 0; j < i; j++) {
      if (Dvds[i].code === Dvds[j].code && Dvds[i].code !== "") {
        response.alreadyExistDvd.push(Dvds[i].code);
      }
      if (Dvds[i].poster === Dvds[j].poster && Dvds[i].poster !== "") {
        response.alreadyExistPoster.push(Dvds[i].code);
      }
    }
  }
  if (response.alreadyExistDvd.length === 0) {
    response.alreadyExistDvd = "* none *";
  }
  if (response.alreadyExistPoster.length === 0) {
    response.alreadyExistPoster = "* none *";
  }
  if (response.posterIsFalsy.length === 0) {
    response.posterIsFalsy = "* none *";
  }
  return response;
}

function debugIdols() {
  let response = [];
  for (let i = 1; i < IdolsStars.length; i++) {
    for (let j = 0; j < i; j++) {
      if (
        IdolsStars[i].idIdol &&
        IdolsStars[i].idIdol === IdolsStars[j].idIdol
      ) {
        response.push(IdolsStars[i].idIdol);
      }
      if (
        IdolsStars[i].idStar &&
        IdolsStars[i].idStar === IdolsStars[j].idStar
      ) {
        response.push(IdolsStars[j].idStar);
      }
    }
  }
  if (response.length !== 0) {
    return response;
  } else {
    return "* none *";
  }
}

function debugVideos() {
  const response = {
    alreadyExistVideo: [],
    videoIsFalsy: [],
  };
  for (let i = 1; i < Videos.length; i++) {
    if (!Dvds.find((item) => item.code === Videos[i].code)) {
      response.videoIsFalsy.push(Videos[i].code);
    }
    for (let j = 0; j < i; j++) {
      if (Videos[i].xid && Videos[i].xid === Videos[j].xid) {
        response.alreadyExistVideo.push(Videos[i].code);
      }
      if (Videos[i].code && Videos[i].code === Videos[j].code) {
        response.alreadyExistVideo.push(Videos[j].code);
      }
    }
  }
  if (response.alreadyExistVideo.length === 0) {
    response.alreadyExistVideo = "* none *";
  }
  if (response.videoIsFalsy.length === 0) {
    response.videoIsFalsy = "* none *";
  }
  return response;
}

export { debugDvds, debugIdols, debugVideos };
