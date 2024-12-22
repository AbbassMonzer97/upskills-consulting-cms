const { isEmpty, merge } = require("lodash/fp");
declare const strapi;
const getModelPopulationAttributes = (model) => {
  if (model.uid === "plugin::upload.file") {
    const { related, ...attributes } = model.attributes;
    return attributes;
  }

  return model.attributes;
};

export const getFullPopulateObject = (modelUid, maxDepth = 20) => {
  if (maxDepth <= 1) {
    return true;
  }
  if (modelUid === "admin::user") {
    return undefined;
  }

  const populate = {};
  const model = strapi.getModel(modelUid);
  for (const [key, value] of Object.entries(
    getModelPopulationAttributes(model)
  )) {
    const val = value as {
      type: string;
      component: string;
      target: string;
      components: any;
    };
    if (val) {
      if (val.type === "component") {
        populate[key] = getFullPopulateObject(val.component, maxDepth - 1);
      } else if (val.type === "dynamiczone") {
        const dynamicPopulate = val.components.reduce((prev, cur) => {
          const curPopulate = getFullPopulateObject(cur, maxDepth - 1);
          return curPopulate === true ? prev : merge(prev, curPopulate);
        }, {});
        populate[key] = isEmpty(dynamicPopulate) ? true : dynamicPopulate;
      } else if (val.type === "relation") {
        const relationPopulate = getFullPopulateObject(
          val.target,
          maxDepth - 1
        );
        if (relationPopulate) {
          populate[key] = relationPopulate;
        }
      } else if (val.type === "media") {
        populate[key] = true;
      }
    }
  }
  return isEmpty(populate) ? true : { populate };
};
