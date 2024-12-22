import qs from "qs";
import { getFullPopulateObject } from "./populate";
declare const strapi;
export const getConfigFromCtx = (ctx, modelUid) => {
  const model = strapi.getModel(modelUid);
  const populate = getFullPopulateObject(modelUid) as { populate: object };
  if (model.kind === "collectionType") {
    if (ctx.originalUrl.includes("?")) {
      let qsParams;
      qsParams = qs.parse(ctx.originalUrl.split("?")[1]) || {};
      let config = {
        ...populate,
        fields: qsParams?.fields instanceof Array ? [...qsParams?.fields] : [],
      };

      return cleanObject(config);
    } else {
      return populate;
    }
  } else {
    return populate;
  }
};
export const cleanObject = (obj) => {
  for (let propName in obj) {
    if (obj[propName] instanceof Array && obj[propName].length === 0) {
      delete obj[propName];
    } else if (
      obj[propName] === null ||
      obj[propName] === undefined ||
      Object.keys(obj[propName]).length === 0
    ) {
      delete obj[propName];
    }
  }
  return obj;
};
