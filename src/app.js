const express = require("express");
// import { json, urlencoded } from 'body-parser'
const protection = require("./middleware/protection")
const routeSettings = require("./routes/route-settings");
const routes = require("./routes/routes");
require("dotenv").config();

const app = express();
routeSettings(app)

app.use('/api/v1', protection, routes)

try {
  app.listen(3000, () => {
    console.log(`REST API on http://localhost:${process.env.PORT}/api/v1`);
  });
} catch (e) {
  console.error(e);
}
