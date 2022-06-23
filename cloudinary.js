const cloudinary = require("cloudinary");
cloudinary.config({
  cloud_name: "misoo-7699x",
  api_key: "223199734375535",
  api_secret: "GxWSy0ZZw7yPJZ9jBBuhZn4IPZg",
});

module.exports = { cloudinary };
