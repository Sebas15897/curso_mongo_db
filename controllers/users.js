const { usersModel } = require("../models");

const getUsers = async (req, res) => {
  const data = await usersModel.find({});

  res.send({ data });
};

const getUser = (req, res) => {
  const data = ["Hola", "Mundo"];
  resp.send({ data });
};

const createUsers = (req, res) => {};
const updatedUsers = (req, res) => {};
const deleteUsers = (req, res) => {};

module.exports = { getUsers, createUsers, updatedUsers, deleteUsers, getUser };
