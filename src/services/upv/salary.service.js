import { Salary, OneNightRatio } from "../../helpers/salary-values";

const SWEET_STAR_POINTS_BY_IDS = {
  ups001: 8,
  ups002: 13,
  ups003: 5,
  ups004: 6,
  ups005: 2,
  ups006: 6,
  ups007: 6,
  ups008: 9,
  ups009: 7,
  ups010: 3,
  ups011: 5,
  ups012: 10,
  ups013: 2,
  ups014: 3,
  ups015: 4,
};

function getSalaryStar(points) {
  return points * Salary;
}

function getPriceOneNight(earnings) {
  return Math.ceil(earnings / OneNightRatio);
}

export { SWEET_STAR_POINTS_BY_IDS, getSalaryStar, getPriceOneNight };
