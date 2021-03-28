const { Memes } = require("../utils/db");

const fetchMemes = async (req, res) => {
  const memes = await Memes.findAll({ limit: 10 });
  return res.send(memes);
};

module.exports = { fetchMemes }
