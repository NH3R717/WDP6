'use strict';

module.exports = {
  up: async(queryInterface, Sequelize) =>
  queryInterface.addColumn('users', 'tagsId', {
      type: Sequelize.UUID(),
      references: {
          model: 'tags',
          key: 'id',
      },
  }),

down: async(queryInterface, Sequelize) => {
  queryInterface.removeColumn('users', 'tagsId')
},
};