import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// http://localhost:3000/
app.get("/", (req, res) => {
  // res.send({msh: "Hello"})
  res.send("Hello World!");
});

app.get("/api/users", (req, res) => {
  res.send([
    { id: 1, username: "juan" },
    { id: 2, username: "javiera" },
  ]);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
