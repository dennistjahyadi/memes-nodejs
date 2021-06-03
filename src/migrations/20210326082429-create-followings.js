'use strict';
const UsersModel = require("../models/users");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Followings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      user_id: {
        type: Sequelize.BIGINT,
        references: {
          model: "Users", 
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'cascade',
        onDelete: 'SET NULL'
      },
      following_user_id: {
        type: Sequelize.BIGINT,
        references: {
          model: "Users", 
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'cascade',
        onDelete: 'SET NULL'
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
    await queryInterface.dropTable('Followings');
  }
};
