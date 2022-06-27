const express = require("express");
const router = express.Router();
const moment = require("moment");
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
    const posts = await Post.find()
      .populate("user")
      .sort({ createdAt: -1 })
      .exec();
    res.send(posts);
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/likeorunlikepost", async (req, res) => {
  try {
    const post = await Post.findOne({ _id: req.body.postid });
    var likes = post.likes;
    if (likes.find((obj) => obj.user.toString() === req.body.userid)) {
      const temp = likes.filter(
        (obj) => obj.user.toString() !== req.body.userid
      );
      post.likes = temp;
      await Post.updateOne({ _id: req.body.postid }, post);
      res.send("Post unliked successfully");
    } else {
      likes.push({
        user: req.body.userid,
        date: moment().format("MMM DD yyyy"),
      });
      await Post.updateOne({ _id: req.body.postid }, post);
      res.send("Like successfully");
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

router.post("/addcomment", async (req, res) => {
  try {
    const post = await Post.findOne({ _id: req.body.postid });
    var comments = post.comments;
    comments.push({
      user: req.body.userid,
      date: moment().format("MMM DD yyyy"),
      comment: req.body.comment,
    });

    post.comments = comments;
    await Post.updateOne({ _id: req.body.postid }, post);
    res.send("Comment add sucessfully");
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

module.exports = router;
