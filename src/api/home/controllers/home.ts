/**
 * home controller
 */

// import { factories } from "@strapi/strapi";

// export default factories.createCoreController(
//   "api::home.home",
//   ({ strapi }) => ({
//     async find(ctx) {
//       // Include `populate=*` by default
//       ctx.query = {
//         ...ctx.query,
//         populate: "*", // Automatically include all relational fields
//       };

//       // Call the default `find` method with the updated query
//       const { data, meta } = await super.find(ctx);

//       return { data, meta };
//     },
//   })
// );

import { factories } from "@strapi/strapi";

export default factories.createCoreController("api::home.home");
