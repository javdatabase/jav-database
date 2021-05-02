function getEarningIdol(rank, points, styles, uncensored, best) {
  const rankEarnings = Math.ceil(300000000 / rank);

  let pointEarnings = 200000 * points;
  if (points >= 1000) {
    pointEarnings = pointEarnings + 10000000;
  } else if (points < 1000 && points >= 500) {
    pointEarnings = pointEarnings + 6000000;
  } else if (points < 500 && points >= 200) {
    pointEarnings = pointEarnings + 3000000;
  } else if (points < 200 && points >= 100) {
    pointEarnings = pointEarnings + 1000000;
  } else if (points < 100 && points >= 50) {
    pointEarnings = pointEarnings + 900000;
  } else if (points < 50 && points >= 20) {
    pointEarnings = pointEarnings + 300000;
  } else if (points < 20 && points >= 10) {
    pointEarnings = pointEarnings + 180000;
  } else if (points < 10 && points >= 5) {
    pointEarnings = pointEarnings + 160000;
  } else {
    pointEarnings = pointEarnings + 100000;
  }

  let styleEarning = 900000;
  if (styles.find((item) => item.tag === "Retired")) {
    styleEarning = 300000;
  }
  if (styles.find((item) => item.tag === "6 Stars JAV")) {
    styleEarning = styleEarning + 1000000;
  }
  if (styles.find((item) => item.tag === "Killer Tits")) {
    styleEarning = styleEarning + 600000;
  }
  if (styles.find((item) => item.tag === "Beautiful Breasts")) {
    styleEarning = styleEarning + 600000;
  }

  const uncensoredEarnings = 1000000 * uncensored;

  let bestEarnings = 0;

  if (best) {
    bestEarnings = 9000000;
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
  return Math.ceil(earnings / 8);
}

const STAR_IDOL_ID = "jai057";
const BEST_DVD_IDS = [
  "jai016",
  "jai057",
  "jai153",
  "jai170",
  "jai171",
  "jai187",
];
const BEST_IDOL_IDS = [
  "jai007",
  "jai012",
  "jai015",
  "jai016",
  "jai031",
  "jai054",
  "jai055",
  "jai057",
  "jai078",
  "jai113",
  "jai124",
  "jai146",
  "jai153",
  "jai155",
  "jai158",
  "jai165",
  "jai168",
  "jai170",
  "jai171",
  "jai172",
  "jai177",
  "jai179",
  "jai184",
  "jai187",
  "jai190",
];
const SWEET_NIGHT_IDS = ["jai057"];
const TOP_POINT_GROWTH_IDS = [
  "jai016",
  "jai054",
  "jai055",
  "jai057",
  "jai078",
  "jai155",
  "jai172",
  "jai173",
  "jai174",
  "jai177",
  "jai184",
  "jai185",
];
const TOP_IDOL_IDS = [
  "jai062",
  "jai070",
  "jai117",
  "jai172",
  "jai187",
  "jai188",
];
const HAS_DVD_IDS = [
  "jai007",
  "jai012",
  "jai015",
  "jai016",
  "jai031",
  "jai054",
  "jai055",
  "jai056",
  "jai057",
  "jai078",
  "jai113",
  "jai124",
  "jai146",
  "jai147",
  "jai148",
  "jai153",
  "jai155",
  "jai158",
  "jai165",
  "jai168",
  "jai170",
  "jai171",
  "jai172",
  "jai173",
  "jai174",
  "jai177",
  "jai179",
  "jai184",
  "jai185",
  "jai187",
  "jai190",
];
const NEWBIE_IDS = [];

function getBonusEarnings(id) {
  let bonus = 0;

  if (STAR_IDOL_ID === id) {
    bonus = bonus + 100000000;
  }
  if (BEST_DVD_IDS.includes(id)) {
    bonus = bonus + 12000000;
  }
  if (BEST_IDOL_IDS.includes(id)) {
    bonus = bonus + 6000000;
  }
  if (SWEET_NIGHT_IDS.includes(id)) {
    bonus =
      bonus +
      10000000 *
        SWEET_NIGHT_IDS.reduce((acc, val) => (val === id ? acc + 1 : acc), 0);
  }
  if (TOP_POINT_GROWTH_IDS.includes(id)) {
    bonus = bonus + 1800000;
  }
  if (TOP_IDOL_IDS.includes(id)) {
    bonus = bonus + 800000;
  }
  if (HAS_DVD_IDS.includes(id)) {
    bonus = bonus + 500000;
  }
  if (NEWBIE_IDS.includes(id)) {
    bonus = bonus + 120000;
  }

  return bonus;
}

export { getEarningIdol, getPriceOneNight, getBonusEarnings };
