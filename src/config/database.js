const mongoose = require("mongoose");

const url =
  "mongodb+srv://sysComin:TRJHCyATSBp9sxDJ@comin.2ejjz1k.mongodb.net/?retryWrites=true&w=majority";

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
