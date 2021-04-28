const { Comments } = require("../utils/db");

const fetchComments = async (req, res) => {
    var limit = req.query.limit;
    var offset = req.query.offset;
    var userId = req.query.user_id;
    var memeId = req.query.meme_id;
    if (!limit) limit = 20

    if (!offset) offset = 0;

    var where = {}
    if(userId){
        where['user_id'] = userId
    }else if(memeId){
        where['meme_id'] = memeId
    }else{
        where['user_id'] = -1
    }

    const comments = await Comments.findAll({
        where,
        limit: parseInt(limit),
        offset: parseInt(offset),
    })

    const result = {
        'status': 'OK',
        "comments": comments
    }
    return res.send(result);
}

const insertComments = async (req, res) => {
    const memeId = req.body.meme_id
    const userId = req.body.user_id
    const messages = req.body.messages
    const commentId = req.body.comment_id
    if(!memeId || !userId || !messages) res.send({})

    var param = {}
    param['user_id'] = userId
    param['meme_id'] = memeId
    param['messages'] = messages
    if(commentId){
        param['comment_id'] = commentId
    }

    const comments = await Comments.create({...param});

    const result = {
        'status': 'OK',
        'result': 1,
        'data': comments
    }
    return res.send(result)
}

module.exports = { fetchComments, insertComments };