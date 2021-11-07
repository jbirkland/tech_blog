const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');
const { User, Post, Comment } = require('../models');

const sequelize = require('../config/connection');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    await User.bulkCreate(seedUsers, {
      individualHooks: true,
      returning: true,
    });
  
    await Post.bulkCreate(seedPosts, {
      individualHooks: true,
      returning: true,
    });
  
    await Comment.bulkCreate(seedComments, {
      individualHooks: true,
      returning: true,
   });
   
    process.exit(0);
  };
  
  seedDatabase();