const {
  Notifications,
  Users,
  Memes,
  Comments,
  sequelize,
} = require("../utils/db");
const { Sequelize } = require("sequelize");
const admin = require("firebase-admin");
const dateFormat = require("dateformat");

var serviceAccount = require("../config/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://memes-network-1554020980788.firebaseio.com"
});

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
    order: [["id", "desc"]],
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
        attributes: [
          "id",
          "meme_id",
          "user_id",
          "messages",
          "comment_id",
          [
            sequelize.fn(
              "date_format",
              sequelize.col("main_comment_obj.created_at"),
              "%Y-%m-%d %H:%i:%S"
            ),
            "created_at",
          ],
          [
            sequelize.fn(
              "date_format",
              sequelize.col("main_comment_obj.updated_at"),
              "%Y-%m-%d %H:%i:%S"
            ),
            "updated_at",
          ],
        ]
      },
      {
        model: Comments,
        required: false,
        as: "current_comment_obj",
        attributes: [
          "id",
          "meme_id",
          "user_id",
          "messages",
          "comment_id",
          [
            sequelize.fn(
              "date_format",
              sequelize.col("current_comment_obj.created_at"),
              "%Y-%m-%d %H:%i:%S"
            ),
            "created_at",
          ],
          [
            sequelize.fn(
              "date_format",
              sequelize.col("current_comment_obj.updated_at"),
              "%Y-%m-%d %H:%i:%S"
            ),
            "updated_at",
          ],
        ]
      },
    ],
  });

  notifications.forEach((notif) => {
    try {
      notif.meme_obj.images = JSON.parse(notif.meme_obj.images);
      notif.meme_obj.tags = JSON.parse(notif.meme_obj.tags);
    } catch (ex) {}
  });
  var dateNow = dateFormat(new Date(), "yyyy-mm-dd H:MM:ss");

  const result = {
    status: "OK",
    notifications: notifications,
    current_datetime: dateNow
  };

  return res.send(result);
};

const insertNotifMemeLiked = async (
  user_id_from,
  meme_id
) => {
  // type: meme_comment
  const notifType = "meme_liked"

  const user = await Users.findOne({
    where: { id: user_id_from },
  });

  const meme = await Memes.findOne({
    where: { id: meme_id },
  });
  const userId = meme.user_id;
  if (user_id_from != meme.user_id) {
    const notification = await Notifications.create({
      user_id_from,
      userId,
      meme_id,
      type: notifType,
      messages: `${user.username} liked your memes`,
    });
    const userDest = await Users.findOne({
      where: { id: userId },
    });
  
    const firebaseToken = userDest.firebase_token
    const photo_url = (userDest.photo_url)?userDest.photo_url : ""
    if(firebaseToken){
      console.log(photo_url)
      console.log(notifType)
      sendPushNotif(firebaseToken, `${user.username} liked your memes`, '', photo_url, notifType, meme_id.toString(), '', '')
    }
  }
};

const insertNotifMemeComment = async (
  user_id_from,
  meme_id,
  current_comment_id
) => {
  // type: meme_comment
  const notifType = "meme_comment"

  const user = await Users.findOne({
    where: { id: user_id_from },
  });

  const meme = await Memes.findOne({
    where: { id: meme_id },
  });
  const userId = meme.user_id;
  if (user_id_from != meme.user_id) {
    const notification = await Notifications.create({
      user_id_from,
      userId,
      meme_id,
      type: notifType,
      current_comment_id,
      messages: `${user.username} comment to your content`,
    });
    const userDest = await Users.findOne({
      where: { id: userId },
    });
    const commentObj = await Comments.findOne({
      where: { id: current_comment_id },
    });
    const firebaseToken = userDest.firebase_token
    const photo_url = (userDest.photo_url)?userDest.photo_url : ""
    if(firebaseToken){
      console.log(commentObj.messages)
      console.log(photo_url)
      console.log(notifType)
      sendPushNotif(firebaseToken, `${user.username} comment to your content`, commentObj.messages, photo_url, notifType, meme_id.toString(), '', '')
    }
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
  const notifType = "sub_comment"

  const user = await Users.findOne({
    where: { id: user_id_from },
  });

  if (user_id_from != user_id_dest) {
    const notification = await Notifications.create({
      user_id_from,
      user_id_dest,
      meme_id,
      type: notifType,
      current_comment_id,
      main_comment_id,
      messages: `${user.username} reply your comment`,
    });
    const userDest = await Users.findOne({
      where: { id: user_id_dest },
    });
    const commentObj = await Comments.findOne({
      where: { id: current_comment_id },
    });
    const firebaseToken = userDest.firebase_token
    const photo_url = (userDest.photo_url)?userDest.photo_url : ""
    if(firebaseToken){
      sendPushNotif(firebaseToken, `${user.username} reply your comment`, commentObj.messages, photo_url, notifType, '', main_comment_id.toString(), '')
    }
  }
};

const insertNotifFollowing = async (user_id_from, user_id_dest) => {
  // type: following
  const notifType = "following"
  const user = await Users.findOne({
    where: { id: user_id_from },
  });
  var notifs = await Notifications.findAll({
    where: {
      user_id_from,
      type: notifType
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
      type: notifType,
      messages: `${user.username} is Following you`,
    });

    const userDest = await Users.findOne({
      where: { id: user_id_dest },
    });
    const firebaseToken = userDest.firebase_token
    const photo_url = (user.photo_url)?user.photo_url : ""
    if(firebaseToken) {
      sendPushNotif(firebaseToken, `${user.username} is Following you`, '', photo_url, notifType, '', '', user_id_from.toString())
    }
  }
};

const sendPushNotif = (token, title, messages, iconUrl, notifType, memeId, commentId, userId) => {
  // This registration token comes from the client FCM SDKs.
  const registrationToken = token;

  const message = {
    data: {
      title,
      messages,
      iconUrl,
      notifType,
      memeId,
      commentId,
      userId
    },
    token: registrationToken,
  };

  // Send a message to the device corresponding to the provided
  // registration token.
  admin
    .messaging()
    .send(message)
    .then((response) => {
      // Response is a message ID string.
      console.log("Successfully sent message:", response);
    })
    .catch((error) => {
      console.log("Error sending message:", error);
    });
};

module.exports = {
  fetchNotifications,
  insertNotifFollowing,
  insertNotifMemeComment,
  insertNotifSubcomment,
  insertNotifMemeLiked
};
