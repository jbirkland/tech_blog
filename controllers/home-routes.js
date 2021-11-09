const router = require("express").Router();
const {User, Post, Comment} = require("../models");
const withAuth = require("../utils/auth");


//homepage route
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: Comment
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render("homepage", {
      posts,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//login route
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }

  res.render("login");
});


module.exports = router;