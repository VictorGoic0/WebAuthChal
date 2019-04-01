const express = require("express");
const helmet = require("helmet");
const userRouter = require("./routers/userRouter.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use("/api/register", userRouter);

module.exports = server;
