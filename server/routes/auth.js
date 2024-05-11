const express = require("express");

let authRouter = express.Router();

let users = [];

authRouter.get("/signup", (req, res) => {
  let newUser = req.body;
  newUser.id = Math.random() * 100;
  users.push(newUser);
  console.log(users);
  res.status(201).send("successfully registered");
});

authRouter.post("/login", (req, res) => {
  let userFind = users.find((user) => user.name === req.body.name);

  if (userFind) {
    res.status(200).json(userFind);
  } else {
    res.send("User not found");
  }
});

authRouter.put("/update/:name", (req, res) => {
  let name = req.params.name

  let userFind = users.find((user) => user.name === name);
  
  userFind.name = req.body.name
  userFind.pass = req.body.pass

  res.json(userFind);
  
})

authRouter.delete("/delete/:name", (req, res) => {
  let name = req.params.name
  
  users = users.filter((user) => user.name !== name)

  res.json(users);
  console.log(users);
  
});

module.exports = authRouter;
