import { toUpper, trim } from "lodash";

import MainDvds from "../../data/jav/dvds/main";
import Videos from "../../data/jav/videos";

const VIDEOS_FULL_DETAIL = Videos.map((item) => {
  let found = MainDvds.find((i) => i.code === item.code);
  if (found) {
    return { ...found, ...item };
  } else {
    return null;
  }
}).filter((item) => !!item);

const SIZE_VIDEOS = VIDEOS_FULL_DETAIL.length;

const ALL_VIDEOS_BY_PAGE = (code, idols, page, pageSize) => {
  let temp = VIDEOS_FULL_DETAIL;
  if (code) {
    temp = temp.filter((item) =>
      toUpper(trim(item.code.replace("-", ""))).includes(
        toUpper(trim(code.replace("-", "")))
      )
    );
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

const VIDEO_CONTENT = (code) => {
  return VIDEOS_FULL_DETAIL.find((item) => item.code === code);
};

export { VIDEOS_FULL_DETAIL, SIZE_VIDEOS, ALL_VIDEOS_BY_PAGE, VIDEO_CONTENT };
