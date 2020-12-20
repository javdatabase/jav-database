function getEarningIdol(rank, points, styles, uncensored, best) {
  const rankEarnings = Math.ceil(9000000 / rank);

  let pointEarnings = 60000 * points;
  if (points >= 1000) {
    pointEarnings = pointEarnings + 9000000;
  } else if (points < 1000 && points >= 500) {
    pointEarnings = pointEarnings + 8000000;
  } else if (points < 500 && points >= 200) {
    pointEarnings = pointEarnings + 7000000;
  } else if (points < 200 && points >= 100) {
    pointEarnings = pointEarnings + 6000000;
  } else if (points < 100 && points >= 50) {
    pointEarnings = pointEarnings + 900000;
  } else if (points < 50 && points >= 20) {
    pointEarnings = pointEarnings + 800000;
  } else if (points < 20 && points >= 10) {
    pointEarnings = pointEarnings + 700000;
  } else if (points < 10 && points >= 5) {
    pointEarnings = pointEarnings + 600000;
  } else {
    pointEarnings = pointEarnings + 90000;
  }

  let styleEarning = 900000;
  if (styles.find((item) => item.tag === "Retired")) {
    styleEarning = 600000;
  }
  if (styles.find((item) => item.tag === "6 Stars JAV")) {
    styleEarning = styleEarning + 800000;
  }
  if (styles.find((item) => item.tag === "Killer Tits")) {
    styleEarning = styleEarning + 800000;
  }
  if (styles.find((item) => item.tag === "Beautiful Breasts")) {
    styleEarning = styleEarning + 800000;
  }

  const uncensoredEarnings = 70000 * uncensored;

  let bestEarnings = 0;

  if (best) {
    bestEarnings = 8000000;
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
  return Math.ceil(earnings / 7);
}

function getBonusEarnings(id) {
  const bestDvd = [
    "jai001",
    "jai002",
    "jai015",
    "jai038",
    "jai041",
    "jai057",
    "jai062",
    "jai065",
    "jai070",
    "jai075",
    "jai136",
    "jai157",
    "jai158",
    "jai166",
    "jai170",
    "jai171",
    "jai175",
  ];
  const topPointGrowth = [
    "jai001",
    "jai007",
    "jai015",
    "jai007",
    "jai048",
    "jai054",
    "jai057",
    "jai136",
    "jai172",
    "jai179",
    "jai180",
  ];
  const sweetNight = [
    "jai001",
    "jai002",
    "jai041",
    "jai070",
    "jai157",
    "jai171",
  ];
  const bestIdol = [
    "jai001",
    "jai002",
    "jai015",
    "jai038",
    "jai041",
    "jai048",
    "jai057",
    "jai061",
    "jai062",
    "jai065",
    "jai069",
    "jai070",
    "jai073",
    "jai075",
    "jai133",
    "jai136",
    "jai152",
    "jai153",
    "jai157",
    "jai158",
    "jai166",
    "jai170",
    "jai171",
    "jai172",
    "jai175",
  ];
  const topIdol = [
    "jai048",
    "jai062",
    "jai070",
    "jai073",
    "jai151",
    "jai166",
    "jai171",
    "jai172",
  ];
  const hasDvd = [
    "jai001",
    "jai002",
    "jai007",
    "jai012",
    "jai015",
    "jai026",
    "jai038",
    "jai041",
    "jai048",
    "jai054",
    "jai055",
    "jai056",
    "jai057",
    "jai061",
    "jai062",
    "jai065",
    "jai069",
    "jai070",
    "jai072",
    "jai073",
    "jai075",
    "jai133",
    "jai136",
    "jai139",
    "jai143",
    "jai144",
    "jai147",
    "jai148",
    "jai152",
    "jai153",
    "jai157",
    "jai158",
    "jai163",
    "jai165",
    "jai166",
    "jai167",
    "jai169",
    "jai170",
    "jai171",
    "jai172",
    "jai175",
    "jai179",
    "jai180",
  ];
  const newbie = [];

  let bonus = 0;

  if (bestDvd.includes(id)) {
    bonus = bonus + 7000000;
  }
  if (topPointGrowth.includes(id)) {
    bonus = bonus + 7000000;
  }
  if (sweetNight.includes(id)) {
    bonus = bonus + 7000000;
  }
  if (bestIdol.includes(id)) {
    bonus = bonus + 6000000;
  }
  if (topIdol.includes(id)) {
    bonus = bonus + 900000;
  }
  if (hasDvd.includes(id)) {
    bonus = bonus + 800000;
  }
  if (newbie.includes(id)) {
    bonus = bonus + 700000;
  }

  return bonus;
}

export { getEarningIdol, getPriceOneNight, getBonusEarnings };
