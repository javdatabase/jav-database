import { Salary, OneNightRatio } from "../../helpers/salary-values";

const SWEET_STAR_POINTS_BY_IDS = {
  ups001: 4,
  ups002: 13,
  ups003: 2,
  ups004: 4,
  ups005: 2,
  ups006: 6,
  ups007: 5,
  ups008: 9,
  ups009: 4,
  ups010: 3,
  ups011: 3,
  ups012: 8,
  ups013: 2,
  ups014: 3,
};

function getSalaryStar(points) {
  return points * Salary;
}

function getPriceOneNight(earnings) {
  return Math.ceil(earnings / OneNightRatio);
}

export { SWEET_STAR_POINTS_BY_IDS, getSalaryStar, getPriceOneNight };
