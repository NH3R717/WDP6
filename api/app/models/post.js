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
      Post.hasOne(models.Users, { foreignKey: "id" });
      Post.hasMany(models.Tags, { foreignKey: "id" });
    }
  };
  post.init({
    id: {
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID(),
      validate: {
        isUUID: { args: 4, msg: "Id not valid, please try again" },
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: { args: false, msg: "Title is required" },
    },
    content: {
      type: DataTypes.STRING,
      allowNull: { args: false, msg: "Post content is required" },
    },
    commentCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    tags: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    votes: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    comments: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'post',
  });
  return Post;
};