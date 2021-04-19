const { Memes, Likes, sequelize } = require("../utils/db");
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op
const fetchMemes = async (req, res) => {
  var limit = req.query.limit;
  var offset = req.query.offset;
  var userId = req.query.user_id;
  var postSection = req.query.post_section
  if (!limit) limit = 20

  if (!userId) userId = -1;
  if (!offset) offset = 0;

  var where = {}
  if(postSection) where['post_section'] = {[Op.like]: `%${postSection}%`}

  const memes = await Memes.findAll({
    where
    ,
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
  });

  memes.forEach((meme)=>{
    meme.images = JSON.parse(meme.images)
    meme.tags = JSON.parse(meme.tags)
  })

  const result = {
    "memes": memes
  }

  return res.send(result);
};

const fetchLikedMemes = async (req, res) => {
  var limit = req.query.limit;
  var offset = req.query.offset;
  var userId = req.query.user_id;
  if (!limit) limit = 20

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
    include: [{
        model: Likes,
        where: { like: 1, user_id: userId },
        required: true
    }],
    limit: parseInt(limit),
    offset: parseInt(offset),
  });

  memes.forEach((meme)=>{
    meme.images = JSON.parse(meme.images)
    meme.tags = JSON.parse(meme.tags)
  })

  const result = {
    "memes": memes
  }

  return res.send(result);
}

module.exports = { fetchMemes, fetchLikedMemes };
