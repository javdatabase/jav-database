import MainDvds from "../data/dvds/main";
import Idols from "../data/idols";

const CheckAlreadyExistDvd = () => {
  let d = 0;
  let rs = [];
  const data = MainDvds;
  const size = data.length;
  for (let i = 1; i < size; i++) {
    for (let j = 0; j < i; j++) {
      if (data[i].code === data[j].code && data[i].code !== "") {
        d++;
        rs.push(data[i].code);
      }
    }
  }
  if (d !== 0) {
    return rs;
  } else {
    return "* none *";
  }
};

const RESULT_CHECK_ALREADY_EXIST_DVD = CheckAlreadyExistDvd();

const CheckPoster = () => {
  const data = MainDvds.filter(item => item.poster === "" && item.code !== "");
  const rs = data.map(item => item.code);
  if (data.length > 0) {
    return rs;
  } else {
    return "* none *";
  }
};

const RESULT_CHECK_POSTER = CheckPoster();

const CheckAlreadyExistIdols = () => {
  let d = 0;
  let rs = [];
  for (let i = 1; i < Idols.length; i++) {
    for (let j = 0; j < i; j++) {
      if (Idols[i].name === Idols[j].name && Idols[i].name !== "") {
        d++;
        rs.push(Idols[i].name);
      }
    }
  }
  if (d !== 0) {
    return rs;
  } else {
    return "* none *";
  }
};

const RESULT_CHECK_ALREADY_EXIST_IDOLS = CheckAlreadyExistIdols();

const CheckAlreadyExistIdIdols = () => {
  let d = 0;
  let rs = [];
  for (let i = 1; i < Idols.length; i++) {
    for (let j = 0; j < i; j++) {
      if (Idols[i].idIdol === Idols[j].idIdol) {
        d++;
        rs.push(Idols[i].idIdol);
      }
    }
  }
  if (d !== 0) {
    return rs;
  } else {
    return "* none *";
  }
};

const RESULT_CHECK_ALREADY_EXIST_ID_IDOLS = CheckAlreadyExistIdIdols();

export {
  RESULT_CHECK_ALREADY_EXIST_DVD,
  RESULT_CHECK_POSTER,
  RESULT_CHECK_ALREADY_EXIST_IDOLS,
  RESULT_CHECK_ALREADY_EXIST_ID_IDOLS
};
