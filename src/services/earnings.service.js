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

function getBonusEarnings(id) {
  const bestDvd = [
    "jai001",
    "jai002",
    "jai003",
    "jai015",
    "jai016",
    "jai021",
    "jai034",
    "jai036",
    "jai048",
    "jai050",
    "jai051",
    "jai054",
    "jai055",
    "jai057",
    "jai102",
    "jai123",
    "jai133",
    "jai139",
    "jai146",
    "jai179",
    "jai182",
    "jai184",
    "jai185",
    "jai186",
  ];
  const topPointGrowth = [
    "jai001",
    "jai002",
    "jai003",
    "jai016",
    "jai031",
    "jai034",
    "jai036",
    "jai144",
    "jai186",
  ];
  const sweetNight = [
    "jai001",
    "jai016",
    "jai057",
    "jai102",
    "jai182",
    "jai185",
  ];
  const bestIdol = [
    "jai001",
    "jai002",
    "jai003",
    "jai015",
    "jai016",
    "jai021",
    "jai034",
    "jai036",
    "jai048",
    "jai050",
    "jai051",
    "jai054",
    "jai055",
    "jai057",
    "jai102",
    "jai123",
    "jai133",
    "jai139",
    "jai146",
    "jai179",
    "jai182",
    "jai184",
    "jai185",
    "jai186",
  ];
  const topIdol = [
    "jai048",
    "jai062",
    "jai070",
    "jai073",
    "jai151",
    "jai158",
    "jai171",
    "jai172",
    "jai165",
  ];
  const hasDvd = [
    "jai001",
    "jai002",
    "jai003",
    "jai014",
    "jai015",
    "jai016",
    "jai021",
    "jai031",
    "jai034",
    "jai036",
    "jai048",
    "jai050",
    "jai051",
    "jai053",
    "jai054",
    "jai055",
    "jai056",
    "jai057",
    "jai102",
    "jai123",
    "jai133",
    "jai139",
    "jai140",
    "jai144",
    "jai145",
    "jai146",
    "jai148",
    "jai179",
    "jai182",
    "jai184",
    "jai185",
    "jai186",
  ];
  const newbie = ["jai186"];

  let bonus = 0;

  if (bestDvd.includes(id)) {
    bonus = bonus + 20000000;
  }
  if (topPointGrowth.includes(id)) {
    bonus = bonus + 11000000;
  }
  if (sweetNight.includes(id)) {
    bonus =
      bonus +
      16000000 *
        sweetNight.reduce((acc, val) => (val === id ? acc + 1 : acc), 0);
  }
  if (bestIdol.includes(id)) {
    bonus = bonus + 9500000;
  }
  if (topIdol.includes(id)) {
    bonus = bonus + 7000000;
  }
  if (hasDvd.includes(id)) {
    bonus = bonus + 5500000;
  }
  if (newbie.includes(id)) {
    bonus = bonus + 3500000;
  }

  return bonus;
}

export { getEarningIdol, getPriceOneNight, getBonusEarnings };
