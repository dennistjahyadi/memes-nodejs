const { Users, Memes, Followings } = require("../utils/db");
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;

const login = async (req, res) => {
  var email = req.body.email;

  const users = await Users.findOrCreate({
    where: { email: email },
  });

  const result = {
    status: "OK",
    user: users[0]
  };

  return res.send(result);
}

const updateUsername = async (req, res) => {
  var userId = req.body.user_id;
  var username = req.body.username;
  if (username.length <= 4) {
    const result = {
      status: "ERROR",
      message: "Username at least 5 character long",
    };
    return res.send(result);
  }

  var regex = /^\w{1,}$/;
  var matches = regex.test(username);
  if (!matches) {
    const result = {
      status: "ERROR",
      message: "Username cannot include special characters or space",
    };
    return res.send(result);
  }

  const count = await Users.count({
    where: {
      username: username,
      id: { [Op.ne]: userId },
    },
  });

  if (count > 0) {
    const result = {
      status: "ERROR",
      message: "Username not available",
    };
    return res.send(result);
  }

  await Users.update(
    { username },
    {
      where: {
        id: userId,
      },
    }
  );

  const user = await Users.findOne({
    where: { id: userId },
  });

  const result = {
    status: "OK",
    user: user,
  };
  return res.send(result);
}

const updateProfilepic = async (req, res) => {
  var userId = req.body.user_id;
  var photo_url = req.body.url;

  await Users.update(
    { photo_url },
    {
      where: {
        id: userId,
      },
    }
  );

  const user = await Users.findOne({
    where: { id: userId },
  });

  const result = {
    status: "OK",
    user: user,
  };
  return res.send(result);
}

const getUser = async (req, res) => {
  var userId = req.query.user_id;

  const user = await Users.findOne({
    where: { id: userId },
    include: [
      {
        model: Memes,
        required: false,
        as: "memes",
      },
      {
        model: Followings,
        required: false,
        as: "following_user",
        where: {
          following_user_id: {
            [Op.ne]: null,
          },
        },
      },
      {
        model: Followings,
        required: false,
        as: "follower_user",
      },
    ],
  });

  user.memes.forEach((meme) => {
    meme.images = JSON.parse(meme.images);
    meme.tags = JSON.parse(meme.tags);
  });

  const result = {
    status: "OK",
    user: user,
  };
  return res.send(result);
}

const fetchUser = async (req, res) => {
  var limit = req.query.limit;
  var offset = req.query.offset;
  var filter = req.query.filter;
  if (!limit) limit = 20;
  if (!offset) offset = 0;

  if(!filter || filter == ""){
    const result = {
      status: "OK",
      users: [],
    };
  
    return res.send(result);
  }

  var where = {};

  if (filter) where["username"] = { [Op.like]: `%${filter}%` };

  const users = await Users.findAll({
    limit: parseInt(limit),
    offset: parseInt(offset),
    where,
    order: [["id", "desc"]]
  });

  const result = {
    status: "OK",
    users: users,
  };

  return res.send(result);
}

const setFirebaseToken = async (req, res) => {
  var userId = req.body.user_id;
  var firebase_token = req.body.token;
  var user = await Users.update(
    { firebase_token },
    {
      where: {
        id: userId,
      },
    }
  );
  const result = {
    status: "OK",
    user: user
  };
  return res.send(result);
}

module.exports = {
  login,
  updateUsername,
  updateProfilepic,
  getUser,
  setFirebaseToken,
  fetchUser
}