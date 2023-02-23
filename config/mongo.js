const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const dbConnect = () => {
  const DB_URI = process.env.DB_URI;
  mongoose.connect(
    DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (error, resp) => {
      if (!error) {
        console.log("**** CONEXION CORRECTA ****");
      } else {
        console.log("**** CONEXION ERROR ****");
      }
    }
  );
};

module.exports = dbConnect;
