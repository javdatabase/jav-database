import {
  MonthSalary,
  StableSalary,
  NFTSalary,
  OneNightRatio,
  TokenRate,
} from "../../helpers/salary-values";

const SWEET_STAR_POINTS_BY_IDS = {
  ups001: 18,
  ups002: 55,
  ups003: 5,
  ups004: 6,
  ups005: 12,
  ups006: 7,
  ups007: 7,
  ups008: 22,
  ups009: 18,
  ups010: 5,
  ups011: 8,
  ups012: 13,
  ups013: 2,
  ups014: 5,
  ups015: 4,
};

function getStableEarningStar(id) {
  const STABLE_IDS = ["ups002", "ups004", "ups008"];
  const NFT_IDS = ["ups002"];
  return (
    (STABLE_IDS.includes(id) ? StableSalary : 0) +
    (NFT_IDS.includes(id) ? NFTSalary : 0)
  );
}

function getSalaryStar(id, points) {
  return (points * MonthSalary + getStableEarningStar(id)) / TokenRate;
}

function getPriceOneNight(earnings) {
  return Math.ceil(earnings / OneNightRatio);
}

export { SWEET_STAR_POINTS_BY_IDS, getSalaryStar, getPriceOneNight };
