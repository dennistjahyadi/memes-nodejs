'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Memes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      code: { 
        type: Sequelize.STRING,
        unique: true
      },
      title: {
        type: Sequelize.TEXT
      },
      type: {
        type: Sequelize.STRING
      },
      images: {
        type: Sequelize.TEXT
      },
      tags: {
        type: Sequelize.TEXT
      },
      post_section: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Memes');
  }
};