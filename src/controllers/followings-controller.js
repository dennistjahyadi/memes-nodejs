const { Followings, Memes } = require("../utils/db");
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op

const getFollowings = async (req, res) => {
    const userId = req.query.user_id

    const followings = await Followings.findAll({
        where: {user_id: userId},
        include: [
            {
              model: Users,
              required: true,
              as: "following_user",
            },
          ],
    })

    const result = {
        status: "OK",
        followings: followings,
      };

      return res.send(result);
}


const getFollowers = async (req, res) => {
    const userId = req.query.user_id

    const followers = await Followings.findAll({
        where: {following_user_id: userId},
        include: [
            {
              model: Users,
              required: true,
              as: "follower_user",
            },
          ],
    })

    const result = {
        status: "OK",
        followers: followers,
      };
      
    return res.send(result);
}

const setFollowing = async (req, res) => {
  const userId = req.body.user_id
  const followingUserId = req.body.following_user_id

  var param = {};
  param["user_id"] = userId;
  param["following_user_id"] = followingUserId;

  if(userId == followingUserId){
    const result = {
        'status': 'ERROR',
        "message": "cannot follow your own profile"
    }
    return res.send(result);
  }

  const count = await Followings.count({
    where: {
      user_id: userId, 
      following_user_id: followingUserId
    }
  })
  var followings = {}
  if(count == 0){
    const flw = await Followings.findOne({
      where: {
        user_id: userId, 
        following_user_id: null
      }
    })
    if(flw){
      flw.following_user_id = followingUserId
      flw.save()
    }else{
      followings = await Followings.create({ ...param })
    }
  }else{
    await Followings.update({ following_user_id: null }, {
      where: {
        user_id: userId, 
        following_user_id: followingUserId
      }
    });
  }

  const result = {
      status: "OK",
      data: followings,
    };
    
  return res.send(result);
}

module.exports = { getFollowings, getFollowers, setFollowing };
