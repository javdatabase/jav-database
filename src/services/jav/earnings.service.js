import {
  MonthEarnings,
  OneNightRatio,
  WeekEarnings,
} from "../../helpers/earning-values";

const STAR_IDOL_ID = "jai158";
const SWEET_NIGHT_IDS = [
  "jai001",
  "jai002",
  "jai007",
  "jai007",
  "jai007",
  "jai007",
  "jai007",
  "jai007",
  "jai007",
  "jai016",
  "jai016",
  "jai016",
  "jai016",
  "jai016",
  "jai021",
  "jai021",
  "jai021",
  "jai021",
  "jai038",
  "jai038",
  "jai038",
  "jai038",
  "jai038",
  "jai038",
  "jai038",
  "jai041",
  "jai041",
  "jai041",
  "jai041",
  "jai041",
  "jai041",
  "jai041",
  "jai041",
  "jai041",
  "jai041",
  "jai041",
  "jai041",
  "jai041",
  "jai041",
  "jai041",
  "jai041",
  "jai041",
  "jai041",
  "jai041",
  "jai041",
  "jai048",
  "jai048",
  "jai048",
  "jai048",
  "jai048",
  "jai048",
  "jai048",
  "jai057",
  "jai057",
  "jai057",
  "jai057",
  "jai057",
  "jai057",
  "jai057",
  "jai057",
  "jai057",
  "jai057",
  "jai059",
  "jai062",
  "jai062",
  "jai062",
  "jai065",
  "jai068",
  "jai068",
  "jai068",
  "jai068",
  "jai068",
  "jai070",
  "jai070",
  "jai070",
  "jai070",
  "jai070",
  "jai070",
  "jai070",
  "jai070",
  "jai070",
  "jai070",
  "jai070",
  "jai070",
  "jai070",
  "jai070",
  "jai070",
  "jai070",
  "jai070",
  "jai070",
  "jai070",
  "jai070",
  "jai073",
  "jai073",
  "jai078",
  "jai078",
  "jai148",
  "jai148",
  "jai148",
  "jai148",
  "jai148",
  "jai148",
  "jai148",
  "jai151",
  "jai151",
  "jai158",
  "jai158",
  "jai158",
  "jai158",
  "jai158",
  "jai158",
  "jai158",
  "jai158",
  "jai158",
  "jai158",
  "jai158",
  "jai158",
  "jai158",
  "jai166",
  "jai169",
  "jai169",
  "jai170",
  "jai170",
  "jai170",
  "jai170",
  "jai170",
  "jai170",
  "jai170",
  "jai171",
  "jai171",
  "jai171",
  "jai171",
  "jai171",
  "jai171",
  "jai171",
  "jai179",
  "jai179",
  "jai190",
  "jai190",
  "jai190",
  "jai196",
  "jai196",
  "jai196",
  "jai196",
  "jai196",
  "jai198",
  "jai199",
  "jai199",
  "jai202",
  "jai202",
  "jai202",
  "jai203",
  "jai203",
  "jai203",
  "jai205",
  "jai205",
  "jai208",
];
const BEST_DVD_IDS = [
  "jai001",
  "jai002",
  "jai007",
  "jai009",
  "jai016",
  "jai038",
  "jai041",
  "jai048",
  "jai057",
  "jai059",
  "jai062",
  "jai065",
  "jai068",
  "jai070",
  "jai073",
  "jai078",
  "jai133",
  "jai148",
  "jai151",
  "jai152",
  "jai158",
  "jai166",
  "jai169",
  "jai170",
  "jai171",
  "jai179",
  "jai190",
  "jai195",
  "jai196",
  "jai197",
  "jai198",
  "jai199",
  "jai202",
  "jai203",
  "jai204",
  "jai205",
  "jai208",
];
const BEST_IDOL_IDS = [
  "jai001",
  "jai002",
  "jai007",
  "jai009",
  "jai016",
  "jai038",
  "jai041",
  "jai048",
  "jai057",
  "jai059",
  "jai062",
  "jai065",
  "jai068",
  "jai070",
  "jai073",
  "jai078",
  "jai133",
  "jai148",
  "jai151",
  "jai152",
  "jai158",
  "jai166",
  "jai169",
  "jai170",
  "jai171",
  "jai179",
  "jai190",
  "jai195",
  "jai196",
  "jai197",
  "jai198",
  "jai199",
  "jai202",
  "jai203",
  "jai204",
  "jai205",
  "jai208",
];
const TOP_POINT_GROWTH_IDS = [
  "jai007",
  "jai016",
  "jai048",
  "jai057",
  "jai148",
  "jai179",
  "jai185",
  "jai196",
  "jai199",
  "jai205",
];
const TOP_IDOL_IDS = [
  "jai062",
  "jai151",
  "jai188",
  "jai196",
  "jai203",
  "jai205",
];
const HAS_DVD_IDS = [
  "jai001",
  "jai002",
  "jai007",
  "jai009",
  "jai016",
  "jai038",
  "jai041",
  "jai048",
  "jai057",
  "jai059",
  "jai062",
  "jai065",
  "jai068",
  "jai070",
  "jai073",
  "jai078",
  "jai133",
  "jai148",
  "jai151",
  "jai152",
  "jai158",
  "jai166",
  "jai169",
  "jai170",
  "jai171",
  "jai179",
  "jai185",
  "jai190",
  "jai195",
  "jai196",
  "jai197",
  "jai198",
  "jai199",
  "jai202",
  "jai203",
  "jai204",
  "jai205",
  "jai208",
];
const NEWBIE_IDS = [];

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
