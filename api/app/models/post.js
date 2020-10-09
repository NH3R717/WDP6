'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Post.init({
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
    modelName: 'post',
  });
  Post.associate = function (models) {
    Post.hasMany(models.Questions, { foreignKey: "quizId" });
    Post.belongsTo(models.Users, { foreignKey: 'userId' });
  };
  return post;
};