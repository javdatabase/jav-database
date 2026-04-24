import { toUpper, trim } from "lodash";

import Idols from "../../data/jav/idols";
import { BEST_IDOL_IDS } from "../../data/jav/best-idol-ids";
import { createLazy } from "../../utils/lazy";

import {
  getAllIdolsDetailImpl,
  sortIdols,
  sortDvds,
  checkUncensoredIdol,
  checkVideo,
} from "./common.service";
import { getEarningIdol, getBonusEarnings } from "./earnings.service";

const SIZE_IDOLS = Idols.length;

// --- Lazy computed values (computed on first access, cached forever) ---

const getAllIdolsDetail = createLazy(() => getAllIdolsDetailImpl());

const getBestIdols = createLazy(() =>
  getAllIdolsDetail().filter((item) => BEST_IDOL_IDS.includes(item.idIdol))
);

const getAllEarningIdols = createLazy(() =>
  getAllIdolsDetail()
    .map((item) => ({
      ...item,
      earnings: getEarningIdol(
        item.idIdol,
        item.rank,
        item.points,
        item.styles,
        item.dvds.filter((d) => d.type === "Uncensored").length,
        BEST_IDOL_IDS.includes(item.idIdol),
        item.dvds.filter((d) => checkVideo(d.code)).length
      ),
      bonus: getBonusEarnings(item.idIdol),
    }))
    .sort((a, b) => b.earnings + b.bonus * 4 - (a.earnings + a.bonus * 4))
    .map((item, index) => ({ ...item, position: index + 1 }))
);

const getAllBonusIdols = createLazy(() =>
  getAllEarningIdols()
    .filter((item) => !!item.bonus)
    .sort((a, b) => b.bonus - a.bonus)
    .map((item, index) => ({ ...item, position: index + 1 }))
);

const getAllOriginalIdols = createLazy(() =>
  getAllIdolsDetail()
    .map((item) => ({
      ...item,
      earnings: getEarningIdol(
        item.idIdol,
        item.rank,
        item.points,
        item.styles,
        item.dvds.filter((d) => d.type === "Uncensored").length,
        BEST_IDOL_IDS.includes(item.idIdol),
        item.dvds.filter((d) => checkVideo(d.code)).length
      ),
      bonus: getBonusEarnings(item.idIdol),
    }))
    .sort((a, b) => b.earnings - a.earnings)
    .map((item, index) => ({ ...item, position: index + 1 }))
);

const getTotalOriginalEarnings = createLazy(() =>
  getAllEarningIdols().reduce((acc, item) => acc + item.earnings, 0)
);

const getTotalBonusEarnings = createLazy(() =>
  getAllEarningIdols().reduce((acc, item) => acc + (item.bonus || 0) * 4, 0)
);

const getTotalIdolEarnings = createLazy(() =>
  getAllEarningIdols().reduce(
    (acc, item) => acc + item.earnings + (item.bonus || 0) * 4,
    0
  )
);

// --- Service functions (use raw data directly — no lazy needed) ---

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
      return result.length >= styles.length;
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

const IDOL_PROFILE = (id, sort = true) => {
  const idolsDetail = getAllIdolsDetail();
  let idol = idolsDetail.find((item) => item.idIdol === id);
  if (idol) {
    idol = {
      ...idol,
      dvds: sort ? sortDvds(idol.dvds) : [...idol.dvds].reverse(),
    };
  }
  return idol;
};

export {
  SIZE_IDOLS,
  BEST_IDOL_IDS,
  ALL_IDOLS_BY_PAGE,
  IDOL_PROFILE,
  getAllIdolsDetail,
  getBestIdols,
  getAllEarningIdols,
  getAllBonusIdols,
  getAllOriginalIdols,
  getTotalOriginalEarnings,
  getTotalBonusEarnings,
  getTotalIdolEarnings,
};
