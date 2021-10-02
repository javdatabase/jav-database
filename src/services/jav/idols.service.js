import { toUpper, trim } from "lodash";

import Idols from "../../data/jav/idols";

import {
  findIdolDetail,
  getAllIdolsDetail,
  sortIdols,
  sortDvds,
  checkUncensoredIdol,
  checkVideo,
} from "./common.service";
import { getEarningIdol, getBonusEarnings } from "./earnings.service";

const SIZE_IDOLS = Idols.length;

const ALL_IDOLS_DETAIL = getAllIdolsDetail();

const BEST_IDOL_IDS = [
  "jai001",
  "jai002",
  "jai003",
  "jai004",
  "jai006",
  "jai008",
  "jai009",
  "jai015",
  "jai016",
  "jai020",
  "jai021",
  "jai024",
  "jai028",
  "jai029",
  "jai032",
  "jai036",
  "jai037",
  "jai038",
  "jai040",
  "jai041",
  "jai042",
  "jai045",
  "jai049",
  "jai051",
  "jai052",
  "jai054",
  "jai057",
  "jai060",
  "jai061",
  "jai062",
  "jai063",
  "jai066",
  "jai068",
  "jai069",
  "jai070",
  "jai071",
  "jai074",
  "jai076",
  "jai077",
  "jai078",
  "jai081",
  "jai084",
  "jai085",
  "jai087",
  "jai091",
  "jai098",
  "jai102",
  "jai103",
  "jai106",
  "jai108",
  "jai109",
  "jai110",
  "jai111",
  "jai116",
  "jai117",
  "jai118",
  "jai120",
  "jai121",
  "jai124",
  "jai127",
  "jai132",
  "jai133",
  "jai141",
  "jai151",
  "jai155",
  "jai156",
  "jai166",
  "jai168",
  "jai169",
  "jai170",
  "jai175",
  "jai189",
  "jai191",
  "jai196",
];

const BEST_IDOLS = ALL_IDOLS_DETAIL.filter((item) =>
  BEST_IDOL_IDS.includes(item.idIdol)
);

const ALL_IDOLS_BY_PAGE = (
  name,
  cup,
  styles,
  best,
  uncensored,
  working,
  height,
  breast,
  hips,
  normal,
  censored,
  retired,
  page,
  pageSize
) => {
  let temp = sortIdols(Idols);
  if (name) {
    temp = temp.filter((item) =>
      toUpper(item.name + " " + item.other).includes(toUpper(trim(name)))
    );
  }
  if (cup && cup.length > 0) {
    temp = temp.filter(
      (item) => !!cup.find((filter) => filter.value === item.cup)
    );
  }
  if (styles && styles.length > 0) {
    temp = temp.filter((item) => {
      const result = item.styles.filter(
        (style) => !!styles.find((filter) => filter.value === style.tag)
      );
      if (result.length < styles.length) {
        return false;
      } else {
        return true;
      }
    });
  }
  if (best === true && normal === false) {
    temp = temp.filter((item) => BEST_IDOL_IDS.includes(item.idIdol));
  }
  if (best === false && normal === true) {
    temp = temp.filter((item) => !BEST_IDOL_IDS.includes(item.idIdol));
  }
  if (uncensored === true && censored === false) {
    temp = temp.filter((item) => checkUncensoredIdol(item.idIdol));
  }
  if (uncensored === false && censored === true) {
    temp = temp.filter((item) => !checkUncensoredIdol(item.idIdol));
  }
  if (working === true && retired === false) {
    temp = temp.filter(
      (item) => !item.styles.find((style) => style.tag === "Retired")
    );
  }
  if (working === false && retired === true) {
    temp = temp.filter(
      (item) => !!item.styles.find((style) => style.tag === "Retired")
    );
  }
  if (height) {
    temp = temp.filter(
      (item) => Number(item.height.replace(" cm", "")) >= height
    );
  }
  if (breast) {
    temp = temp.filter(
      (item) => Number(item.breast.replace(" cm", "")) >= breast
    );
  }
  if (hips) {
    temp = temp.filter((item) => Number(item.hips.replace(" cm", "")) >= hips);
  }
  const size = temp.length;
  const response = temp.filter((item, index) => {
    return (
      index < size - (page - 1) * pageSize && index > size - 1 - page * pageSize
    );
  });
  return { data: [...response].reverse(), size: size };
};

const IDOL_PROFILE = (id) => {
  let idol = findIdolDetail(id);
  if (idol) {
    idol = {
      ...idol,
      dvds: sortDvds(idol.dvds),
    };
  }
  return idol;
};

const ALL_EARNING_IDOLS = ALL_IDOLS_DETAIL.map((item) => ({
  ...item,
  earnings: getEarningIdol(
    item.rank,
    item.points,
    item.styles,
    item.dvds.filter((item) => item.type === "Uncensored").length,
    BEST_IDOL_IDS.includes(item.idIdol),
    item.dvds.filter((item) => checkVideo(item.code)).length
  ),
  bonus: getBonusEarnings(item.idIdol),
}))
  .sort((a, b) => b.earnings + b.bonus - (a.earnings + a.bonus))
  .map((item, index) => ({ ...item, position: index + 1 }));

const ALL_BONUS_IDOLS = ALL_EARNING_IDOLS.filter((item) => !!item.bonus)
  .sort((a, b) => b.bonus - a.bonus)
  .map((item, index) => ({ ...item, position: index + 1 }));

export {
  SIZE_IDOLS,
  ALL_IDOLS_BY_PAGE,
  BEST_IDOL_IDS,
  BEST_IDOLS,
  ALL_IDOLS_DETAIL,
  IDOL_PROFILE,
  ALL_EARNING_IDOLS,
  ALL_BONUS_IDOLS,
};
