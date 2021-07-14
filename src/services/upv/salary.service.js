import { Salary, OneNightRatio } from "../../helpers/salary-values";

const SWEET_STAR_POINTS_BY_IDS = {
  ups001: 3,
  ups002: 3,
  ups003: 2,
  ups004: 2,
  ups005: 2,
  ups006: 2,
  ups007: 4,
  ups008: 4,
  ups009: 3,
  ups010: 2,
  ups011: 1,
};

function getSalaryStar(points) {
  return points * Salary;
}

function getPriceOneNight(earnings) {
  return Math.ceil(earnings / OneNightRatio);
}

export { SWEET_STAR_POINTS_BY_IDS, getSalaryStar, getPriceOneNight };
