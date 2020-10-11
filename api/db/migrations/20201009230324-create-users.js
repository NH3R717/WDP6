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
      // stateId: {
      //   type: Sequelize.UUID,
      //   unique: true,
      //   onDelete: 'CASCADE',
      //   references: {
      //     model: 'states',
      //     key: 'id',
      // },
      // },
      // tagsId: {
      //   type: Sequelize.STRING,
      //   unique: true,
      //   onDelete: 'CASCADE',
      //   references: {
      //     model: 'tags',
      //     key: 'id',
      // },
      // },
      // postsId: {
      //   type: Sequelize.STRING,
      //   unique: true,
      //   onDelete: 'CASCADE',
      //   references: {
      //     model: 'posts',
      //     key: 'id',
      // },
      // },
      // commentsId: {
      //   type: Sequelize.STRING,
      //   unique: true,
      //   onDelete: 'CASCADE',
      //   references: {
      //     model: 'comments',
      //     key: 'id',
      // },
      // },
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