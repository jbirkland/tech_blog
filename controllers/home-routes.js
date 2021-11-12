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
  console.log("hello",req.session)
  if (req.session.loggedIn) {
    console.log("Hello There")
    res.redirect("/dashboard");
    return;
  }
console.log("This is a xon")
  res.render("login");
});


module.exports = router;