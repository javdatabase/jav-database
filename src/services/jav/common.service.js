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
  function generateNewDvd(array, temp) {
    if (!!array.find((item) => item.idDvd === temp.idDvd)) {
      return generateNewDvd(array, MainDvds[random(SIZE_MAIN_DVDS - 1)]);
    }
    return temp;
  }

  function randomDvds() {
    let dvds = Array(10).fill(0);
    for (let i = 0; i < dvds.length; i++) {
      dvds[i] = generateNewDvd(dvds, MainDvds[random(SIZE_MAIN_DVDS - 1)]);
    }
    return dvds;
  }

  return randomDvds();
}

function getIdolsRandom() {
  const allIdolsDetail = getAllIdolsDetail();

  function generateNewIdol(array, temp) {
    if (!!array.find((item) => item.idIdol === temp.idIdol)) {
      return generateNewIdol(array, allIdolsDetail[random(SIZE_IDOLS - 1)]);
    }
    return temp;
  }

  function randomIdols() {
    let idols = Array(10).fill(0);
    for (let i = 0; i < idols.length; i++) {
      idols[i] = generateNewIdol(idols, allIdolsDetail[random(SIZE_IDOLS - 1)]);
    }
    return idols;
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

function checkLeakedVideo(code) {
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
  getIdolsRandom,
  sortDvds,
  checkLeakedVideo,
};
