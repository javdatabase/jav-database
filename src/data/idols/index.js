import moment from "moment";

import File1 from "./json/file-1";
import File2 from "./json/file-2";
import File3 from "./json/file-3";
import File4 from "./json/file-4";

const response = [].concat(File1, File2, File3, File4).map((item) => ({
  ...item,
  age:
    item.born === "--/--/----"
      ? "??"
      : moment(item.born, "dd/MM/YYYY").fromNow().replace(" years ago", ""),
}));

export default response;
