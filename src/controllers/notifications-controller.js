const { Notifications, sequelize } = require("../utils/db");
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;

const fetchNotifications = async (req, res) => {
    var userId = req.query.user_id;
    var limit = req.query.limit;
    var offset = req.query.offset;
    if (!limit) limit = 20;
    if (!offset) offset = 0;
  
    var where = {};
  
    if (filter) where["user_id_dest"] = userId
  
    const notifications = await Notifications.findAll({
      limit: parseInt(limit),
      offset: parseInt(offset),
      where,
    });
  
    const result = {
      status: "OK",
      notifications: notifications,
    };
  
    return res.send(result);
  };
  

module.exports = { fetchNotifications };
