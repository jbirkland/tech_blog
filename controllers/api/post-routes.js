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

router.get('/posts/:id', async (req, res) => {
  try{ 
      const postData = await Post.findByPk(req.params.id);
      if(!postData) {
          res.status(404).json({message: 'No post with this id!'});
          return;
      }
      const post = postData.get({ plain: true });
      res.render('edit-post', post);
    } catch (err) {
        res.status(500).json(err);
    };     
});

// router.put('/:id', async (req, res) => {
 
//   try {
//     const editPost = await Post.update(
//       {
//         title: req.body.title,
//         content: req.body.content,
//         comment: req.body.comment,
//       },
//       {
//         where: {
//           id: req.params.id,
//         },
//       }
//     );
    
//     res.status(200).json(editPost);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });



module.exports = router;