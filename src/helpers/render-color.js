function sizeCup(cup) {
  switch (cup) {
    case "A-Cup":
      return "#bdc3c7";

    case "B-Cup":
      return "#2c3e50";

    case "C-Cup":
      return "#996600";

    case "D-Cup":
      return "#0066ff";

    case "E-Cup":
      return "#00ccff";

    case "F-Cup":
      return "#02661d";

    case "G-Cup":
      return "#17bf44";

    case "H-Cup":
      return "#ffff00";

    case "I-Cup":
      return "#f5af19";

    case "J-Cup":
      return "#6600ff";

    case "K-Cup":
      return "#ff00ff";

    case "L-Cup":
      return "#ff0066";

    case "M-Cup":
      return "#ff0000";

    case "N-Cup":
      return "#00ffcc";

    case "O-Cup":
      return "#0000ff";

    default:
      return "#ffffff";
  }
}

function modelStyle(style) {
  switch (style) {
    case "6 Stars JAV":
      return "#ff0084";

    case "Cute":
      return "#11ffbd";

    case "Beautiful Breasts":
      return "#00c6ff";

    case "Slender":
      return "#036310";

    case "Teens":
      return "#0072ff";

    case "Retired":
      return "#bdc3c7";

    case "Killer Tits":
      return "#f12711";

    case "Small Tits":
      return "#ffa751";

    case "Mixed-Race":
      return "#7f00ff";

    case "Mature":
      return "#f4c4f3";

    case "Former Gravure Model":
      return "#74ebd5";

    case "Long Legs":
      return "#45b649";

    case "Former TV Actress":
      return "#f953c6";

    case "Former Race Queen":
      return "#ffff00";

    default:
      return "";
  }
}

function dvdPoints(points) {
  if (points >= 1000) return "#74ebd5";
  if (points < 1000 && points >= 500) return "#ff0000";
  if (points < 500 && points >= 200) return "#7f00ff";
  if (points < 200 && points >= 100) return "#ffa751";
  if (points < 100 && points >= 50) return "#ffff00";
  if (points < 50 && points >= 20) return "#0066ff";
  if (points < 20 && points >= 10) return "#00c6ff";
  if (points < 10 && points >= 5) return "#17bf44";
  if (points < 5) return "#996600";
}

export { sizeCup, modelStyle, dvdPoints };
