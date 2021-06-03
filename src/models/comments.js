"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Comments.init(
    {
      meme_id: DataTypes.BIGINT,
      user_id: DataTypes.BIGINT,
      messages: DataTypes.TEXT,
      comment_id: DataTypes.BIGINT
    },
    {
      sequelize,
      modelName: "Comments",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Comments;
};
