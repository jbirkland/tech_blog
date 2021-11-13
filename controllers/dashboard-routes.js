const router = require("express").Router();
const sequelize = require('../config/connection');
const {User, Post, Comment} = require("../models");
const withAuth = require("../utils/auth");


router.get('/', withAuth, (req, res) => {
  Post.findAll({
     where: {
     user_id: req.session.user_id
    },
        attributes: ['id','title','content','created_at'],
        include: [{
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                  model: User,
                  attributes: ['username']
                }
        },
              {
                  model: User,
                  attributes: ['username']
              }
          ]
      })
      .then(PostData => {
          const posts = PostData.map(post => post.get({ plain: true }));
          res.render('dashboard', { posts, loggedIn: true });
      })
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});


// router.get("/newpost", async (req, res) => {
//   console.log("newpost route")
//   try {
//     const posts = await Post.findAll({
//       include: Comment
//     });
//     const postData = posts.map((post) => post.get({ plain: true }));
//     console.log(postData)
//     res.render("newpost", {
//       postData,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;