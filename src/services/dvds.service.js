import MainDvds from "../data/dvds/main";
import PreReleaseDvds from "../data/dvds/pre-release";
import AmateurDvds from "../data/dvds/amateur";

import { getIdolDetail } from "./common.service";

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
  MainDvds[SIZE_MAIN_DVDS - 15]
];

const NEW_DVDS_RELEASE_DETAIL = NEW_DVDS_RELEASE.map(dvd => ({
  ...dvd,
  idols: dvd.idols.map(idol => getIdolDetail(idol.idIdol))
}));

const ALL_DVDS_RELEASE_DETAIL_BY_PAGE = (page, pageSize) => {
  const temp = MainDvds.filter((item, index) => {
    return (
      index < SIZE_MAIN_DVDS - (page - 1) * pageSize &&
      index > SIZE_MAIN_DVDS - 1 - page * pageSize
    );
  });
  const response = temp
    .splice(0)
    .reverse()
    .map(dvd => ({
      ...dvd,
      idols: dvd.idols.map(idol => getIdolDetail(idol.idIdol))
    }));
  return response;
};

const ALL_DVDS_PRE_RELEASE_DETAIL_BY_PAGE = (page, pageSize) => {
  const temp = PreReleaseDvds.filter((item, index) => {
    return (
      index < SIZE_MAIN_DVDS - (page - 1) * pageSize &&
      index > SIZE_MAIN_DVDS - 1 - page * pageSize
    );
  });
  const response = temp
    .splice(0)
    .reverse()
    .map(dvd => ({
      ...dvd,
      idols: dvd.idols.map(idol => getIdolDetail(idol.idIdol))
    }));
  return response;
};

const ALL_DVDS_AMATEUR_BY_PAGE = (page, pageSize) => {
  const temp = AmateurDvds.filter((item, index) => {
    return (
      index < SIZE_AMATEUR_DVDS - (page - 1) * pageSize &&
      index > SIZE_AMATEUR_DVDS - 1 - page * pageSize
    );
  });
  const response = temp.splice(0).reverse();
  return response;
};

export {
  SIZE_MAIN_DVDS,
  SIZE_AMATEUR_DVDS,
  SIZE_PRE_RELEASE_DVDS,
  NEW_DVDS_RELEASE,
  NEW_DVDS_RELEASE_DETAIL,
  ALL_DVDS_RELEASE_DETAIL_BY_PAGE,
  ALL_DVDS_PRE_RELEASE_DETAIL_BY_PAGE,
  ALL_DVDS_AMATEUR_BY_PAGE
};
