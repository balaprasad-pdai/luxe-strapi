module.exports = [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "*.digitaloceanspaces.com", // <= Allow all spaces and CDN
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "*.digitaloceanspaces.com",
          ],
        },
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  {
    name: "strapi::body",
    config: {
      // Increase request body size limits for file uploads
      jsonLimit: "400mb",
      formLimit: "400mb",
      textLimit: "400mb",
    },
  },
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
