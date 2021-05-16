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

module.exports = { getFollowings, getFollowers};
