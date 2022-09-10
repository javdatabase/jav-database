import {
  MonthSalary,
  StableSalary,
  OneNightRatio,
  TokenRate,
} from "../../helpers/salary-values";

const SWEET_STAR_POINTS_BY_IDS = {
  ups001: 18,
  ups002: 40,
  ups003: 5,
  ups004: 6,
  ups005: 12,
  ups006: 6,
  ups007: 6,
  ups008: 22,
  ups009: 16,
  ups010: 4,
  ups011: 5,
  ups012: 10,
  ups013: 2,
  ups014: 3,
  ups015: 4,
};

function getStableEarningStar(id) {
  const STABLE_IDS = ["ups002", "ups004", "ups008"];
  return STABLE_IDS.includes(id) ? StableSalary : 0;
}

function getSalaryStar(id, points) {
  return (points * MonthSalary + getStableEarningStar(id)) / TokenRate;
}

function getPriceOneNight(earnings) {
  return Math.ceil(earnings / OneNightRatio);
}

export { SWEET_STAR_POINTS_BY_IDS, getSalaryStar, getPriceOneNight };
