"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Memes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Memes.init(
    {
      user_id: DataTypes.BIGINT,
      code: DataTypes.STRING,
      title: DataTypes.TEXT,
      type: DataTypes.STRING,
      images: DataTypes.TEXT,
      tags: DataTypes.TEXT,
      post_section: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Memes",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Memes;
};
