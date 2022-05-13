const express = require("express");
const server = express();
const apiRouter = require("./routes/api");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json()
 
server.use("/api", jsonParser, apiRouter);

module.exports = server;
