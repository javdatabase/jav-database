import File1 from "./json/file-1";

const response = [].concat(File1).map((item, index) => ({
  ...item,
  idVideo: `oov${index}`,
}));

export default response;
