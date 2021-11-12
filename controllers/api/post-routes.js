const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");


// router.get('/', (req, res) => {
  
// })


router.post("/", withAuth, async (req, res) => {
  try {
    const userData = await Post.create(
      req.body,
      );

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.loggedIn = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});



module.exports = router;