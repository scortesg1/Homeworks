const express = require("express");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const Task = require("../models/Task");
const { generarJWT } = require("../helpers/jwt");

const crearTask = async (req, res = express.request) => {
  const task = new Task(req.body);

  try {
    task.user = req.uid;
    const saved = await task.save();
    res.status(200).json({
      ok: true,
      task: saved,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      task: "Internal Error",
    });
  }
};

const listarTasks = async (req, res = express.request) => {
    const tasks = await Task.find().populate("user", "name")
  
    try {
      res.status(200).json({
        ok: true,
        tasks,
      });
    } catch (error) {
      res.status(500).json({
        ok: false,
        msg: "Error interno",
      });
    }
  };


