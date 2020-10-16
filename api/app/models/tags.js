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
      // define association here
    }
  };
  Tags.init({
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
    name: DataTypes.STRING,
    icon: DataTypes.BLOB,
    count: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tags',
  });
  Tags.associate = function (models) {
    Tags.belongsToMany(models.users, { through: 'tagsId' });
    Tags.belongsToMany(models.posts, { through: 'tagsId' });
  };
  return Tags;
};