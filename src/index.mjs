import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

let mocksUsers = [
  { id: 1, username: "juan" },
  { id: 2, username: "javiera" },
  { id: 3, username: "pepito" },
];

// http://localhost:3000/
app.get("/", (req, res) => {
  // res.send({msh: "Hello"})
  res.send("Hello World!");
});

// http://localhost:3000/api/users
app.get("/api/users", (req, res) => {
  res.send([
    { id: 1, username: "juan" },
    { id: 2, username: "javiera" },
  ]);
});

app.get("/api/users/:id", (req, res) => {
  console.log(req.params);
  console.log(req.params.id);

  const parseId = parseInt(req.params.id);
  if (isNaN(parseId)) return res.status(400).send({ msg: "Bad Request" });

  const findUser = mocksUsers.find((user) => user.id === parseId);
  if (!findUser) return res.status(404).send({ msg: "Not Found find user" });

  return res.send(findUser);
});

app.get("/api/users/name/:username", (req, res) => {
  const { username } = req.params;

  const findUser = mocksUsers.find((user) => user.username === username);

  // Manejar el caso en que no se encuentra ningún usuario con el nombre de usuario proporcionado
  if (!findUser) return res.status(404).json({ error: "Usuario no encontrado" });

  return res.send(findUser);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
