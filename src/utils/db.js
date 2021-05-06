const { Sequelize } = require("sequelize");
const MemesModel = require("../models/memes");
const CommentsModel = require("../models/comments");
const LikesModel = require("../models/likes");
const SectionsModel = require("../models/sections");
const TagsModel = require("../models/tags");
const UsersModel = require("../models/users");
const dotenv = require("dotenv");
dotenv.config();

const dbName = process.env.DB_NAME;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const sequelize = new Sequelize(dbName, username, password, {
  host: "localhost",
  dialect: "mysql",
});

const authenticate = async () => {
  try {
    await sequelize.authenticate();
    console.log("Daatabase connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

authenticate();

const Memes = MemesModel(sequelize, Sequelize);
const Comments = CommentsModel(sequelize, Sequelize);
const Likes = LikesModel(sequelize, Sequelize);
const Sections = SectionsModel(sequelize, Sequelize);
const Tags = TagsModel(sequelize, Sequelize);
const Users = UsersModel(sequelize, Sequelize);

Memes.hasMany(Likes, {foreignKey: "meme_id"})
Comments.belongsTo(Users, {as: 'user', foreignKey: "user_id"})

module.exports = {
  sequelize,
  Memes,
  Comments,
  Likes,
  Sections,
  Tags,
  Users,
};
