const express = require("express");
const helmet = require("helmet");
const userRouter = require("./routers/userRouter.js");
const loginRouter = require("./routers/loginRouter.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use("/api/register", userRouter);
server.use("/api/login", loginRouter);

module.exports = server;
