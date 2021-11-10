const withPWA = require("next-pwa");

module.exports = withPWA(
  (module.exports = {
    reactStrictMode: true,
    images: {
      domains: [
        "old.northfloridachiropracticphysicaltherapy.com",
        "northfloridachiropracticphysicaltherapy.crt",
        "i0.wp.com",
        "i1.wp.com",
        "i2.wp.com",
        "res.cloudinary.com",
      ],
    },
  })
);
