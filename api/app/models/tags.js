'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tags extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tags.hasMany(models.Users, { foreignKey: "id" });
      Tags.hasMany(models.Posts, { foreignKey: "id" });
    }
  };
  tags.init({
    name: DataTypes.STRING,
    icon: DataTypes.STRING,
    count: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tags',
  });
  return Tags;
};