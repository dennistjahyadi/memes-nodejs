const { Likes, sequelize } = require("../utils/db");

const insertLikes = async (req, res) => {
    var userId = req.body.user_id;
    var memeId = req.body.meme_id;
    var liked = req.body.like;
    if(!userId || !memeId || liked==null) return res.send({});

    var totalLike = await Likes.count({
        where: {
            user_id: userId,
            meme_id: memeId
        }
    })
    var likes = {}
    if(totalLike>0){
        likes = (await Likes.findAll({ where: {user_id : userId, meme_id: memeId} }))[0];
        likes.like = liked
        await likes.save()
    }else{
        likes = await Likes.create({ user_id : userId, meme_id: memeId, like: liked });
    }

    totalLike = await Likes.count({
        where: {
            meme_id: memeId,
            like: 1
        }
    })
    const result = {
        'status': 'OK',
        'data': likes,
        'total_like': totalLike
    }

    return res.send(result);
}

module.exports = { insertLikes };