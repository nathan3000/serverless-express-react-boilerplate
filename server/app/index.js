const serverless = require("serverless-http");
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json({ strict: false }));

/**
 * Routes go here
 * app.get(...)
 */

module.exports.handler = serverless(app);
