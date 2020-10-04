'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts', {
      id: {
        allowNull: false,
        primaryKey: true,
        unique: true,
        // type: Sequelize.INTEGER(),
        type: Sequelize.UUID(),
        // defaultValue: Sequelize.UUIDV4,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: { args: false, msg: "Title is required" },
      },
      content: {
        type: Sequelize.TEXT,
        allowNull: { args: false, msg: "Post content is required" },
      },
      commentCount: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      user: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      tags: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true,
      },
      votes: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true,
      },
      comments: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true,
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
    await queryInterface.dropTable('posts');
  }
};