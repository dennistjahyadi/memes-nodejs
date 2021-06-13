const { Memes, Likes, Sections, Users, Followings, sequelize } = require("../utils/db");
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;
const fetchMemes = async (req, res) => {
  var limit = req.query.limit;
  var offset = req.query.offset;
  var userId = req.query.user_id;
  var postSection = req.query.post_section;
  if (!limit) limit = 20;

  if (!userId) userId = -1;
  if (!offset) offset = 0;
  console.log("aaa: "+offset)
  var where = {};
  if (postSection) where["post_section"] = { [Op.like]: `%${postSection}%` };

  const memes = await Memes.findAll({
    where,
    attributes: [
      "id",
      "code",
      "title",
      "type",
      "images",
      "tags",
      "post_section",
      "created_at",
      "updated_at",
      [
        sequelize.literal(`(
                SELECT COUNT(*)
                FROM likes
                WHERE
                    likes.meme_id = Memes.id
                    AND
                    likes.like = 1
            )`),
        "total_like",
      ],
      [
        sequelize.literal(`(
          SELECT COUNT(*)
          FROM comments
          WHERE
            comments.meme_id = Memes.id
          )`),
        "total_comment",
      ],
      [
        sequelize.literal(`(
          SELECT likes.like
          FROM likes
          WHERE
            likes.meme_id = memes.id and likes.user_id = ${userId}
          )`),
        "is_liked",
      ],
    ],
    include: [
      {
        model: Users,
        required: false,
        as: "user",
      },
    ],
    limit: parseInt(limit),
    offset: parseInt(offset),
    order: sequelize.random(),
  });

  memes.forEach((meme) => {
    meme.images = JSON.parse(meme.images);
    meme.tags = JSON.parse(meme.tags);
  });

  const result = {
    status: "OK",
    memes: memes,
  };

  return res.send(result);
};

const fetchMemesJustFollowing = async (req, res) => {
  var limit = req.query.limit;
  var offset = req.query.offset;
  var userId = req.query.user_id;
  if (!limit) limit = 20;

  if (!userId) userId = -1;
  if (!offset) offset = 0;
  
  const followings = await Followings.findAll({
    where: {user_id: userId}
  })
  const userIdList = followings.map(flw => flw['following_user_id'])

  var where = {};
  where["user_id"] = userIdList
  userIdList.push(userId)
  const memes = await Memes.findAll({
    where,
    attributes: [
      "id",
      "code",
      "title",
      "type",
      "images",
      "tags",
      "post_section",
      "created_at",
      "updated_at",
      [
        sequelize.literal(`(
                SELECT COUNT(*)
                FROM likes
                WHERE
                    likes.meme_id = Memes.id
                    AND
                    likes.like = 1
            )`),
        "total_like",
      ],
      [
        sequelize.literal(`(
          SELECT COUNT(*)
          FROM comments
          WHERE
            comments.meme_id = Memes.id
          )`),
        "total_comment",
      ],
      [
        sequelize.literal(`(
          SELECT likes.like
          FROM likes
          WHERE
            likes.meme_id = memes.id and likes.user_id = ${userId}
          )`),
        "is_liked",
      ],
    ],
    include: [
      {
        model: Users,
        required: false,
        as: "user",
      },
    ],
    limit: parseInt(limit),
    offset: parseInt(offset),
    order: [["id", "desc"]],
  });

  memes.forEach((meme) => {
    meme.images = JSON.parse(meme.images);
    meme.tags = JSON.parse(meme.tags);
  });

  const result = {
    status: "OK",
    memes: memes,
  };

  return res.send(result);
}

const fetchLikedMemes = async (req, res) => {
  var limit = req.query.limit;
  var offset = req.query.offset;
  var userId = req.query.user_id;
  if (!limit) limit = 20;

  if (!userId) userId = -1;
  if (!offset) offset = 0;

  const memes = await Memes.findAll({
    attributes: [
      "id",
      "code",
      "title",
      "type",
      "images",
      "tags",
      "post_section",
      "created_at",
      "updated_at",
      [
        sequelize.literal(`(
                SELECT COUNT(*)
                FROM likes
                WHERE
                    likes.meme_id = Memes.id
                    AND
                    likes.like = 1
            )`),
        "total_like",
      ],
      [
        sequelize.literal(`(
          SELECT COUNT(*)
          FROM comments
          WHERE
            comments.meme_id = Memes.id
          )`),
        "total_comment",
      ],
      [
        sequelize.literal(`(
          SELECT likes.like
          FROM likes
          WHERE
            likes.meme_id = memes.id and likes.user_id = ${userId}
          )`),
        "is_liked",
      ],
    ],
    include: [
      {
        model: Likes,
        where: { like: 1, user_id: userId },
        required: true,
        order: [["id", "desc"]],
      },
    ],
    limit: parseInt(limit),
    offset: parseInt(offset),
  });

  memes.forEach((meme) => {
    meme.images = JSON.parse(meme.images);
    meme.tags = JSON.parse(meme.tags);
  });

  const result = {
    status: "OK",
    memes: memes,
  };

  return res.send(result);
};

