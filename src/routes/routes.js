
const express = require("express");
const { date } = require("joi");
const { fetchMemes, fetchLikedMemes, fetchMyMemes, insertMemes } = require('../controllers/memes-controller')
const { fetchSections } = require('../controllers/section-controller')
const { fetchMainComments, fetchComments, insertComments } = require('../controllers/comments-controller')
const { insertLikes } = require('../controllers/likes-controller')
const { login, updateUsername, updateProfilepic } = require('../controllers/user-controller')

const { crypt, decrypt, validateToken } = require('../utils/crypt')
const router = express.Router()
require("dotenv").config();

router.get("/generate",(req, resp) => {

  try{
    const timestamp = req.query.timestamp
    var encrypted = crypt(timestamp)
  
    const result = {
      "date": timestamp,
      "encrypt": encrypted,
      "decrypt": decrypt(encrypted)
    }
  
    resp.json(result)
  }catch(ex){
    resp.send("example format: ?date=202002231530 \n"+ex)
  }
  
})

router.get("/validate",(req, resp) => {

  try{
    //const token = req.query.token
    var token = req.headers["x-access-token"] || req.headers["authorization"];

    console.log(token)
    resp.json(validateToken(token))
  }catch(ex){
    resp.send("example format: ?date=202002231530 \n"+ex)
  }
  
})

router.get("/fetch-memes", fetchMemes);
router.get("/fetch-sections", fetchSections);
router.get("/fetch-liked-memes", fetchLikedMemes);
router.get("/fetch-main-comments", fetchMainComments);
router.get("/fetch-comments", fetchComments);
router.get("/fetch-mymemes", fetchMyMemes);
router.post("/insert-likes", insertLikes);
router.post("/insert-comments", insertComments);
router.post("/login", login);
router.post("/update-username", updateUsername);
router.post("/update-profile-pic", updateProfilepic);
router.post("/insert-memes", insertMemes);

module.exports = router
