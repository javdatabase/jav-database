import File1 from "./json/file-1";
import File2 from "./json/file-2";
import File3 from "./json/file-3";
import File4 from "./json/file-4";
import File5 from "./json/file-5";
import File6 from "./json/file-6";
import File7 from "./json/file-7";
import File8 from "./json/file-8";
import File9 from "./json/file-9";
import File10 from "./json/file-10";
import File11 from "./json/file-11";
import File12 from "./json/file-12";
import File13 from "./json/file-13";
import File14 from "./json/file-14";
import File15 from "./json/file-15";
import File16 from "./json/file-16";
import File17 from "./json/file-17";
import File18 from "./json/file-18";
import File19 from "./json/file-19";
import File20 from "./json/file-20";
import File21 from "./json/file-21";
import File22 from "./json/file-22";
import File23 from "./json/file-23";
import File24 from "./json/file-24";
import File25 from "./json/file-25";
import File26 from "./json/file-26";
import File27 from "./json/file-27";
import File28 from "./json/file-28";
import File29 from "./json/file-29";
import File30 from "./json/file-30";
import File31 from "./json/file-31";
import File32 from "./json/file-32";
import File33 from "./json/file-33";
import File34 from "./json/file-34";

const response = []
  .concat(
    File1,
    File2,
    File3,
    File4,
    File5,
    File6,
    File7,
    File8,
    File9,
    File10,
    File11,
    File12,
    File13,
    File14,
    File15,
    File16,
    File17,
    File18,
    File19,
    File20,
    File21,
    File22,
    File23,
    File24,
    File25,
    File26,
    File27,
    File28,
    File29,
    File30,
    File31,
    File32,
    File33,
    File34
  )
  .map((item, index) => ({
    ...item,
    idDvd: `dvd${index + 1}`,
  }));

export default response;