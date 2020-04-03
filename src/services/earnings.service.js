function getEarningIdol(rank, points, styles, uncensored, best) {
  const rankEarnings = Math.ceil(1000000 / rank);

  let pointEarnings = 1000 * points;
  if (points >= 1000) {
    pointEarnings = pointEarnings + 1000000;
  } else if (points < 1000 && points >= 500) {
    pointEarnings = pointEarnings + 500000;
  } else if (points < 500 && points >= 200) {
    pointEarnings = pointEarnings + 200000;
  } else if (points < 200 && points >= 100) {
    pointEarnings = pointEarnings + 100000;
  } else if (points < 100 && points >= 50) {
    pointEarnings = pointEarnings + 50000;
  } else if (points < 50 && points >= 20) {
    pointEarnings = pointEarnings + 20000;
  } else if (points < 20 && points >= 10) {
    pointEarnings = pointEarnings + 10000;
  } else if (points < 10 && points >= 5) {
    pointEarnings = pointEarnings + 5000;
  } else {
    pointEarnings = pointEarnings + 1000;
  }

  let styleEarning = 100000;
  if (styles.find((item) => item.tag === "Retired")) {
    styleEarning = 50000;
  }
  if (styles.find((item) => item.tag === "6 Stars JAV")) {
    styleEarning = styleEarning + 100000;
  }
  if (styles.find((item) => item.tag === "Killer Tits")) {
    styleEarning = styleEarning + 50000;
  }
  if (styles.find((item) => item.tag === "Beautiful Breasts")) {
    styleEarning = styleEarning + 50000;
  }

  const uncensoredEarnings = 5000 * uncensored;

  let bestEarnings = 0;

  if (best) {
    bestEarnings = 1000000;
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
  return Math.ceil(earnings / 3);
}

export { getEarningIdol, getPriceOneNight };
