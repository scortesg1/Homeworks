const express = require("express");
require("dotenv").config();
const { dbConnection } = require("./database/config");
const cors = require("cors");

const app = express();

dbConnection();

app.use(express.json());
app.use(express.static("public"));

app.use(cors());

//Rutas
app.use("/api/auth", require("./routes/auth"));
app.use("/api/task", require("./routes/task"));

app.listen(process.env.PORT, () => {
  console.log("Server corriendo en puerto ", process.env.PORT);
});
