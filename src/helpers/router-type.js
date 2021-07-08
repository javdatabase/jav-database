import { matchPath } from "react-router-dom";

function isMain(path) {
  if (matchPath(path, { path: "/home", exact: true })) {
    return true;
  } else if (matchPath(path, { path: "/best-idols", exact: true })) {
    return true;
  } else if (matchPath(path, { path: "/ranking", exact: true })) {
    return true;
  } else if (matchPath(path, { path: "/top-earnings", exact: true })) {
    return true;
  } else if (matchPath(path, { path: "/idols", exact: true })) {
    return true;
  } else if (matchPath(path, { path: "/idol/:id", exact: false })) {
    return true;
  } else if (matchPath(path, { path: "/dvds", exact: true })) {
    return true;
  } else if (matchPath(path, { path: "/pre-release-dvds", exact: true })) {
    return true;
  } else if (matchPath(path, { path: "/amateur-dvds", exact: true })) {
    return true;
  } else if (matchPath(path, { path: "/online-videos", exact: true })) {
    return false;
  } else if (matchPath(path, { path: "/star/:id", exact: false })) {
    return false;
  } else if (matchPath(path, { path: "/debug", exact: true })) {
    return true;
  } else {
    return true;
  }
}

export { isMain };
