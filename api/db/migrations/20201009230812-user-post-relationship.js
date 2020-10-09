'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.addColumn('Quizzes', 'userId', {
      type: Sequelize.UUID(),
      references: {
        model: 'Users',
        key: 'id',
      },
    }),

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('Quizzes', 'userId')
  },
};
