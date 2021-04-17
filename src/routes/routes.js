
const express = require("express");
const { date } = require("joi");
const { fetchMemes, fetchLikedMemes } = require('../controllers/memes-controller')
const { fetchSections } = require('../controllers/section-controller')
const { fetchComments, insertComments } = require('../controllers/comments-controller')
const { insertLikes } = require('../controllers/likes-controller')

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
router.get("/fetch-comments", fetchComments);
router.post("/insert-likes", insertLikes);
router.post("/insert-comments", insertComments);

module.exports = router
