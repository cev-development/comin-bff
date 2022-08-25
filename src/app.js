require("dotenv").config();
const express = require("express");
require("express-async-errors");
const cors = require("cors");

const { connectDatabase } = require("./config/database");

const { routes } = require("./routes");

const { handlingErrors } = require("./middlewares/handlingErrors");
const { handlingNotFound } = require("./middlewares/handlingNotFound");
const { handlingRequestLog } = require("./middlewares/handlingRequestLog");

const app = express();

connectDatabase();

app.use(express.json());
app.use(cors());

app.use(handlingRequestLog);

app.use(routes);

app.use(handlingErrors);
app.use(handlingNotFound);

module.exports = { app };
