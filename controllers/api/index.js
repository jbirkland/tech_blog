const router = require("express").Router();
const userRoutes = require("./user-Routes");
// const postRoutes = require("./postRoutes");


router.use('/users', userRoutes);
// router.use('/posts', postRoutes);


module.exports = router;