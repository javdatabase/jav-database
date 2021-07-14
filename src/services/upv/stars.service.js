import Stars from "../../data/upv/stars";
import { SWEET_STAR_POINTS_BY_IDS } from "./salary.service";

const SIZE_STARS = Stars.length;

const STAR_PROFILE = (id) => {
  let star = undefined;
  for (let i = 0; i < SIZE_STARS; i++) {
    if (Stars[i].idStar === id) {
      star = Stars[i];
    }
  }
  const points = SWEET_STAR_POINTS_BY_IDS[id] || 0;
  return { ...star, points: points };
};

export { SIZE_STARS, STAR_PROFILE };
