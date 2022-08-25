const express = require("express");

const { routes } = require("./routes");
const { handlingErrors } = require("./middlewares/handlingErrors");
const { handlingNotFound } = require("./middlewares/handlingNotFound");

const app = express();

app.use(express.json());

app.use(routes);
app.use(handlingErrors);

app.use(handlingNotFound);

const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
