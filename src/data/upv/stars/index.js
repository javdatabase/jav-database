import moment from "moment";

import File1 from "./json/file-1";
import File2 from "./json/file-2";

const response = [].concat(File1, File2).map((item) => ({
  ...item,
  age:
    item.born === "--/--/----"
      ? "??"
      : moment(item.born, "dd/MM/YYYY").fromNow().replace(" years ago", ""),
}));

export default response;
