'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Notifications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      user_id_dest: {
        type: Sequelize.BIGINT
      },
      user_id_from: {
        type: Sequelize.BIGINT
      },
      meme_id: {
        type: Sequelize.BIGINT
      },
      main_comment_id: {
        type: Sequelize.BIGINT
      },
      current_comment_id: {
        type: Sequelize.BIGINT
      },
      messages: {
        type: Sequelize.TEXT
      },
      type: {
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
    await queryInterface.dropTable('Notifications');
  }
};