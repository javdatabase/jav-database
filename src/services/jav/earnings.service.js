import {
  MonthEarnings,
  StableEarnings,
  OneNightRatio,
  WeekEarnings,
  TokenRate,
  ActiveEarnings,
} from "../../helpers/earning-values";

const STAR_IDOL_ID = "";
const SWEET_NIGHT_IDS = ["jai002", "jai016", "jai157", "jai170"];
const BEST_DVD_IDS = [
  "jai001",
  "jai002",
  "jai016",
  "jai034",
  "jai041",
  "jai076",
  "jai133",
  "jai151",
  "jai157",
  "jai158",
  "jai170",
  "jai188",
  "jai196",
  "jai205",
  "jai207",
  "jai213",
  "jai217",
  "jai226",
  "jai228",
  "jai230",
  "jai231",
  "jai232",
  "jai236",
  "jai238",
  "jai240",
  "jai241",
];
const BEST_IDOL_IDS = [
  "jai001",
  "jai002",
  "jai016",
  "jai034",
  "jai041",
  "jai076",
  "jai133",
  "jai151",
  "jai157",
  "jai158",
  "jai170",
  "jai188",
  "jai196",
  "jai205",
  "jai207",
  "jai213",
  "jai217",
  "jai226",
  "jai227",
  "jai228",
  "jai230",
  "jai231",
  "jai232",
  "jai236",
  "jai238",
  "jai240",
  "jai241",
];
const TOP_POINT_GROWTH_IDS = [
  "jai001",
  "jai002",
  "jai016",
  "jai158",
  "jai166",
  "jai196",
  "jai204",
  "jai205",
  "jai227",
  "jai230",
  "jai231",
];
const TOP_IDOL_IDS = ["jai021", "jai048", "jai196", "jai237"];
const HAS_DVD_IDS = [
  "jai001",
  "jai002",
  "jai016",
  "jai034",
  "jai041",
  "jai076",
  "jai133",
  "jai139",
  "jai140",
  "jai144",
  "jai151",
  "jai157",
  "jai158",
  "jai166",
  "jai170",
  "jai185",
  "jai188",
  "jai196",
  "jai204",
  "jai205",
  "jai207",
  "jai208",
  "jai213",
  "jai216",
  "jai217",
  "jai226",
  "jai227",
  "jai228",
  "jai230",
  "jai231",
  "jai232",
  "jai233",
  "jai236",
  "jai238",
  "jai240",
  "jai241",
];
const NEWBIE_IDS = [];

function getStableEarningIdol(id) {
  const STABLE_IDS = [];
  return STABLE_IDS.includes(id) ? StableEarnings : 0;
}

function getEarningIdol(id, rank, points, styles, uncensored, best, video) {
  const rankEarnings = Math.ceil(
    MonthEarnings.ranking / (rank > 1 ? rank * 0.6 : rank),
  );

  let pointEarnings = MonthEarnings.censoredDvds * points;
  if (points >= 1000) {
    pointEarnings = pointEarnings + MonthEarnings.point1000;
  } else if (points < 1000 && points >= 500) {
    pointEarnings = pointEarnings + MonthEarnings.point500;
  } else if (points < 500 && points >= 200) {
    pointEarnings = pointEarnings + MonthEarnings.point200;
  } else if (points < 200 && points >= 100) {
    pointEarnings = pointEarnings + MonthEarnings.point100;
  } else if (points < 100 && points >= 50) {
    pointEarnings = pointEarnings + MonthEarnings.point50;
  } else if (points < 50 && points >= 20) {
    pointEarnings = pointEarnings + MonthEarnings.point20;
  } else if (points < 20 && points >= 10) {
    pointEarnings = pointEarnings + MonthEarnings.point10;
  } else if (points < 10 && points >= 5) {
    pointEarnings = pointEarnings + MonthEarnings.point5;
  } else {
    pointEarnings = pointEarnings + MonthEarnings.point0;
  }

  let styleEarning = 0;
  if (styles.find((item) => item.tag === "Pretty")) {
    styleEarning = styleEarning + MonthEarnings.veryPretty;
  }
  if (styles.find((item) => item.tag === "6 Stars JAV")) {
    styleEarning = styleEarning + MonthEarnings.sixStar;
  }
  if (styles.find((item) => item.tag === "Killer Tits")) {
    styleEarning = styleEarning + MonthEarnings.killerTits;
  }
  if (styles.find((item) => item.tag === "Beautiful Breasts")) {
    styleEarning = styleEarning + MonthEarnings.beautifulBreasts;
  }
  if (styles.find((item) => item.tag === "NFT")) {
    styleEarning = styleEarning + MonthEarnings.nft;
  }
  if (styles.find((item) => item.tag === "1000")) {
    styleEarning = styleEarning + MonthEarnings[1000];
  }

  if (styles.find((item) => item.tag === "Retired")) {
    styleEarning = styleEarning / 2 - getStableEarningIdol(id);
  } else {
    styleEarning = styleEarning + ActiveEarnings;
  }

  const uncensoredEarnings = MonthEarnings.uncensoredDvds * uncensored;

  let bestEarnings = 0;

  if (best) {
    bestEarnings = MonthEarnings.best;
  }

  const videoEarnings = MonthEarnings.video * video;

  return (
    (rankEarnings +
      pointEarnings +
      styleEarning +
      uncensoredEarnings +
      bestEarnings +
      videoEarnings +
      getStableEarningIdol(id)) /
    TokenRate
  );
}

function getPriceOneNight(earnings) {
  return Math.ceil(earnings / OneNightRatio);
}

function getBonusEarnings(id) {
  let bonus = 0;

  if (STAR_IDOL_ID === id) {
    bonus = bonus + WeekEarnings.starIdol;
  }
  if (SWEET_NIGHT_IDS.includes(id)) {
    bonus =
      bonus +
      WeekEarnings.sweetNight *
        SWEET_NIGHT_IDS.reduce((acc, val) => (val === id ? acc + 1 : acc), 0);
  }
  if (BEST_DVD_IDS.includes(id)) {
    bonus = bonus + WeekEarnings.bestDvd;
  }
  if (BEST_IDOL_IDS.includes(id)) {
    bonus = bonus + WeekEarnings.bestIdol;
  }
  if (TOP_POINT_GROWTH_IDS.includes(id)) {
    bonus = bonus + WeekEarnings.topGrowth;
  }
  if (TOP_IDOL_IDS.includes(id)) {
    bonus = bonus + WeekEarnings.topIdol;
  }
  if (HAS_DVD_IDS.includes(id)) {
    bonus = bonus + WeekEarnings.hasDvd;
  }
  if (NEWBIE_IDS.includes(id)) {
    bonus = bonus + WeekEarnings.newbie;
  }

  return bonus / TokenRate;
}

export { getEarningIdol, getPriceOneNight, getBonusEarnings };
