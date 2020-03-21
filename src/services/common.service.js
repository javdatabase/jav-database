import Idols from "../data/idols";

function getIdolBasicDetail(id) {
  const detail = Idols.find(idol => idol.idIdol === id);
  return {
    idIdol: detail.idIdol,
    avatar: detail.name,
    name: detail.name,
    other: detail.other
  };
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

export { getIdolBasicDetail, sortIdols };
