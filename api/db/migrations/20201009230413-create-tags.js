'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tags', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        unique: true,
        onDelete: 'CASCADE',
      //   references: {
      //     model: 'users',
      //     key: 'tagsId',
      //     model: 'posts',
      //     key: 'tagsId',
      // },
      },
      name: {
        type: Sequelize.STRING
      },
      icon: {
        type: Sequelize.BLOB
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
    await queryInterface.dropTable('tags');
  }
};