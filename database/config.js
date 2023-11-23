const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    mongoose.connect(process.env.DB_CONNECTION);
    console.log("DB online");
  } catch (error) {
    console.log(error);
    throw new Error("Error al conectarse a la BD");
  }
};

module.exports = { dbConnection };
