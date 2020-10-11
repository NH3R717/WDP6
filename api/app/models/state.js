'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class State extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  State.init({
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
    state: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'state',
  });
  State.associate = function (models) {
    // console.log('>>>', models)
    State.belongsTo(models.user, { foreignKey: 'stateId' });
  };
  return State;
};