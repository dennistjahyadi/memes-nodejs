"use strict";
const { Model } = require("sequelize");
const MemesModel = require("../models/memes");

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
      modelName: "Likes",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Likes;
};
