const express = require("express");
const helmet = require("helmet");
const registerRouter = require("./routers/registerRouter.js");
const loginRouter = require("./routers/loginRouter.js");
const userRouter = require("./routers/userRouter.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use("/api/register", registerRouter);
server.use("/api/login", loginRouter);
server.use("/api/users", userRouter);

module.exports = server;
