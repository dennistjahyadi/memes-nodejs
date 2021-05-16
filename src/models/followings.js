"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Followings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Followings.init(
    {
      user_id: DataTypes.BIGINT,
      following_user_id: DataTypes.BIGINT,
    },
    {
      sequelize,
      modelName: "Followings",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Followings;
};
