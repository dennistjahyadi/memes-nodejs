const { Sections, sequelize } = require("../utils/db");
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op

const fetchSections = async (req, res) => {
  var limit = req.query.limit;
  var offset = req.query.offset;
  var filter = req.query.filter;
  if (!limit) limit = 20
  if (!offset) offset = 0;

  var where = {}

  if(filter) where['name'] = {[Op.like]: `%${filter}%`}

  const sections = await Sections.findAll({
    limit: parseInt(limit),
    offset: parseInt(offset),
    where
  });

  const result = {
    'status': 'OK',
    "sections": sections
  }

  return res.send(result);
};

module.exports = { fetchSections };
