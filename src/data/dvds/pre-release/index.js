import File1 from "./json/file-1";

const response = File1.concat([]).map((item, index) => ({
  ...item,
  idDvd: `prd${index}`,
}));

export default response;
