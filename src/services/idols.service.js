import Idols from "../data/idols";
import { sortIdols } from "./common.service";

const SIZE_IDOLS = Idols.length;

const ALL_IDOLS = (page, pageSize) => {
  const idols = sortIdols();
  const response = idols.filter((item, index) => {
    return (
      index < SIZE_IDOLS - (page - 1) * pageSize &&
      index > SIZE_IDOLS - 1 - page * pageSize
    );
  });
  return response.splice(0).reverse();
};

export { SIZE_IDOLS, ALL_IDOLS };
