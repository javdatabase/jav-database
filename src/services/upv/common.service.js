import { get, uniqBy, random } from "lodash";

import Stars from "../../data/upv/stars";
import Videos from "../../data/upv/videos";

import { ALL_EARNING_STARS, SIZE_STARS } from "./stars.service";
import { SIZE_VIDEOS } from "./videos.service";

function findStarById(id) {
  let detail = undefined;
  for (let i = 0; i < SIZE_STARS; i++) {
    if (ALL_EARNING_STARS[i].idStar === id) {
      detail = ALL_EARNING_STARS[i];
    }
  }
  return detail;
}

function getStarName(id) {
  const detail = findStarById(id);
  return get(detail, "name", "");
}

function getStarRank(id) {
  const detail = findStarById(id);
  return get(detail, "position", "");
}

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

function getPicturesRandom(album, size = 10) {
  function generateNewPicture(array, temp) {
    if (
      album.length >= size &&
      !!array.find((item) => item.picture === temp.picture)
    ) {
      return generateNewPicture(array, album[random(album.length - 1)]);
    }
    return temp;
  }

  function randomPictures() {
    let pictures = Array(size).fill(0);
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

function getVideoRandom() {
  return Videos[random(SIZE_VIDEOS - 1)];
}

function getStarsRandom() {
  function generateNewStar(array, temp) {
    if (!!array.find((item) => item.idStar === temp.idStar)) {
      return generateNewStar(array, Stars[random(SIZE_STARS - 1)]);
    }
    return {
      ...temp,
      position: getStarRank(temp.idStar),
      album: getPicturesRandom(temp.album, 20),
    };
  }

  function randomStars() {
    let stars = Array(10).fill(0);
    for (let i = 0; i < stars.length; i++) {
      stars[i] = generateNewStar(stars, Stars[random(SIZE_STARS - 1)]);
    }
    return stars;
  }

  return randomStars();
}

export {
  findStarById,
  getStarName,
  getStarRank,
  sortStars,
  getPicturesRandom,
  getVideoRandom,
  getStarsRandom,
};
