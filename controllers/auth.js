const express = require("express");
const { validationResult } = require("express-validator");

const crearUsuario = (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  }

  return res.status(200).json({
    ok: true,
    name,
    email,
    password,
  });
};

const loginUsuario = (req, res = express.request) => {
  res.json({
    ok: false,
  });
};

const revalidarToken = (req, res = express.request) => {
  res.json({
    ok: true,
  });
};

module.exports = {
  loginUsuario,
  crearUsuario,
  revalidarToken,
};
