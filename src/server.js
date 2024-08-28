const { app } = require("./app");

const port = process.env.PORT || 3171;

app.listen(port, () => {
  console.log("[SERVER]", `Listening on port ${port}`);
});
