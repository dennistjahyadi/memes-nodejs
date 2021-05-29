'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notifications extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Notifications.init({
    user_id_dest: DataTypes.BIGINT,
    user_id_from: DataTypes.BIGINT,
    meme_id: DataTypes.BIGINT,
    current_comment_id: DataTypes.BIGINT,
    main_comment_id: DataTypes.BIGINT,
    messages: DataTypes.TEXT,
    type: DataTypes.STRING // meme_comment, sub_comment, following
  }, {
    sequelize,
    modelName: 'Notifications',
    createdAt: "created_at",
    updatedAt: "updated_at",
  });
  return Notifications;
};