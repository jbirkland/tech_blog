const router = require("express").Router();
const {User, Post, Comment} = require("../models");
const withAuth = require("../utils/auth");


//homepage route
router.get("/", async (req, res) => {
  console.log("dash route")
  try {
    const posts = await Post.findAll({
      include: Comment
    });
    const postData = posts.map((post) => post.get({ plain: true }));
    console.log(postData)
    res.render("dashboard", {
      postData,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/newpost", async (req, res) => {
  console.log("newpost route")
  try {
    const posts = await Post.findAll({
      include: Comment
    });
    const postData = posts.map((post) => post.get({ plain: true }));
    console.log(postData)
    res.render("newpost", {
      postData,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;