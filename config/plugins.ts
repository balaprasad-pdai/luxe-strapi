// module.exports = ({ env }) => {
//   const endpoint = env("DO_SPACE_ENDPOINT");
//   const space = env("DO_SPACE_BUCKET");
//   const cdn = env("DO_SPACE_CDN");

//   return {
//     upload: {
//       config: {
//         provider: "strapi-provider-upload-do",
//         providerOptions: {
//           key: env("DO_SPACE_ACCESS_KEY"),
//           secret: env("DO_SPACE_SECRET_KEY"),
//           endpoint,
//           space,
//           cdn: cdn || undefined,
//         },
//         actionOptions: {
//           upload: {},
//           delete: {},
//         },
//       },
//     },
//   };
// };



module.exports = ({ env }) => {
  const endpoint = env("DO_SPACE_ENDPOINT");
  const space = env("DO_SPACE_BUCKET");
  const cdn = env("DO_SPACE_CDN");

  return {
    upload: {
      config: {
        provider: "strapi-provider-upload-do",
        providerOptions: {
          key: env("DO_SPACE_ACCESS_KEY"),
          secret: env("DO_SPACE_SECRET_KEY"),
          endpoint: endpoint, // correct
          space,
          cdn: cdn,// correct
          baseUrl: cdn, // 👈 very important
        },
      },
    },
  };
};
