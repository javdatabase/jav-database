import {
  getAllIdolsDetail,
  getBestIdols,
  getAllEarningIdols,
  getAllBonusIdols,
  getAllOriginalIdols,
  getTotalOriginalEarnings,
  getTotalBonusEarnings,
  getTotalIdolEarnings,
} from "./jav/idols.service";
import { getVideosFullDetail } from "./jav/videos.service";
import { getAllEarningStars, getTotalStarEarnings } from "./upv/stars.service";

export function prewarm() {
  getAllIdolsDetail();
  getBestIdols();
  getAllEarningIdols();
  getAllBonusIdols();
  getAllOriginalIdols();
  getTotalOriginalEarnings();
  getTotalBonusEarnings();
  getTotalIdolEarnings();
  getVideosFullDetail();
  getAllEarningStars();
  getTotalStarEarnings();
}
