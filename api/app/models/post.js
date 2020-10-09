'use strict';
const {
  Model, STRING
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Post.hasOne(models.User, { foreignKey: "id" });
      Post.hasMany(models.Tags, { foreignKey: "id" });
      Post.hasMany(models.Comments, { foreignKey: "id" });
    }
  };
  post.init({
    id: {
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID(),
      // validate: {
      //   isUUID: { args: 4, msg: "ID is necessary." },
      // },
    },
    user: {
      type: DataTypes.STRING,
      allowNull: { args: false, msg: "User is required." },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: { args: false, msg: "Title is required." },
    },
    content: {
      type: DataTypes.STRING,
      allowNull: { args: false, msg: "Post content is required." },
    },
    commentCount: {
      type: DataTypes.INTEGER,
      allowNull: { args: false, msg: "Comment count is required." },
    },
    totalVotes: {
      type: DataTypes.INTEGER,
      allowNull: { args: false, msg: "Vote count should be at least zero." },
    },
    tagsId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    commentsID: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'post',
  });
  return Post;
};