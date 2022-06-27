const express = require("express");
const router = express.Router();
const { cloudinary } = require("../cloudinary");
const Post = require("../models/postModal");

router.post("/addpost", async (req, res) => {
  try {
    const uploadRes = await cloudinary.v2.uploader.upload(req.body.image, {
      folder: "instagram-fake",
      use_filename: true,
    });
    req.body.image = uploadRes.url;
    const newPost = new Post(req.body);
    await newPost.save();
    res.send("Post add successfully!");
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

router.get("/getallposts", async (req, res) => {
  try {
    const posts = await Post.find().populate("user");
    res.send(posts);
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = router;
