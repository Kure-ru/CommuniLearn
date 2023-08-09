const bcrypt = require("bcrypt");
const usersRouter = require("express").Router();
const User = require("../models/userModel");

usersRouter.get("/", async (request, response) => {
  const users = await User.find({}).populate("blogs");
  response.json(users);
});

usersRouter.get("/:id", async (request, response) => {
  const user = await User.findById(request.params.id);
  if (user) {
    console.log(`user is ${user.name}`);
    response.json(user);
  } else {
    response.status(404).end();
  }
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

usersRouter.put("/:id", async (request, response, next) => {
  const body = request.body;

  const user = {
    username: body.username,
    passwordHash: body.passwordHash,
    registeredCourses: body.registeredCourses,
  };

  User.findByIdAndUpdate(request.params.id, user, { new: true })
    .then((updatedUser) => {
      console.log(updatedUser);
      response.json(updatedUser);
    })
    .catch((error) => next(error));
});


// mark as read 
usersRouter.put("/:id/read", async (request, response, next) => {
  const userId = request.body.userId;
  const id = request.params.id;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return response.status(404).json({ error: "Utilisateur inconnu" });
    }

    const index = user.readBlogs.indexOf(id);

    if (index === -1) {
      user.readBlogs.push(id);
    } else {
      user.readBlogs.splice(index, 1);
    }

    const updatedUser = await user.save();
    console.log(updatedUser)
    response.json(updatedUser);
  } catch (error) {
    next(error);
  }
});

module.exports = usersRouter;
