import SizesCup from "./sizes-cup";
import ModelStyle from "./model-styles";

function sizeCup(cup) {
  switch (cup) {
    case SizesCup[0]:
      return "#2c3e50";

    case SizesCup[1]:
      return "#bdc3c7";

    case SizesCup[2]:
      return "#996600";

    case SizesCup[3]:
      return "#0066ff";

    case SizesCup[4]:
      return "#00ccff";

    case SizesCup[5]:
      return "#02661d";

    case SizesCup[6]:
      return "#17bf44";

    case SizesCup[7]:
      return "#ffff00";

    case SizesCup[8]:
      return "#f5af19";

    case SizesCup[9]:
      return "#6600ff";

    case SizesCup[10]:
      return "#ff00ff";

    case SizesCup[11]:
      return "#ff0066";

    case SizesCup[12]:
      return "#ff0000";

    case SizesCup[13]:
      return "#00ffcc";

    case SizesCup[14]:
      return "#0000ff";

    default:
      return "#ffffff";
  }
}

function modelStyle(style) {
  switch (style) {
    case ModelStyle[0]:
      return "#a7f542";

    case ModelStyle[1]:
      return "#bdc3c7";

    case ModelStyle[2]:
      return "#ff0084";

    case ModelStyle[3]:
      return "#11ffbd";

    case ModelStyle[4]:
      return "#00c6ff";

    case ModelStyle[5]:
      return "#036310";

    case ModelStyle[6]:
      return "#0072ff";

    case ModelStyle[7]:
      return "#f12711";

    case ModelStyle[8]:
      return "#ffa751";

    case ModelStyle[9]:
      return "#7f00ff";

    case ModelStyle[10]:
      return "#f4c4f3";

    case ModelStyle[11]:
      return "#74ebd5";

    case ModelStyle[12]:
      return "#45b649";

    case ModelStyle[13]:
      return "#f953c6";

    case ModelStyle[14]:
      return "#ffff00";

    case ModelStyle[15]:
      return "#ffffff";

    case ModelStyle[16]:
      return "#0000ff";

    default:
      return "#ffffff";
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
