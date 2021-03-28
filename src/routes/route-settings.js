const bodyParser = require("body-parser");
const cors = require("cors");

module.exports = (app) => {
    app.disable("x-powered-by");

    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
}