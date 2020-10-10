'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.addColumn('Post', 'postId', {
      type: Sequelize.UUID(),
      references: {
        model: 'Users',
        key: 'id',
      },
    }),

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('Post', 'postId')
  },
};
