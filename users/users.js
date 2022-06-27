const { v4: uuidv4 } = require("uuid");
const { Router } = require("express");

let users = [];

const getUsers = (req, res) => {
  console.log(users);
  return res.send(users);
};

const createUsers = (req, res) => {
  const user = req.body;
  const userId = uuidv4;
  const userWithId = { ...user, id: userId };
  users.push(userWithId);
  return res.send("users added");
};

const readUsers = (req, res) => {
  const { id } = req.params;
  users.foundUser((user) => user.id === id);
  return res.send(foundUser);
};
const updateUsers = (req, res) => {
  const { id } = req.params;
  const { firstName } = req.body;
  const users = users.find((user) => user.id == id);
  if (firstName) {
    users.firstName = firstName;
  }

  return res.send("Users Updated");
};
const deleteUsers = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);
  return res.send("users Deleted");
};

module.exports = { getUsers, createUsers, readUsers, updateUsers, deleteUsers };
