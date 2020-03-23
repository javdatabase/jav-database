import { get, omit } from "lodash";

import Idols from "../data/idols";
import MainDvds from "../data/dvds/main";

import { ALL_IDOLS_DETAIL } from "./idols.service";

function getIdolDetail(id) {
  const detail = Idols.find(idol => idol.idIdol === id);
  return omit(detail, ["album"]);
}

function getIdolRank(id) {
  const detail = ALL_IDOLS_DETAIL().find(idol => idol.idIdol === id);
  return get(detail, "rank", "");
}

function sortIdols(idols) {
  const response = idols.sort((a, b) => {
    let x = a.name.toUpperCase();
    let y = b.name.toUpperCase();
    if (x < y) return -1;
    else if (x > y) return 1;
    else return 0;
  });
  return response.reverse();
}

function getDvdsByIdol(id) {
  const dvds = MainDvds.filter(item =>
    item.idols.find(idol => idol.idIdol === id)
  );
  return {
    size: dvds.length,
    dvds: dvds
  };
}

function sortDvds(dvds) {
  const response = dvds.sort((a, b) => {
    let x = a.code.toUpperCase();
    let y = b.code.toUpperCase();
    if (x < y) return -1;
    else if (x > y) return 1;
    else return 0;
  });
  return response;
}

export { getIdolDetail, getIdolRank, sortIdols, getDvdsByIdol, sortDvds };