const fetchMyMemes = async (req, res) => {
  var limit = req.query.limit;
  var offset = req.query.offset;
  var userId = req.query.user_id;
  var postSection = req.query.post_section;
  if (!limit) limit = 20;

  if (!userId) userId = -1;
  if (!offset) offset = 0;

  var where = {};
  if (postSection) where["post_section"] = { [Op.like]: `%${postSection}%` };
  where["user_id"] = userId;

  const memes = await Memes.findAll({
    where,
    attributes: [
      "id",
      "code",
      "title",
      "type",
      "images",
      "tags",
      "post_section",
      "created_at",
      "updated_at",
      [
        sequelize.literal(`(
                SELECT COUNT(*)
                FROM likes
                WHERE
                    likes.meme_id = Memes.id
                    AND
                    likes.like = 1
            )`),
        "total_like",
      ],
      [
        sequelize.literal(`(
          SELECT COUNT(*)
          FROM comments
          WHERE
            comments.meme_id = Memes.id
          )`),
        "total_comment",
      ],
      [
        sequelize.literal(`(
          SELECT likes.like
          FROM likes
          WHERE
            likes.meme_id = memes.id and likes.user_id = ${userId}
          )`),
        "is_liked",
      ],
    ],
    limit: parseInt(limit),
    offset: parseInt(offset),
    order: [["id", "desc"]],
  });

  memes.forEach((meme) => {
    meme.images = JSON.parse(meme.images);
    meme.tags = JSON.parse(meme.tags);
  });

  const result = {
    status: "OK",
    memes: memes,
  };

  return res.send(result);
};

const insertMemes = async (req, res) => {
  var user_id = req.body.user_id;
  var code = Date.now();
  var title = req.body.desc;
  var isPhoto = req.body.is_photo;
  var type = isPhoto ? "Photo" : "Animated";
  var images = req.body.data;
  var tags = "[]";
  var post_section = req.body.post_section;
  if (!user_id || isPhoto == null || !images || !post_section) {
    const result = {
      status: "ERROR",
      message: "wrong param",
    };
    return res.send(result);
  }

  const totalSection = await Sections.count({
    where: { name: { [Op.like]: post_section } },
  });

  if (totalSection == 0) {
    await Sections.create({
      name: post_section,
    });
  }

  const meme = await Memes.create({
    user_id,
    code,
    title,
    type,
    images,
    tags,
    post_section,
  });

  meme.images = JSON.parse(meme.images);
  meme.tags = JSON.parse(meme.tags);

  const result = {
    status: "OK",
    data: meme,
  };

  return res.send(result);
};

const getMeme = async (req, res) => {
  const userId = req.query.user_id
  const memeId = req.query.meme_id

  const memeObj = await Memes.findOne({
    attributes: [
      "id",
      "code",
      "title",
      "type",
      "images",
      "tags",
      "post_section",
      "created_at",
      "updated_at",
      [
        sequelize.literal(`(
                SELECT COUNT(*)
                FROM likes
                WHERE
                    likes.meme_id = Memes.id
                    AND
                    likes.like = 1
            )`),
        "total_like",
      ],
      [
        sequelize.literal(`(
          SELECT COUNT(*)
          FROM comments
          WHERE
            comments.meme_id = Memes.id
          )`),
        "total_comment",
      ],
      [
        sequelize.literal(`(
          SELECT likes.like
          FROM likes
          WHERE
            likes.meme_id = memes.id and likes.user_id = ${userId}
          )`),
        "is_liked",
      ],
    ],
    where: { id: memeId }
  });
  
  memeObj.images = JSON.parse(memeObj.images);
  memeObj.tags = JSON.parse(memeObj.tags);
  const result = {
    status: "OK",
    meme: memeObj,
  };
  return res.send(result);
}

module.exports = { fetchMemes, fetchLikedMemes, fetchMyMemes, insertMemes, getMeme, fetchMemesJustFollowing };
