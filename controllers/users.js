const mongoose = require("mongoose");
const { usersModel } = require("../models");

const parseId = (id) => {
  return mongoose.Types.ObjectId(id);
};

const getUsers = async (req, res) => {
  const data = await usersModel.find({});
  res.send({ data });
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const model = await usersModel.findOne({ _id: parseId(id) });
  resp.send({ id });
};

const createUser = async (req, res) => {
  const { body } = req;
  const data = await usersModel.create(body);
  res.send({ data });
};

const updatedUser = (req, res) => {
  const { id } = req.params;
  usersModel.updateOne({ _id: parseId(id) }, req.body, (error, result) => {
    res.send({
      items: result,
    });
  });
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  usersModel.deleteOne({ _id: parseId(id) }, (error, result) => {
    res.send({
      items: result,
    });
  });
};

module.exports = { getUsers, createUser, updatedUser, getUserById, deleteUser };
