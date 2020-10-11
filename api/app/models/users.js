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
      // define association here
    }
  };
  Users.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      validate: {
        // validates to UUID version 4
        isUUID: { args: 4, msg: "Id not valid, please try again." },
      },
      unique: true,
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    avatar: DataTypes.BLOB,
    city: DataTypes.STRING,
    stateId: {
      type: DataTypes.UUID,
      unique: true,
    },
    tagsId: {
      type: DataTypes.UUID,
      unique: true,
    },
    postsId: {
      type: DataTypes.UUID,
      unique: true,
    },
    commentsId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users',
  });
  Users.associate = function (models) {
    Users.hasOne(models.states, { foreignKey: 'stateId' });
    // Users.hasOne(models.posts, { foreignKey: 'username' })
    Users.hasMany(models.posts, { foreignKey: 'postsId' });
    Users.hasMany(models.tags, { foreignKey: 'tagsId' });
    Users.hasMany(models.comments, { foreignKey: 'commentsId' });
  };
  return Users;
};