'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        unique: true,
      },
      username: {
        type: Sequelize.STRING,
        unique: true,
      },
      password: {
        type: Sequelize.STRING
      },
      avatar: {
        type: Sequelize.BLOB
      },
      city: {
        type: Sequelize.STRING
      },
      stateId: {
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
        unique: true,
      },
      tagsId: {
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
        unique: true,
      },
      postId: {
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
        unique: true,
      },
      commentsId: {
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
        unique: true,
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
    await queryInterface.dropTable('users');
  }
};