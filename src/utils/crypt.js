require("dotenv").config();

const CRYPT_KEY = process.env.CRYPT_KEY;

function makeid(length) {
  var result = "";
  var characters = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+-=,<.>/?|~";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function getRandomChar(theString) {
  var result = "";
  var characters = theString;
  var charactersLength = characters.length;
  for (var i = 0; i < 1; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const crypt = (number) => {
  /*
    0 => bsv_.
    1 => epy9>
    2 => foz8?
    3 => crw=/
    4 => atu+,
    5 => gn07|
    6 => dqx-<
    7 => jk34:
    8 => il25;
    9 => hm16~
    {"0": "bsv_.","1": "epy9>","2": "foz8?","3": "crw=/","4": "atu+,","5": "gn07|","6": "dqx-<","7": "jk34:","8": "il25;","9": "hm16~"}
    */
  number = number.toString();
  const cryptJson = JSON.parse(CRYPT_KEY);
  var result = "";
  for (var i = 0; i < number.length; i++) {
    result += getRandomChar(cryptJson[number.charAt(i).toString()]);
  }
  return makeid(9)+""+result+""+makeid(15);
};

const decrypt = (encryptedStr) => {
  encryptedStr = encryptedStr.toString();
  encryptedStr = encryptedStr.slice(9)
  encryptedStr = encryptedStr.slice(0, encryptedStr.length-15)
  var result = "";
  for (var i = 0; i < encryptedStr.length; i++) {
    result += findNumber(encryptedStr.charAt(i));
  }
  return result
};

const findNumber = (char) => {
  const cryptJson = JSON.parse(CRYPT_KEY);
  var theNumber = "";
  for (var key in cryptJson) {
    const value = cryptJson[key];
    for (var a = 0; a < value.length; a++) {
      if (value.charAt(a) == char) {
        theNumber = key;
        break;
      }
    }
    if (theNumber != "") break;
  }

  return theNumber;
};

const validateToken = (token) => {
    var result = false
    var tolerateTime = 100000 //100000 = 1 minutes
    var now = new Date();
    var utcTimestamp = Date.UTC(now.getUTCFullYear(),now.getUTCMonth(), now.getUTCDate() , 
    now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());

    var timestampToken = decrypt(token)

    if(utcTimestamp-timestampToken <= tolerateTime) result = true
    
    console.log(timestampToken+" "+utcTimestamp)
    console.log(utcTimestamp-timestampToken)
    return result
}

module.exports = { crypt, decrypt, validateToken };
