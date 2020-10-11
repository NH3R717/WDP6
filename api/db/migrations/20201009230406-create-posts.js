'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        unique: true,
      //   onDelete: 'CASCADE',
      //   references: {
      //     model: 'users',
      //     key: 'postsId',
      // },
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
      title: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.TEXT
      },
      commentCount: {
        type: Sequelize.INTEGER
      },
      // userId: {
      //   type: Sequelize.INTEGER
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
      totalVotes: {
        type: Sequelize.INTEGER
      },
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
    await queryInterface.dropTable('posts');
  }
};