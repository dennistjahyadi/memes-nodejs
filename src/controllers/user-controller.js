const { Users } = require("../utils/db");

const login = async (req, res) => {
  var email = req.body.email;

  const user = await Users.findOrCreate({
      where: {email: email}
  })

  const result = {
    "user": user
  }

  return res.send(result);
};

const updateUsername = async (req, res) => {
    
    var userId = req.body.user_id;
    var username = req.body.username;

    if(username.length <= 4){
        res.statusCode = 400
        return res.send("Username at least 5 character long")
    }

    var regex = /^\w{1,}$/
    var matches = regex.test(text);
    if(!matches){
        res.statusCode = 400
        return res.send("Username cannot include special characters or space")
    }

    const user = await Users.update({ username }, {
        where: {
          id: userId
        }
      });
    
    const result = {
        "user": user
    }
    return res.send(result); 
}

module.exports = { login, updateUsername };
