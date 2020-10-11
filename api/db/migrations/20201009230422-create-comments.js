'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('comments', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        unique: true,
        onDelete: 'CASCADE',
      //   references: {
      //     model: 'users',
      //     key: 'commentsId',
      // },
      },
      content: {
        allowNull: false,
        type: Sequelize.STRING
      },
      user: {
        type: Sequelize.STRING,
        unique: true,
      //   onDelete: 'CASCADE',
      //   references: {
      //     model: 'users',
      //     key: 'username',
      // },
      },
      count: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('comments');
  }
};