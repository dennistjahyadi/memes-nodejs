const { Memes, sequelize } = require("../utils/db");

const fetchMemes = async (req, res) => {
  var limit = req.query.limit;
  var offset = req.query.offset;
  var userId = req.query.user_id;
  if (limit) limit = parseInt(limit);
  else limit = 20;

  if (!userId) userId = -1;
  if (!offset) offset = 0;
  // const memes = await Memes.findAll({
  //   limit: limit,
  //   offset: offset,
  // });

  // SELECT count(likes.meme_id) FROM likes
  // 		WHERE likes.meme_id = memes.id and likes.like = 1) as total_like

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
    limit: limit,
    offset: offset,
  });
  const result = {
    "memes": memes
  }

  return res.send(result);
};

module.exports = { fetchMemes };
