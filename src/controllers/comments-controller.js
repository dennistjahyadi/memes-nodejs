const { Comments, Users, sequelize } = require("../utils/db");
const dateFormat = require("dateformat");

const fetchMainComments = async (req, res) => {
  var limit = req.query.limit;
  var offset = req.query.offset;
  var userId = req.query.user_id;
  var memeId = req.query.meme_id;
  var commentId = req.query.comment_id;
  var sort = req.query.sort;

  if (!limit) limit = 20;

  if (!offset) offset = 0;

  if (!sort) sort = "asc";

  var where = {};
  if (userId) {
    where["user_id"] = userId;
  }
  if (memeId) {
    where["meme_id"] = memeId;
  }
  if (commentId) {
    where["comment_id"] = commentId;
  } else {
    where["comment_id"] = null;
  }

  const comments = await Comments.findAll({
    attributes: [
      "id",
      "meme_id",
      "user_id",
      "messages",
      "comment_id",
      [
        sequelize.fn(
          "date_format",
          sequelize.col("comments.created_at"),
          "%Y-%m-%d %H:%i:%S"
        ),
        "created_at",
      ],
      [
        sequelize.fn(
          "date_format",
          sequelize.col("comments.updated_at"),
          "%Y-%m-%d %H:%i:%S"
        ),
        "updated_at",
      ],
    ],
    include: [
      {
        model: Users,
        required: true,
        as: "user",
      },
      {
        model: Comments,
        attributes: [
          "id",
          "meme_id",
          "user_id",
          "messages",
          "comment_id",
          [
            sequelize.fn(
              "date_format",
              sequelize.col("comments.created_at"),
              "%Y-%m-%d %H:%i:%S"
            ),
            "created_at",
          ],
          [
            sequelize.fn(
              "date_format",
              sequelize.col("comments.updated_at"),
              "%Y-%m-%d %H:%i:%S"
            ),
            "updated_at",
          ],
        ],
        include: [
          {
            model: Users,
            required: true,
            as: "user",
          },
        ],
        required: true,
        as: "subcomments",
        limit: 2,
        order: [["id", "desc"]],
      },
    ],
    where,
    limit: parseInt(limit),
    offset: parseInt(offset),
    order: [["id", sort]],
  });

  var dateNow = dateFormat(new Date(), "yyyy-mm-dd h:MM:ss");

  const result = {
    status: "OK",
    current_datetime: dateNow,
    comments: comments,
  };
  return res.send(result);
};

const fetchComments = async (req, res) => {
  var limit = req.query.limit;
  var offset = req.query.offset;
  var userId = req.query.user_id;
  var memeId = req.query.meme_id;
  var commentId = req.query.comment_id;
  var sort = req.query.sort;

  if (!limit) limit = 20;

  if (!offset) offset = 0;

  if (!sort) sort = "asc";

  var where = {};
  if (userId) {
    where["user_id"] = userId;
  }
  if (memeId) {
    where["meme_id"] = memeId;
  }
  if (commentId) {
    where["comment_id"] = commentId;
  } else {
    where["comment_id"] = null;
  }

  const comments = await Comments.findAll({
    attributes: [
      "id",
      "meme_id",
      "user_id",
      "messages",
      "comment_id",
      [
        sequelize.fn(
          "date_format",
          sequelize.col("comments.created_at"),
          "%Y-%m-%d %H:%i:%S"
        ),
        "created_at",
      ],
      [
        sequelize.fn(
          "date_format",
          sequelize.col("comments.updated_at"),
          "%Y-%m-%d %H:%i:%S"
        ),
        "updated_at",
      ],
    ],
    include: [
      {
        model: Users,
        required: true,
        as: "user",
      },
    ],
    where,
    limit: parseInt(limit),
    offset: parseInt(offset),
    order: [["id", sort]],
  });

  var dateNow = dateFormat(new Date(), "yyyy-mm-dd h:MM:ss");

  const result = {
    status: "OK",
    current_datetime: dateNow,
    comments: comments,
  };
  return res.send(result);
};

const insertComments = async (req, res) => {
  const memeId = req.body.meme_id;
  const userId = req.body.user_id;
  const messages = req.body.messages;
  const commentId = req.body.comment_id;
  if (!memeId || !userId) {
    const result = {
      status: "ERROR",
      message: "wrong param",
    };
    return res.send(result);
  }

  if (!(messages && messages.trim().length > 0)) {
    const result = {
      status: "ERROR",
      message: "Messages cannot be empty bruuh!!",
    };
    return res.send(result);
  }

  var param = {};
  param["user_id"] = userId;
  param["meme_id"] = memeId;
  param["messages"] = messages;
  if (commentId) {
    param["comment_id"] = commentId;
  }

  const comments = await Comments.create({ ...param });

  const result = {
    status: "OK",
    result: 1,
    data: comments,
  };
  return res.send(result);
};

module.exports = { fetchMainComments, fetchComments, insertComments };
