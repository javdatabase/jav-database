function getEarningIdol(rank, points, styles, uncensored, best) {
  const rankEarnings = Math.ceil(20000000 / rank);

  let pointEarnings = 1000000 * points;
  if (points >= 1000) {
    pointEarnings = pointEarnings + 16000000;
  } else if (points < 1000 && points >= 500) {
    pointEarnings = pointEarnings + 15000000;
  } else if (points < 500 && points >= 200) {
    pointEarnings = pointEarnings + 11000000;
  } else if (points < 200 && points >= 100) {
    pointEarnings = pointEarnings + 10000000;
  } else if (points < 100 && points >= 50) {
    pointEarnings = pointEarnings + 9000000;
  } else if (points < 50 && points >= 20) {
    pointEarnings = pointEarnings + 8000000;
  } else if (points < 20 && points >= 10) {
    pointEarnings = pointEarnings + 7000000;
  } else if (points < 10 && points >= 5) {
    pointEarnings = pointEarnings + 6000000;
  } else {
    pointEarnings = pointEarnings + 5500000;
  }

  let styleEarning = 2000000;
  if (styles.find((item) => item.tag === "Retired")) {
    styleEarning = 1000000;
  }
  if (styles.find((item) => item.tag === "6 Stars JAV")) {
    styleEarning = styleEarning + 5000000;
  }
  if (styles.find((item) => item.tag === "Killer Tits")) {
    styleEarning = styleEarning + 4000000;
  }
  if (styles.find((item) => item.tag === "Beautiful Breasts")) {
    styleEarning = styleEarning + 3000000;
  }

  const uncensoredEarnings = 2000000 * uncensored;

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
  return Math.ceil(earnings / 6);
}

const STAR_IDOL_ID = "jai015";
const BEST_DVD_IDS = [
  "jai001",
  "jai002",
  "jai007",
  "jai014",
  "jai015",
  "jai016",
  "jai021",
  "jai034",
  "jai041",
  "jai048",
  "jai054",
  "jai057",
  "jai067",
  "jai069",
  "jai073",
  "jai151",
  "jai158",
  "jai170",
  "jai171",
  "jai172",
  "jai179",
  "jai181",
  "jai187",
  "jai188",
  "jai189",
  "jai190",
  "jai191",
];
const BEST_IDOL_IDS = [
  "jai001",
  "jai002",
  "jai007",
  "jai014",
  "jai015",
  "jai016",
  "jai021",
  "jai034",
  "jai041",
  "jai048",
  "jai054",
  "jai057",
  "jai067",
  "jai069",
  "jai073",
  "jai151",
  "jai158",
  "jai170",
  "jai171",
  "jai172",
  "jai179",
  "jai181",
  "jai187",
  "jai188",
  "jai189",
  "jai190",
  "jai191",
];
const SWEET_NIGHT_IDS = [
  "jai001",
  "jai001",
  "jai001",
  "jai015",
  "jai015",
  "jai015",
  "jai041",
  "jai041",
  "jai041",
  "jai067",
  "jai067",
  "jai069",
  "jai069",
  "jai073",
  "jai073",
  "jai151",
  "jai151",
  "jai179",
  "jai179",
];
const TOP_POINT_GROWTH_IDS = [
  "jai001",
  "jai015",
  "jai016",
  "jai041",
  "jai048",
  "jai185",
  "jai188",
  "jai189",
  "jai190",
  "jai191",
];
const TOP_IDOL_IDS = [
  "jai062",
  "jai069",
  "jai070",
  "jai073",
  "jai151",
  "jai158",
  "jai165",
  "jai172",
  "jai187",
  "jai188",
  "jai189",
];
const HAS_DVD_IDS = [
  "jai001",
  "jai002",
  "jai007",
  "jai014",
  "jai015",
  "jai016",
  "jai021",
  "jai034",
  "jai041",
  "jai048",
  "jai054",
  "jai057",
  "jai067",
  "jai069",
  "jai073",
  "jai143",
  "jai144",
  "jai145",
  "jai148",
  "jai151",
  "jai158",
  "jai170",
  "jai171",
  "jai172",
  "jai179",
  "jai181",
  "jai185",
  "jai187",
  "jai188",
  "jai189",
  "jai190",
  "jai191",
];
const NEWBIE_IDS = ["jai188", "jai189", "jai190", "jai191"];

function getBonusEarnings(id) {
  let bonus = 0;

  if (STAR_IDOL_ID === id) {
    bonus = bonus + 100000000;
  }
  if (BEST_DVD_IDS.includes(id)) {
    bonus = bonus + 20000000;
  }
  if (BEST_IDOL_IDS.includes(id)) {
    bonus = bonus + 9500000;
  }
  if (SWEET_NIGHT_IDS.includes(id)) {
    bonus =
      bonus +
      16000000 *
        SWEET_NIGHT_IDS.reduce((acc, val) => (val === id ? acc + 1 : acc), 0);
  }
  if (TOP_POINT_GROWTH_IDS.includes(id)) {
    bonus = bonus + 11000000;
  }
  if (TOP_IDOL_IDS.includes(id)) {
    bonus = bonus + 7000000;
  }
  if (HAS_DVD_IDS.includes(id)) {
    bonus = bonus + 5500000;
  }
  if (NEWBIE_IDS.includes(id)) {
    bonus = bonus + 3500000;
  }

  return bonus;
}

export { getEarningIdol, getPriceOneNight, getBonusEarnings };
