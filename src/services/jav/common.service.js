import { get, omit, random } from "lodash";

import Idols from "../../data/jav/idols";
import MainDvds from "../../data/jav/dvds/main";
import Videos from "../../data/jav/videos";

import { SIZE_IDOLS, ALL_IDOLS_DETAIL, BEST_IDOL_IDS } from "./idols.service";
import { SIZE_MAIN_DVDS } from "./dvds.service";

function findIdolById(id) {
  let detail = undefined;
  for (let i = 0; i < SIZE_IDOLS; i++) {
    if (Idols[i].idIdol === id) {
      detail = Idols[i];
    }
  }
  return detail;
}

function getIdolDetail(id) {
  const detail = findIdolById(id);
  return omit(detail, ["album"]);
}

function getIdolName(id) {
  const detail = findIdolById(id);
  return get(detail, "name", "");
}

function findIdolDetail(id) {
  let detail = undefined;
  for (let i = 0; i < ALL_IDOLS_DETAIL.length; i++) {
    if (ALL_IDOLS_DETAIL[i].idIdol === id) {
      detail = ALL_IDOLS_DETAIL[i];
    }
  }
  return detail;
}

function getIdolRank(id) {
  const detail = findIdolDetail(id);
  return get(detail, "rank", "");
}

function checkBestIdol(id) {
  const response = BEST_IDOL_IDS.includes(id);
  return response;
}

function checkUncensoredIdol(id) {
  let response = false;
  const { dvds } = getDvdsByIdol(id);
  dvds.every((item) => {
    if (item.type === "Uncensored") {
      response = true;
      return false;
    } else {
      return true;
    }
  });
  return response;
}

function getAllIdolsDetail() {
  const idols = Idols.map((item) => {
    const { dvds, size } = getDvdsByIdol(item.idIdol);
    return {
      ...item,
      dvds: dvds,
      points: size,
    };
  });
  const response = [...idols]
    .sort((a, b) => b.points - a.points)
    .map((item, index) => ({ ...item, rank: index + 1 }));
  return response;
}

function sortIdols(idols) {
  const response = [...idols].sort((a, b) => {
    let x = a.name.toUpperCase();
    let y = b.name.toUpperCase();
    if (x < y) return -1;
    else if (x > y) return 1;
    else return 0;
  });
  return response.reverse();
}

function getDvdsByIdol(id) {
  const dvds = MainDvds.filter((item) =>
    item.idols.find((idol) => idol.idIdol === id)
  );
  return {
    size: dvds.length,
    dvds: dvds,
  };
}

function getDvdsRandom() {
  const splitSize = Math.floor(SIZE_MAIN_DVDS / 10);
  function generateNewDvd(index) {
    let a = MainDvds.slice(index * splitSize, splitSize * (index + 1) - 1);
    let n = random(splitSize - 1);
    while (n > a.length - 1) {
      n = random(splitSize - 1);
    }
    return a[n];
  }

  function randomDvds() {
    return Array(10)
      .fill(0)
      .map((_item, index) => generateNewDvd(index));
  }

  return randomDvds();
}

function getVideosRandom() {
  const videos = MainDvds.filter((item) => checkVideo(item.code));
  const splitSize = Math.floor(videos.length / 10);

  function generateNewVideo(index) {
    let a = videos.slice(index * splitSize, splitSize * (index + 1) - 1);
    let n = random(splitSize - 1);
    while (n > a.length - 1) {
      n = random(splitSize - 1);
    }
    return a[n];
  }

  function randomVideos() {
    return Array(10)
      .fill(0)
      .map((_item, index) => generateNewVideo(index));
  }

  return randomVideos();
}

function getIdolsRandom() {
  const allIdolsDetail = getAllIdolsDetail();
  const splitSize = Math.floor(SIZE_IDOLS / 10);

  function generateNewIdol(index) {
    let a = allIdolsDetail.slice(
      index * splitSize,
      splitSize * (index + 1) - 1
    );
    let n = random(splitSize - 1);
    while (n > a.length - 1) {
      n = random(splitSize - 1);
    }
    return a[n];
  }

  function randomIdols() {
    return Array(10)
      .fill(0)
      .map((_item, index) => generateNewIdol(index));
  }

  return randomIdols();
}

function sortDvds(dvds) {
  const response = [...dvds].sort((a, b) => {
    let x = a.code.toUpperCase();
    let y = b.code.toUpperCase();
    if (x < y) return -1;
    else if (x > y) return 1;
    else return 0;
  });
  return response;
}

function checkVideo(code) {
  return !!Videos.find((item) => item.code === code);
}

export {
  findIdolDetail,
  getIdolDetail,
  getIdolName,
  getIdolRank,
  checkBestIdol,
  checkUncensoredIdol,
  getAllIdolsDetail,
  sortIdols,
  getDvdsByIdol,
  getDvdsRandom,
  getVideosRandom,
  getIdolsRandom,
  sortDvds,
  checkVideo,
};
