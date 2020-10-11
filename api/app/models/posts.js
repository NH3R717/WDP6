'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Posts.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      validate: {
        // validates to UUID version 4
        isUUID: { args: 4, msg: "Id not valid, please try again." },
        // unique:true,
      },
    },
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    commentCount: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    tagsId: DataTypes.INTEGER,
    totalVotes: DataTypes.INTEGER,
    commentsId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'posts',
  });
  Posts.associate = function (models) {
  Posts.belongsTo(models.users, { foreignKey: 'postId' });
  //     Post.hasMany(models.Tags, { foreignKey: 'tagId' })
  //     Post.hasMany(models.Comments, { foreignKey: 'commentId' })
    };
  return Posts;
};