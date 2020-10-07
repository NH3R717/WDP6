'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Users.hasMany(models.Tags, { foreignKey: "id" });
      Users.hasMany(models.Posts, { foreignKey: "id" });
    }
  };
  users.init({
    userId: {
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID(),
      validate: {
        isUUID: { args: 4, msg: "Id not valid, please try again" },
      },
    },
    username: {
      type: DataTypes.STRING,
      unique: {
        args: true,
        msg: "Username is already in use, choose another one.",
      },
      allowNull: { args: false, msg: "Username is required" },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUUID: { args: 4, msg: "password not valid, use at least 4 characters" },
      },
    },
    avatar: {
      type: DataTypes.BLOB,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tags: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    }
  }, {
    sequelize,
    modelName: 'users',
  });
  return Users;
};