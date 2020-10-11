'use strict';

module.exports = {
  up: async(queryInterface, Sequelize) =>
  queryInterface.addColumn('users', 'statId', {
      type: Sequelize.UUID(),
      // type: Sequelize.INTEGER(),
      references: {
          model: 'states',
          key: 'id',
      },
  }),

down: async(queryInterface, Sequelize) => {
  queryInterface.removeColumn('users', 'statId')
},
};
