const { usersModel } = require("../models");

const getUsers = async (req, res) => {
  const data = await usersModel.find({});

  res.send({ data });
};

const getUser = (req, res) => {
  const data = ["Hola", "Mundo"];
  resp.send({ data });
};

const createUser = async (req, res) => {
  const { body } = req;
  const data = await usersModel.create(body);
  res.send({ data });
};
const updatedUsers = (req, res) => {};
const deleteUsers = (req, res) => {};

module.exports = { getUsers, createUser, updatedUsers, deleteUsers, getUser };
