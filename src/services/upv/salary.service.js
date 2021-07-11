import { Salary, OneNightRatio } from "../../helpers/salary-values";

function getSalaryStar(points) {
  return points * Salary;
}

function getPriceOneNight(earnings) {
  return Math.ceil(earnings / OneNightRatio);
}

export { getSalaryStar, getPriceOneNight };
