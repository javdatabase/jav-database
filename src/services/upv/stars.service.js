import Stars from "../../data/upv/stars";

const SIZE_STARS = Stars.length;

const SWEET_STAR_IDS = [
  "ups001",
  "ups001",
  "ups001",
  "ups002",
  "ups002",
  "ups002",
  "ups003",
  "ups003",
  "ups004",
  "ups004",
  "ups005",
  "ups006",
  "ups006",
  "ups007",
  "ups007",
  "ups008",
  "ups008",
  "ups009",
  "ups009",
  "ups009",
  "ups010",
  "ups010",
  "ups010",
];

const STAR_PROFILE = (id) => {
  let star = undefined;
  for (let i = 0; i < SIZE_STARS; i++) {
    if (Stars[i].idStar === id) {
      star = Stars[i];
    }
  }
  const points = SWEET_STAR_IDS.reduce(
    (acc, val) => (val === id ? acc + 1 : acc),
    0
  );
  return { ...star, points: points };
};

export { SIZE_STARS, STAR_PROFILE };
