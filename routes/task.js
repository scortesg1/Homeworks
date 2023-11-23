const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const {
  crearUsuario,
  loginUsuario,
  revalidarToken,
} = require("../controllers/auth");
const { validarCampos } = require("../middlewares/validar-campos");
const {validarJWT} = require("../middlewares/validar-token")
const {listarTasks, crearTask, actualizarTask, eliminarTask} = require("../controllers/task.js")

router.use(validarJWT)

router.get("/", listarTasks)
router.post("/", crearTask)
router.put("/:id", actualizarTask)
router.delete("/:id", eliminarTask)


module.exports = router;
