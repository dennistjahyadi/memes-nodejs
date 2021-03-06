"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      email_verified_at: DataTypes.DATE,
      password: DataTypes.STRING,
      photo_url: DataTypes.STRING,
      remember_token: DataTypes.STRING,
      firebase_token: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Users",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Users;
};
