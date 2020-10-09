'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  user.init({
    id: DataTypes.UUID,
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
  return user;
};