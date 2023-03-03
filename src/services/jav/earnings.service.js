import {
  MonthEarnings,
  StableEarnings,
  OneNightRatio,
  WeekEarnings,
  TokenRate,
} from "../../helpers/earning-values";

const STAR_IDOL_ID = "jai157";
const SWEET_NIGHT_IDS = [
  "jai001",
  "jai068",
  "jai068",
  "jai068",
  "jai157",
  "jai157",
  "jai221",
  "jai228",
];
const BEST_DVD_IDS = [
  "jai001",
  "jai002",
  "jai015",
  "jai016",
  "jai026",
  "jai034",
  "jai048",
  "jai068",
  "jai113",
  "jai139",
  "jai144",
  "jai157",
  "jai173",
  "jai179",
  "jai196",
  "jai213",
  "jai214",
  "jai216",
  "jai219",
  "jai221",
  "jai222",
  "jai225",
  "jai228",
];
const BEST_IDOL_IDS = [
  "jai001",
  "jai002",
  "jai015",
  "jai016",
  "jai026",
  "jai031",
  "jai034",
  "jai041",
  "jai048",
  "jai053",
  "jai068",
  "jai113",
  "jai139",
  "jai144",
  "jai145",
  "jai146",
  "jai157",
  "jai158",
  "jai172",
  "jai173",
  "jai176",
  "jai179",
  "jai184",
  "jai190",
  "jai196",
  "jai213",
  "jai214",
  "jai216",
  "jai219",
  "jai221",
  "jai222",
  "jai225",
  "jai228",
];
const TOP_POINT_GROWTH_IDS = [
  "jai001",
  "jai002",
  "jai016",
  "jai034",
  "jai048",
  "jai157",
  "jai179",
  "jai185",
  "jai190",
  "jai219",
  "jai228",
];
const TOP_IDOL_IDS = [
  "jai016",
  "jai187",
  "jai188",
  "jai199",
  "jai205",
  "jai213",
  "jai214",
  "jai219",
  "jai228",
];
const HAS_DVD_IDS = [
  "jai001",
  "jai002",
  "jai015",
  "jai016",
  "jai026",
  "jai031",
  "jai034",
  "jai041",
  "jai048",
  "jai053",
  "jai068",
  "jai113",
  "jai139",
  "jai144",
  "jai145",
  "jai146",
  "jai157",
  "jai158",
  "jai172",
  "jai173",
  "jai176",
  "jai179",
  "jai184",
  "jai185",
  "jai190",
  "jai196",
  "jai213",
  "jai214",
  "jai216",
  "jai219",
  "jai221",
  "jai222",
  "jai225",
  "jai228",
];
const NEWBIE_IDS = [];

function getStableEarningIdol(id) {
  const STABLE_IDS = [
    "jai002",
    "jai016",
    "jai038",
    "jai041",
    "jai048",
    "jai057",
    "jai062",
    "jai067",
    "jai068",
    "jai070",
    "jai078",
    "jai133",
    "jai148",
    "jai151",
    "jai157",
    "jai158",
    "jai170",
    "jai171",
    "jai179",
    "jai187",
    "jai190",
    "jai196",
    "jai199",
    "jai200",
    "jai201",
    "jai203",
    "jai205",
    "jai208",
    "jai212",
    "jai220",
    "jai221",
    "jai223",
    "jai224",
    "jai225",
    "jai226",
    "jai227",
    "jai228",
  ];
  return STABLE_IDS.includes(id) ? StableEarnings : 0;
}

function getEarningIdol(id, rank, points, styles, uncensored, best, video) {
  const rankEarnings = Math.ceil(
    MonthEarnings.ranking / (rank > 1 ? rank * 0.6 : rank)
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

  let styleEarning = MonthEarnings.status.active;
  if (styles.find((item) => item.tag === "Retired")) {
    styleEarning = MonthEarnings.status.retired;
  }
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
