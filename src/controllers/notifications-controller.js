const {
  Notifications,
  Users,
  Memes,
  Comments,
  sequelize,
} = require("../utils/db");
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;

const fetchNotifications = async (req, res) => {
  var userId = req.query.user_id;
  var limit = req.query.limit;
  var offset = req.query.offset;
  if (!limit) limit = 20;
  if (!offset) offset = 0;

  var where = {};
  where["user_id_dest"] = userId;

  const notifications = await Notifications.findAll({
    attributes: [
      "id",
      "user_id_dest",
      "user_id_from",
      "meme_id",
      "current_comment_id",
      "main_comment_id",
      "messages",
      "type",
      "created_at",
      "updated_at",
      [
        sequelize.literal(`(
                SELECT COUNT(*)
                FROM followings
                WHERE
                followings.user_id = ${userId}
                AND
                followings.following_user_id = Notifications.user_id_from
            )`),
        "is_following",
      ],
    ],
    limit: parseInt(limit),
    offset: parseInt(offset),
    where,
    include: [
      {
        model: Users,
        required: true,
        as: "user_from_obj",
      },
      {
        model: Memes,
        required: false,
        as: "meme_obj",
      },
      {
        model: Comments,
        required: false,
        as: "main_comment_obj",
      },
      {
        model: Comments,
        required: false,
        as: "current_comment_obj",
      },
    ],
  });

  notifications.forEach((notif) => {
    try {
      notif.meme_obj.images = JSON.parse(notif.meme_obj.images);
      notif.meme_obj.tags = JSON.parse(notif.meme_obj.tags);
    } catch (ex) {}
  });

  const result = {
    status: "OK",
    notifications: notifications,
  };

  return res.send(result);
};

const insertNotifMemeComment = async (
  user_id_from,
  meme_id,
  current_comment_id
) => {
  // type: meme_comment
  const user = await Users.findOne({
    where: { id: user_id_from },
  });

  const meme = await Memes.findOne({
    where: { id: meme_id },
  });
  const userId = meme.user_id;
  console.log("anjeng");
  console.log(user_id_from);
  console.log(meme.user_id);
  if (user_id_from != meme.user_id) {
    const notification = await Notifications.create({
      user_id_from,
      userId,
      meme_id,
      type: "meme_comment",
      current_comment_id,
      messages: `${user.username} comment to your content`,
    });
  }
};

const insertNotifSubcomment = async (
  user_id_from,
  user_id_dest,
  meme_id,
  current_comment_id,
  main_comment_id
) => {
  // type: sub_comment
  const user = await Users.findOne({
    where: { id: user_id_from },
  });

  if (user_id_from != user_id_dest) {
    const notification = await Notifications.create({
      user_id_from,
      user_id_dest,
      meme_id,
      type: "sub_comment",
      current_comment_id,
      main_comment_id,
      messages: `${user.username} reply your comment`,
    });
  }
};

const insertNotifFollowing = async (user_id_from, user_id_dest) => {
  // type: following
  const user = await Users.findOne({
    where: { id: user_id_from },
  });
  var notifs = await Notifications.findAll({
    where: {
      user_id_from,
    },
    limit: 10,
    order: [["id", "DESC"]],
  });
  var allow = true;
  notifs.forEach((obj) => {
    if (obj.user_id_dest == user_id_dest) {
      allow = false;
    }
  });

  if (allow) {
    await Notifications.create({
      user_id_from,
      user_id_dest,
      type: "following",
      messages: `${user.username} is Following you`,
    });
  }
};

module.exports = {
  fetchNotifications,
  insertNotifFollowing,
  insertNotifMemeComment,
  insertNotifSubcomment,
};
