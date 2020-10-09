'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
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
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    avatar: DataTypes.BLOB,
    city: DataTypes.STRING,
    stateId: DataTypes.INTEGER,
    tagsId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER,
    commentsId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  User.associate = function (models) {
    User.hasOne(models.State, { foreignKey: 'stateId' });
    User.hasMany(models.Post, { foreignKey: 'postId' })
    User.belongsToMany(models.Tags, { foreignKey: 'tagId' })
    User.belongsToMany(models.Comments, { foreignKey: 'commentId' })
  };
  return User;
};

// Questions.belongsTo(models.Quizzes, { foreignKey: "quizId" });
// Quizzes.hasMany(models.Questions, { foreignKey: "quizId" });