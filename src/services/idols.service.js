import Idols from "../data/idols";

import { getAllIdolsDetail, sortIdols, sortDvds } from "./common.service";

const SIZE_IDOLS = Idols.length;

const ALL_IDOLS_DETAIL = getAllIdolsDetail();

const ALL_IDOLS_BY_PAGE = (page, pageSize) => {
  const idols = sortIdols(Idols);
  const response = idols.filter((item, index) => {
    return (
      index < SIZE_IDOLS - (page - 1) * pageSize &&
      index > SIZE_IDOLS - 1 - page * pageSize
    );
  });
  return response.splice(0).reverse();
};

const IDOL_PROFILE = id => {
  let idol = ALL_IDOLS_DETAIL.find(item => item.idIdol === id);
  if (idol) {
    idol = {
      ...idol,
      dvds: sortDvds(idol.dvds)
    };
  }
  return idol;
};

export { SIZE_IDOLS, ALL_IDOLS_BY_PAGE, ALL_IDOLS_DETAIL, IDOL_PROFILE };
