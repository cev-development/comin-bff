const mongoose = require("mongoose");

const url =
  "mongodb+srv://programming-course:nJJ0YgeaxZdyQF7g@cluster0.0kg7w.mongodb.net/comin-db?retryWrites=true&w=majority";

const connectDatabase = () => {
  mongoose
    .connect(url)
    .then(() => {
      console.log(`[DATABASE]`, `Mongodb Connected`);
    })
    .catch((err) => {
      console.log(`[DATABASE]`, `ERROR`, err);

      process.exit();
    });
};

module.exports = { connectDatabase };
