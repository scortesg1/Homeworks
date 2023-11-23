const express = require("express");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const Usuario = require("../models/Usuario");
const { generarJWT } = require("../helpers/jwt");

const listarUsuarios = async (req, res) => {
  const usuarios = await Usuario.find().populate("tareas", "title");

  try {
    res.status(200).json({
      ok: false,
      usuarios,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error interno",
    });
  }
};

module.exports = {
  listarUsuarios,
};
