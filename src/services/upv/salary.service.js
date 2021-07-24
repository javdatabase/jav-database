import { Salary, OneNightRatio } from "../../helpers/salary-values";

const SWEET_STAR_POINTS_BY_IDS = {
  ups001: 4,
  ups002: 5,
  ups003: 2,
  ups004: 4,
  ups005: 2,
  ups006: 5,
  ups007: 5,
  ups008: 5,
  ups009: 4,
  ups010: 3,
  ups011: 3,
  ups012: 6,
};

function getSalaryStar(points) {
  return points * Salary;
}

function getPriceOneNight(earnings) {
  return Math.ceil(earnings / OneNightRatio);
}

export { SWEET_STAR_POINTS_BY_IDS, getSalaryStar, getPriceOneNight };
