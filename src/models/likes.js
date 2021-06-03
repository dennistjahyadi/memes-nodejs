"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Likes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Likes.init(
    {
      meme_id: DataTypes.BIGINT,
      user_id: DataTypes.BIGINT,
      like: DataTypes.TINYINT
    },
    {
      sequelize,
      modelName: "likes",
      tableName: "likes",

      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Likes;
};
