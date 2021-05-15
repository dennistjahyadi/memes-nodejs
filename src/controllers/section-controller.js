const { Sections, Memes, sequelize } = require("../utils/db");
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;

const fetchSections = async (req, res) => {
  var limit = req.query.limit;
  var offset = req.query.offset;
  var filter = req.query.filter;
  if (!limit) limit = 20;
  if (!offset) offset = 0;

  var where = {};

  if (filter) where["name"] = { [Op.like]: `%${filter}%` };

  const sections = await Sections.findAll({
    limit: parseInt(limit),
    offset: parseInt(offset),
    where,
  });

  const result = {
    status: "OK",
    sections: sections,
  };

  return res.send(result);
};

const fetchTopSections = async (req, res) => {
  var limit = 100;
  var filter = req.query.filter;

  var where = {};

  if (filter) where["post_section"] = { [Op.like]: `%${filter}%` };

  const sections = await Memes.findAll({
    attributes: [
      ['post_section', 'name'],
      [sequelize.fn("COUNT", sequelize.col("post_section")), "total"],
    ],
    group: "post_section",
    limit: parseInt(limit),
    order: sequelize.literal("count(post_section) DESC"),
    where,
  });

  const result = {
    status: "OK",
    sections: sections,
  };

  return res.send(result);
};

module.exports = { fetchSections, fetchTopSections };
