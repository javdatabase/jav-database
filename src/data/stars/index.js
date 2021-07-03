import moment from "moment";

import File1 from "./json/file-1";

const response = [].concat(File1).map((item) => ({
  ...item,
  age:
    item.born === "--/--/----"
      ? "??"
      : moment(item.born, "dd/MM/YYYY").fromNow().replace(" years ago", ""),
}));

export default response;
