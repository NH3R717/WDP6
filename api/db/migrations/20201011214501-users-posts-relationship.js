'use strict';

module.exports = {
  up: async(queryInterface, Sequelize) =>
  queryInterface.addColumn('users', 'postsId', {
      type: Sequelize.UUID(),
      references: {
          model: 'posts',
          key: 'id',
      },
  }),

down: async(queryInterface, Sequelize) => {
  queryInterface.removeColumn('users', 'postsId')
},
};
