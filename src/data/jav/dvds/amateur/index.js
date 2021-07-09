import File1 from "./json/file-1";

const response = [].concat(File1).map((item, index) => ({
  ...item,
  idDvd: `acd${index}`,
}));

export default response;
