function getEarningIdol(rank, points, styles, uncensored, best) {
  const rankEarnings = Math.ceil(3000000000 / rank);

  let pointEarnings = 2000000 * points;
  if (points >= 1000) {
    pointEarnings = pointEarnings + 500000000;
  } else if (points < 1000 && points >= 500) {
    pointEarnings = pointEarnings + 200000000;
  } else if (points < 500 && points >= 200) {
    pointEarnings = pointEarnings + 100000000;
  } else if (points < 200 && points >= 100) {
    pointEarnings = pointEarnings + 50000000;
  } else if (points < 100 && points >= 50) {
    pointEarnings = pointEarnings + 30000000;
  } else if (points < 50 && points >= 20) {
    pointEarnings = pointEarnings + 10000000;
  } else if (points < 20 && points >= 10) {
    pointEarnings = pointEarnings + 9000000;
  } else if (points < 10 && points >= 5) {
    pointEarnings = pointEarnings + 8000000;
  } else {
    pointEarnings = pointEarnings + 5000000;
  }

  let styleEarning = 30000000;
  if (styles.find((item) => item.tag === "Retired")) {
    styleEarning = 10000000;
  }
  if (styles.find((item) => item.tag === "6 Stars JAV")) {
    styleEarning = styleEarning + 50000000;
  }
  if (styles.find((item) => item.tag === "Killer Tits")) {
    styleEarning = styleEarning + 30000000;
  }
  if (styles.find((item) => item.tag === "Beautiful Breasts")) {
    styleEarning = styleEarning + 20000000;
  }

  const uncensoredEarnings = 10000000 * uncensored;

  let bestEarnings = 0;

  if (best) {
    bestEarnings = 300000000;
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
  return Math.ceil(earnings / 6);
}

const STAR_IDOL_ID = "";
const BEST_DVD_IDS = [
  "jai001",
  "jai038",
  "jai054",
  "jai057",
  "jai062",
  "jai078",
  "jai157",
  "jai166",
  "jai172",
  "jai175",
  "jai188",
];
const BEST_IDOL_IDS = [
  "jai001",
  "jai038",
  "jai054",
  "jai057",
  "jai062",
  "jai078",
  "jai157",
  "jai166",
  "jai172",
  "jai175",
  "jai188",
];
const SWEET_NIGHT_IDS = ["jai157", "jai175"];
const TOP_POINT_GROWTH_IDS = ["jai148"];
const TOP_IDOL_IDS = [];
const HAS_DVD_IDS = [
  "jai001",
  "jai026",
  "jai038",
  "jai054",
  "jai057",
  "jai059",
  "jai062",
  "jai078",
  "jai148",
  "jai157",
  "jai166",
  "jai172",
  "jai175",
  "jai188",
];
const NEWBIE_IDS = [];

function getBonusEarnings(id) {
  let bonus = 0;

  if (STAR_IDOL_ID === id) {
    bonus = bonus + 1000000000;
  }
  if (BEST_DVD_IDS.includes(id)) {
    bonus = bonus + 300000000;
  }
  if (BEST_IDOL_IDS.includes(id)) {
    bonus = bonus + 200000000;
  }
  if (SWEET_NIGHT_IDS.includes(id)) {
    bonus =
      bonus +
      100000000 *
        SWEET_NIGHT_IDS.reduce((acc, val) => (val === id ? acc + 1 : acc), 0);
  }
  if (TOP_POINT_GROWTH_IDS.includes(id)) {
    bonus = bonus + 90000000;
  }
  if (TOP_IDOL_IDS.includes(id)) {
    bonus = bonus + 80000000;
  }
  if (HAS_DVD_IDS.includes(id)) {
    bonus = bonus + 5000000;
  }
  if (NEWBIE_IDS.includes(id)) {
    bonus = bonus + 3000000;
  }

  return bonus;
}

export { getEarningIdol, getPriceOneNight, getBonusEarnings };
