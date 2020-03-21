import Idols from "../data/idols";

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

export { getIdolDetail, sortIdols };
