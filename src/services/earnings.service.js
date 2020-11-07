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

export { getEarningIdol, getPriceOneNight };
