import { uniqBy, random } from "lodash";

function sortStars(stars) {
  const response = [...stars].sort((a, b) => {
    let x = a.name.toUpperCase();
    let y = b.name.toUpperCase();
    if (x < y) return -1;
    else if (x > y) return 1;
    else return 0;
  });
  return response.reverse();
}

function getPicturesRandom(album) {
  function generateNewPicture(array, temp) {
    if (
      album.length >= 10 &&
      !!array.find((item) => item.picture === temp.picture)
    ) {
      return generateNewPicture(array, album[random(album.length - 1)]);
    }
    return temp;
  }

  function randomPictures() {
    let pictures = Array(10).fill(0);
    for (let i = 0; i < pictures.length; i++) {
      pictures[i] = generateNewPicture(
        pictures,
        album[random(album.length - 1)]
      );
    }
    return uniqBy(pictures, "picture");
  }

  return randomPictures();
}

export { sortStars, getPicturesRandom };
