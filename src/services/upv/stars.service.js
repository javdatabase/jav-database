import { toUpper, trim } from "lodash";

import Stars from "../../data/upv/stars";
import { sortStars, getPicturesRandom } from "./common.service";
import { getSalaryStar, SWEET_STAR_POINTS_BY_IDS } from "./salary.service";

const SIZE_STARS = Stars.length;

const ALL_STARS_BY_PAGE = (name, cup, height, breast, hips, page, pageSize) => {
  let temp = sortStars(Stars);
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
  if (height) {
    temp = temp.filter(
      (item) => Number(item.height.replace(" cm", "")) >= height
    );
  }
  if (breast) {
    temp = temp.filter(
      (item) => Number(item.breast.replace(" in", "")) >= breast
    );
  }
  if (hips) {
    temp = temp.filter((item) => Number(item.hips.replace(" in", "")) >= hips);
  }
  const size = temp.length;
  const response = temp.filter((item, index) => {
    return (
      index < size - (page - 1) * pageSize && index > size - 1 - page * pageSize
    );
  });
  return { data: [...response].reverse(), size: size };
};

const STAR_PROFILE = (id) => {
  let star = undefined;
  for (let i = 0; i < SIZE_STARS; i++) {
    if (Stars[i].idStar === id) {
      star = Stars[i];
      break;
    }
  }
  const points = SWEET_STAR_POINTS_BY_IDS[id] || 0;
  return { ...star, points: points };
};

const ALL_EARNING_STARS = Stars.map((item) => ({
  ...item,
  earnings: getSalaryStar(
    item.idStar,
    SWEET_STAR_POINTS_BY_IDS[item.idStar] || 0
  ),
  bonus: 0,
}))
  .sort((a, b) => b.earnings - a.earnings)
  .map((item, index) => ({
    ...item,
    album: getPicturesRandom(item.album),
    position: index + 1,
  }));

const TOTAL_EARNINGS = ALL_EARNING_STARS.reduce(
  (acc, item) => acc + item.earnings + (item.bonus || 0) * 4,
  0
);

export {
  SIZE_STARS,
  ALL_STARS_BY_PAGE,
  STAR_PROFILE,
  ALL_EARNING_STARS,
  TOTAL_EARNINGS,
};
