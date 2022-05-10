require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

//custom MiddleWare
const { errorHandlerMiddleware, notFoundMiddleware } = require("./middleware");

//use middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;
