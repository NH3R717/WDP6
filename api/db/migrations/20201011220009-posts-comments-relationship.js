'use strict';

module.exports = {
  up: async(queryInterface, Sequelize) =>
  queryInterface.addColumn('posts', 'commentsId', {
      type: Sequelize.UUID(),
      references: {
          model: 'comments',
          key: 'id',
      },
  }),

down: async(queryInterface, Sequelize) => {
  queryInterface.removeColumn('posts', 'commentsId')
},
};