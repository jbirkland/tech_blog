const router = require("express").Router();
const { User, Post, Comment } = require("../../models");
const withAuth = require("../../utils/auth");


// route to create/add a post
router.post('/', async (req, res) => {
  
  try {
  const postData = await Post.create({
          id: req.body.id,
          title: req.body.title,
          content: req.body.content,
          user_id: req.session.user_id,
      });
    console.log(postData)
    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});



module.exports = router;