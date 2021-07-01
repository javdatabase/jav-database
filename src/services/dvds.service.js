import { toUpper, trim } from "lodash";

import MainDvds from "../data/dvds/main";
import PreReleaseDvds from "../data/dvds/pre-release";
import AmateurDvds from "../data/dvds/amateur";

const SIZE_MAIN_DVDS = MainDvds.length;
const SIZE_AMATEUR_DVDS = AmateurDvds.length;
const SIZE_PRE_RELEASE_DVDS = PreReleaseDvds.length;

const NEW_DVDS_RELEASE = [
  MainDvds[SIZE_MAIN_DVDS - 1],
  MainDvds[SIZE_MAIN_DVDS - 2],
  MainDvds[SIZE_MAIN_DVDS - 3],
  MainDvds[SIZE_MAIN_DVDS - 4],
  MainDvds[SIZE_MAIN_DVDS - 5],
  MainDvds[SIZE_MAIN_DVDS - 6],
  MainDvds[SIZE_MAIN_DVDS - 7],
  MainDvds[SIZE_MAIN_DVDS - 8],
  MainDvds[SIZE_MAIN_DVDS - 9],
  MainDvds[SIZE_MAIN_DVDS - 10],
  MainDvds[SIZE_MAIN_DVDS - 11],
  MainDvds[SIZE_MAIN_DVDS - 12],
  MainDvds[SIZE_MAIN_DVDS - 13],
  MainDvds[SIZE_MAIN_DVDS - 14],
  MainDvds[SIZE_MAIN_DVDS - 15],
];

const ALL_DVDS_RELEASE_BY_PAGE = (code, type, idols, page, pageSize) => {
  let temp = MainDvds;
  if (code) {
    temp = temp.filter((item) =>
      toUpper(trim(item.code.replace("-", ""))).includes(
        toUpper(trim(code.replace("-", "")))
      )
    );
  }
  if (type) {
    temp = temp.filter((item) => item.type === type.value);
  }
  if (idols && idols.length > 0) {
    temp = temp.filter((item) => {
      const result = item.idols.filter(
        (idol) => !!idols.find((filter) => filter.value === idol.idIdol)
      );
      if (result.length < idols.length) {
        return false;
      } else {
        return true;
      }
    });
  }
  const size = temp.length;
  temp = temp.filter((item, index) => {
    return (
      index < size - (page - 1) * pageSize && index > size - 1 - page * pageSize
    );
  });
  const response = temp.reverse();
  return { data: response, size: size };
};

const ALL_DVDS_PRE_RELEASE_BY_PAGE = (page, pageSize) => {
  const temp = PreReleaseDvds.filter((item, index) => {
    return (
      index < SIZE_PRE_RELEASE_DVDS - (page - 1) * pageSize &&
      index > SIZE_PRE_RELEASE_DVDS - 1 - page * pageSize
    );
  });
  const response = temp.reverse();
  return response;
};

const ALL_DVDS_AMATEUR_BY_PAGE = (page, pageSize) => {
  const temp = AmateurDvds.filter((item, index) => {
    return (
      index < SIZE_AMATEUR_DVDS - (page - 1) * pageSize &&
      index > SIZE_AMATEUR_DVDS - 1 - page * pageSize
    );
  });
  const response = temp.reverse();
  return response;
};

export {
  SIZE_MAIN_DVDS,
  SIZE_AMATEUR_DVDS,
  SIZE_PRE_RELEASE_DVDS,
  NEW_DVDS_RELEASE,
  ALL_DVDS_RELEASE_BY_PAGE,
  ALL_DVDS_PRE_RELEASE_BY_PAGE,
  ALL_DVDS_AMATEUR_BY_PAGE,
};
