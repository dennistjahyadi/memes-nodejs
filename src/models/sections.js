"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Sections extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Sections.init(
    {
      name: DataTypes.STRING,
      images: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Sections",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Sections;
};
