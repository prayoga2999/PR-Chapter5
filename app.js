const express = require("express");
const app = express();
const userRoutes = express.Router();
const port = 5000;

const { getUsers, createUsers, readUsers, updateUsers, deleteUsers } = require("./users/users");

app.get("/users", getUsers);

app.post("/users", createUsers);

app.get("/users/:usersId", readUsers);

app.patch("/users/:usersId", updateUsers);

app.delete("/users/:usersId", deleteUsers);

app.listen(port, () => console.log("> Server is up and running on port http://localhost:" + port));
