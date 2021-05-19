import { get, omit, random } from "lodash";

import Idols from "../data/idols";
import MainDvds from "../data/dvds/main";

import { ALL_IDOLS_DETAIL, BEST_IDOL_IDS } from "./idols.service";
import { SIZE_MAIN_DVDS } from "./dvds.service";

function getIdolDetail(id) {
  const detail = Idols.find((idol) => idol.idIdol === id);
  return omit(detail, ["album"]);
}

function getIdolName(id) {
  const detail = Idols.find((idol) => idol.idIdol === id);
  return get(detail, "name", "");
}

function getIdolRank(id) {
  const detail = ALL_IDOLS_DETAIL.find((idol) => idol.idIdol === id);
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
  function randomDvds() {
    let dvds = Array(15).fill(0);
    dvds.forEach((item, index) => {
      const temp = MainDvds[random(SIZE_MAIN_DVDS - 1)];
      dvds[index] = temp;
    });
    return dvds;
  }

  // TODO: Comment this line
  // return [];

  return randomDvds().map((dvd) => ({
    ...dvd,
    idols: dvd.idols.map((idol) => getIdolDetail(idol.idIdol)),
  }));
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

export {
  getIdolDetail,
  getIdolName,
  getIdolRank,
  checkBestIdol,
  checkUncensoredIdol,
  getAllIdolsDetail,
  sortIdols,
  getDvdsByIdol,
  getDvdsRandom,
  sortDvds,
};
