const bcrypt = require("bcrypt");
const usersRouter = require("express").Router();
const User = require("../models/userModel");

usersRouter.get("/", async (request, response) => {
  const users = await User.find({}).populate("blogs");
  response.json(users);
  console.log(users);
});

usersRouter.post("/", async (request, response) => {
  const { username, password } = request.body;

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const user = new User({
    username,
    passwordHash,
  });

  const savedUser = await user.save();

  response.status(201).json(savedUser);
});

usersRouter.put("/:id", (request, response, next) => {
  const body = request.body;
console.log(request.body)
  const user = {
    username: body.username,
    passwordHash: body.passwordHash
  };

  User.findByIdAndUpdate(request.params.id, user, { new: true })
    .then((updatedUser) => {
      response.json(updatedUser);
    })
    .catch((error) => next(error));
});

module.exports = usersRouter;
