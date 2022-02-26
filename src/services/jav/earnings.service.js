import {
  MonthEarnings,
  OneNightRatio,
  WeekEarnings,
} from "../../helpers/earning-values";

const STAR_IDOL_ID = "jai002";
const SWEET_NIGHT_IDS = [
  "jai002",
  "jai002",
  "jai002",
  "jai002",
  "jai002",
  "jai002",
  "jai002",
  "jai002",
  "jai007",
  "jai007",
  "jai007",
  "jai007",
  "jai007",
  "jai011",
  "jai011",
  "jai015",
  "jai015",
  "jai015",
  "jai015",
  "jai015",
  "jai015",
  "jai016",
  "jai016",
  "jai032",
  "jai032",
  "jai032",
  "jai032",
  "jai032",
  "jai032",
  "jai041",
  "jai041",
  "jai048",
  "jai057",
  "jai062",
  "jai067",
  "jai069",
  "jai141",
  "jai151",
  "jai158",
  "jai179",
  "jai187",
  "jai187",
  "jai187",
  "jai187",
  "jai187",
  "jai188",
  "jai188",
  "jai190",
  "jai190",
  "jai190",
  "jai190",
  "jai190",
  "jai196",
  "jai196",
  "jai203",
  "jai205",
  "jai205",
  "jai205",
  "jai212",
];
const BEST_DVD_IDS = [
  "jai001",
  "jai002",
  "jai007",
  "jai011",
  "jai015",
  "jai016",
  "jai021",
  "jai034",
  "jai041",
  "jai048",
  "jai053",
  "jai055",
  "jai059",
  "jai057",
  "jai067",
  "jai069",
  "jai102",
  "jai013",
  "jai141",
  "jai146",
  "jai148",
  "jai153",
  "jai158",
  "jai165",
  "jai172",
  "jai176",
  "jai179",
  "jai187",
  "jai190",
  "jai196",
  "jai208",
  "jai210",
  "jai212",
];
const BEST_IDOL_IDS = [
  "jai001",
  "jai002",
  "jai007",
  "jai011",
  "jai013",
  "jai015",
  "jai016",
  "jai021",
  "jai034",
  "jai041",
  "jai048",
  "jai053",
  "jai055",
  "jai057",
  "jai059",
  "jai067",
  "jai069",
  "jai102",
  "jai141",
  "jai146",
  "jai148",
  "jai153",
  "jai158",
  "jai165",
  "jai172",
  "jai176",
  "jai179",
  "jai187",
  "jai190",
  "jai196",
  "jai208",
  "jai210",
  "jai212",
];
const TOP_POINT_GROWTH_IDS = [
  "jai001",
  "jai002",
  "jai007",
  "jai011",
  "jai015",
  "jai016",
  "jai048",
  "jai053",
  "jai146",
  "jai148",
  "jai158",
  "jai165",
  "jai172",
  "jai179",
  "jai190",
  "jai192",
  "jai212",
];
const TOP_IDOL_IDS = [
  "jai062",
  "jai151",
  "jai188",
  "jai196",
  "jai203",
  "jai205",
  "jai212",
];
const HAS_DVD_IDS = [
  "jai001",
  "jai002",
  "jai007",
  "jai011",
  "jai015",
  "jai016",
  "jai021",
  "jai034",
  "jai041",
  "jai048",
  "jai053",
  "jai055",
  "jai057",
  "jai059",
  "jai067",
  "jai069",
  "jai102",
  "jai013",
  "jai139",
  "jai141",
  "jai146",
  "jai148",
  "jai153",
  "jai158",
  "jai165",
  "jai172",
  "jai176",
  "jai179",
  "jai185",
  "jai187",
  "jai190",
  "jai192",
  "jai196",
  "jai208",
  "jai210",
  "jai212",
];
const NEWBIE_IDS = ["jai212"];

function getEarningIdol(rank, points, styles, uncensored, best, video) {
  const rankEarnings = Math.ceil(MonthEarnings.ranking / rank);

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
  if (styles.find((item) => item.tag === "6 Stars JAV")) {
    styleEarning = styleEarning + MonthEarnings.sixStar;
  }
  if (styles.find((item) => item.tag === "Killer Tits")) {
    styleEarning = styleEarning + MonthEarnings.killerTits;
  }
  if (styles.find((item) => item.tag === "Beautiful Breasts")) {
    styleEarning = styleEarning + MonthEarnings.beautifulBreasts;
  }

  const uncensoredEarnings = MonthEarnings.uncensoredDvds * uncensored;

  let bestEarnings = 0;

  if (best) {
    bestEarnings = MonthEarnings.best;
  }

  const videoEarnings = MonthEarnings.video * video;

  return (
    rankEarnings +
    pointEarnings +
    styleEarning +
    uncensoredEarnings +
    bestEarnings +
    videoEarnings
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

  return bonus;
}

export { getEarningIdol, getPriceOneNight, getBonusEarnings };
