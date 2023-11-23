const express = require("express")
require("dotenv").config()

const app = express()

app.use(express.json())
app.use(express.static("public"))

//Rutas
app.use("/api/auth", require("./routes/auth"))

app.listen(process.env.PORT, () => {
    console.log("Server corriendo en puerto ", process.env.PORT);
})