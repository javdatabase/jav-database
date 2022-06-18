import { toUpper, trim } from "lodash";

async function getNewReleaseDvdsApi() {
  const MainDvds = (await import("../../data/jav/dvds/main")).default;
  const MainDvdsSize = MainDvds.length;
  return [
    MainDvds[MainDvdsSize - 1],
    MainDvds[MainDvdsSize - 2],
    MainDvds[MainDvdsSize - 3],
    MainDvds[MainDvdsSize - 4],
    MainDvds[MainDvdsSize - 5],
    MainDvds[MainDvdsSize - 6],
    MainDvds[MainDvdsSize - 7],
    MainDvds[MainDvdsSize - 8],
    MainDvds[MainDvdsSize - 9],
    MainDvds[MainDvdsSize - 10],
    MainDvds[MainDvdsSize - 11],
    MainDvds[MainDvdsSize - 12],
    MainDvds[MainDvdsSize - 13],
    MainDvds[MainDvdsSize - 14],
    MainDvds[MainDvdsSize - 15],
  ];
}

async function getDvdsByFilterApi(code, type, idols, page, pageSize) {
  let temp = (await import("../../data/jav/dvds/main")).default;
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
  temp = temp.filter((_item, index) => {
    return (
      index < size - (page - 1) * pageSize && index > size - 1 - page * pageSize
    );
  });
  const response = temp.reverse();
  return { data: response, size: size };
}

async function getDvdsByIdolApi(id) {
  const MainDvds = (await import("../../data/jav/dvds/main")).default;
  const temp = MainDvds.filter((item) =>
    item.idols.find((idol) => idol.idIdol === id)
  );
  return {
    data: temp,
    size: temp.length,
  };
}

async function getPreReleaseDvdsByFilterApi(page, pageSize) {
  const PreReleaseDvds = (await import("../../data/jav/dvds/pre-release"))
    .default;
  const PreReleaseDvdsSize = PreReleaseDvds.length;
  const temp = PreReleaseDvds.filter((_item, index) => {
    return (
      index < PreReleaseDvdsSize - (page - 1) * pageSize &&
      index > PreReleaseDvdsSize - 1 - page * pageSize
    );
  });
  const response = temp.reverse();
  return { data: response, size: PreReleaseDvdsSize };
}

async function getAmateurDvdsByFilterApi(page, pageSize) {
  const AmateurDvds = (await import("../../data/jav/dvds/amateur")).default;
  const AmateurDvdsSize = AmateurDvds.length;
  const temp = AmateurDvds.filter((_item, index) => {
    return (
      index < AmateurDvdsSize - (page - 1) * pageSize &&
      index > AmateurDvdsSize - 1 - page * pageSize
    );
  });
  const response = temp.reverse();
  return { data: response, size: AmateurDvdsSize };
}

export {
  getNewReleaseDvdsApi,
  getDvdsByFilterApi,
  getDvdsByIdolApi,
  getPreReleaseDvdsByFilterApi,
  getAmateurDvdsByFilterApi,
};
