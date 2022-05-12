const express = require("express");
const server = express();
const apiRouter = require("./routes/api");
// const bodyParser = require("body-parser");

// server.use(bodyParser.json());
// server.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// );
// server.use(express.json());
server.use("/api", apiRouter);

module.exports = server;
