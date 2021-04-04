function getEarningIdol(rank, points, styles, uncensored, best) {
  const rankEarnings = Math.ceil(30000000000 / rank);

  let pointEarnings = 20000000 * points;
  if (points >= 1000) {
    pointEarnings = pointEarnings + 1000000000;
  } else if (points < 1000 && points >= 500) {
    pointEarnings = pointEarnings + 600000000;
  } else if (points < 500 && points >= 200) {
    pointEarnings = pointEarnings + 300000000;
  } else if (points < 200 && points >= 100) {
    pointEarnings = pointEarnings + 100000000;
  } else if (points < 100 && points >= 50) {
    pointEarnings = pointEarnings + 90000000;
  } else if (points < 50 && points >= 20) {
    pointEarnings = pointEarnings + 30000000;
  } else if (points < 20 && points >= 10) {
    pointEarnings = pointEarnings + 1800000;
  } else if (points < 10 && points >= 5) {
    pointEarnings = pointEarnings + 16000000;
  } else {
    pointEarnings = pointEarnings + 10000000;
  }

  let styleEarning = 90000000;
  if (styles.find((item) => item.tag === "Retired")) {
    styleEarning = 30000000;
  }
  if (styles.find((item) => item.tag === "6 Stars JAV")) {
    styleEarning = styleEarning + 100000000;
  }
  if (styles.find((item) => item.tag === "Killer Tits")) {
    styleEarning = styleEarning + 60000000;
  }
  if (styles.find((item) => item.tag === "Beautiful Breasts")) {
    styleEarning = styleEarning + 60000000;
  }

  const uncensoredEarnings = 100000000 * uncensored;

  let bestEarnings = 0;

  if (best) {
    bestEarnings = 900000000;
  }

  return (
    rankEarnings +
    pointEarnings +
    styleEarning +
    uncensoredEarnings +
    bestEarnings
  );
}

function getPriceOneNight(earnings) {
  return Math.ceil(earnings / 10);
}

const STAR_IDOL_ID = "";
const BEST_DVD_IDS = [
  "jai001",
  "jai002",
  "jai016",
  "jai034",
  "jai057",
  "jai113",
  "jai141",
  "jai147",
  "jai148",
  "jai153",
  "jai158",
  "jai164",
  "jai170",
  "jai171",
  "jai187",
];
const BEST_IDOL_IDS = [
  "jai001",
  "jai002",
  "jai016",
  "jai034",
  "jai057",
  "jai113",
  "jai141",
  "jai147",
  "jai148",
  "jai153",
  "jai158",
  "jai164",
  "jai170",
  "jai171",
  "jai187",
];
const SWEET_NIGHT_IDS = [];
const TOP_POINT_GROWTH_IDS = ["jai002", "jai057", "jai185"];
const TOP_IDOL_IDS = [
  "jai062",
  "jai069",
  "jai070",
  "jai073",
  "jai151",
  "jai165",
  "jai171",
  "jai172",
  "jai187",
];
const HAS_DVD_IDS = [
  "jai001",
  "jai002",
  "jai016",
  "jai034",
  "jai056",
  "jai057",
  "jai113",
  "jai141",
  "jai147",
  "jai148",
  "jai153",
  "jai158",
  "jai164",
  "jai170",
  "jai171",
  "jai185",
  "jai187",
];
const NEWBIE_IDS = [];

function getBonusEarnings(id) {
  let bonus = 0;

  if (STAR_IDOL_ID === id) {
    bonus = bonus + 10000000000;
  }
  if (BEST_DVD_IDS.includes(id)) {
    bonus = bonus + 1200000000;
  }
  if (BEST_IDOL_IDS.includes(id)) {
    bonus = bonus + 600000000;
  }
  if (SWEET_NIGHT_IDS.includes(id)) {
    bonus =
      bonus +
      1000000000 *
        SWEET_NIGHT_IDS.reduce((acc, val) => (val === id ? acc + 1 : acc), 0);
  }
  if (TOP_POINT_GROWTH_IDS.includes(id)) {
    bonus = bonus + 180000000;
  }
  if (TOP_IDOL_IDS.includes(id)) {
    bonus = bonus + 80000000;
  }
  if (HAS_DVD_IDS.includes(id)) {
    bonus = bonus + 50000000;
  }
  if (NEWBIE_IDS.includes(id)) {
    bonus = bonus + 6000000;
  }

  return bonus;
}

export { getEarningIdol, getPriceOneNight, getBonusEarnings };
