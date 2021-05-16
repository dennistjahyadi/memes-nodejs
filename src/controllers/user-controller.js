const { Users, Memes } = require("../utils/db");
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op

const login = async (req, res) => {
  var email = req.body.email;

  const users = await Users.findOrCreate({
      where: {email: email}
  })

  const result = {
    'status': 'OK',
    "user": users[0]
  }

  return res.send(result);
};

const updateUsername = async (req, res) => {
    
    var userId = req.body.user_id;
    var username = req.body.username;
    if(username.length <= 4){
        const result = {
            'status': 'ERROR',
            "message": "Username at least 5 character long"
        }
        return res.send(result)
    }

    var regex = /^\w{1,}$/
    var matches = regex.test(username);
    if(!matches){
        const result = {
            'status': 'ERROR',
            "message": "Username cannot include special characters or space"
        }
        return res.send(result)
    }

    const count = await Users.count({
      where: {
        username: username,
        id: {[Op.ne]: userId}
      }
    })

    if(count>0){
      const result = {
        'status': 'ERROR',
        "message": "Username not available"
      }
      return res.send(result)
    }

    await Users.update({ username }, {
        where: {
          id: userId
        }
      });

    const user = await Users.findOne({
      where: {id: userId}
    })
    
    const result = {
        'status': 'OK',
        "user": user
    }
    return res.send(result); 
}

const updateProfilepic = async (req, res) => {
  var userId = req.body.user_id;
  var photo_url = req.body.url;

  await Users.update({ photo_url }, {
    where: {
      id: userId
    }
  });

  const user = await Users.findOne({
    where: {id: userId}
  })

  const result = {
    'status': 'OK',
    "user": user
  }
  return res.send(result);
}

const getUser = async (req, res) => {
  var userId = req.query.user_id;

  const user = await Users.findOne({
    where: {id: userId},
    include: [
      {
        model: Memes,
        required: true,
        as: "memes",
      },
    ],
  })

  const result = {
    'status': 'OK',
    "user": user
  }
  return res.send(result)
}

module.exports = { login, updateUsername, updateProfilepic, getUser };
