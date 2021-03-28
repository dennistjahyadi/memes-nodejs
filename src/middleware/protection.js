const jwt = require("jsonwebtoken");
require("dotenv").config();

const PRIVATE_KEY =  process.env.PRIVATE_KEY

const pair = ["g","r","b",".","^","z","o","#","$","f"]

const check = (token) => {
  // g.#f 2020 05 31 19 28 .^$fbr

  const year = PRIVATE_KEY.indexOf(token.charAt(4))+""+PRIVATE_KEY.indexOf(token.charAt(5))+""+PRIVATE_KEY.indexOf(token.charAt(6))+""+PRIVATE_KEY.indexOf(token.charAt(7))
  const month = PRIVATE_KEY.indexOf(token.charAt(8))+""+PRIVATE_KEY.indexOf(token.charAt(9))
  const date = PRIVATE_KEY.indexOf(token.charAt(10))+""+PRIVATE_KEY.indexOf(token.charAt(11))
  const hour = PRIVATE_KEY.indexOf(token.charAt(12))+""+PRIVATE_KEY.indexOf(token.charAt(13))
  const minutes = PRIVATE_KEY.indexOf(token.charAt(14))+""+PRIVATE_KEY.indexOf(token.charAt(15))

  const tokenNumber = parseFloat(year+month+date+hour+minutes)
  console.log(tokenNumber)
}

module.exports = function (req, res, next) {
  //get the token from the header if present
  var token = req.headers["x-access-token"] || req.headers["authorization"];
  //token = ""
  //if no token found, return response (without going to the next middelware)
  //if (!token) return res.status(401).send("Access denied. No token provided.");

  try {
    //if can verify the token, set req.user and pass to next middleware
    // const decoded = jwt.verify(token, PRIVATE_KEY);
    // req.user = decoded;
    next();
  } catch (ex) {
    //if invalid token
    res.status(400).send("Invalid token.");
  }
};
