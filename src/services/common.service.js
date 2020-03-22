import Idols from "../data/idols";
import MainDvds from "../data/dvds/main";

function getIdolDetail(id) {
  const detail = Idols.find(idol => idol.idIdol === id);
  return detail;
}

function sortIdols() {
  const array = [...Idols];
  const response = array.sort((a, b) => {
    let x = a.name.toUpperCase();
    let y = b.name.toUpperCase();
    if (x < y) return -1;
    else if (x > y) return 1;
    else return 0;
  });
  return response.reverse();
}

function getDvdsByIdol(id) {
  const dvds = MainDvds.filter(item =>
    item.idols.find(idol => idol.idIdol === id)
  );
  return {
    size: dvds.length,
    dvds: dvds
  };
}

export { getIdolDetail, sortIdols, getDvdsByIdol };
