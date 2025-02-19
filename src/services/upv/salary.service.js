import {
  MonthSalary,
  StableSalary,
  NFTSalary,
  OneNightRatio,
  TokenRate,
} from "../../helpers/salary-values";

const SWEET_STAR_POINTS_BY_IDS = {
  ups001: 35,
  ups002: 302,
  ups003: 12,
  ups004: 11,
  ups005: 15,
  ups006: 10,
  ups007: 10,
  ups008: 33,
  ups009: 21,
  ups010: 9,
  ups011: 11,
  ups012: 16,
  ups013: 5,
  ups014: 8,
  ups015: 7,
  ups016: 5,
  ups017: 9,
  ups018: 8,
  ups019: 21,
  ups020: 8,
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
  return (points * MonthSalary + getStableEarningStar(id) * 12) / TokenRate;
}

function getPriceOneNight(earnings) {
  return Math.ceil(earnings / OneNightRatio);
}

export { SWEET_STAR_POINTS_BY_IDS, getSalaryStar, getPriceOneNight };
