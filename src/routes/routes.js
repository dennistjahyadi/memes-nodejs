
const express = require("express");
const { date } = require("joi");
const { fetchMemes } = require('../controllers/memes-controller')
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


module.exports = router
