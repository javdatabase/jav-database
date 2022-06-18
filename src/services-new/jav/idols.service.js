import { getDvdsByIdolApi } from "./dvds.service";

async function getDetailIdolsApi() {
  const Idols = (await import("../../data/jav/idols")).default;
  const idols = await Promise.all(
    Idols.map(async (item) => {
      const { data, size } = await getDvdsByIdolApi(item.idIdol);
      return {
        ...item,
        dvds: data,
        points: size,
      };
    })
  );
  const response = [...idols]
    .sort((a, b) => b.points - a.points)
    .map((item, index) => ({ ...item, rank: index + 1 }));
  return response;
}

export { getDetailIdolsApi };
