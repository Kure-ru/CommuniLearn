const bcrypt = require("bcrypt");
const usersRouter = require("express").Router();
const User = require("../models/userModel");
const uploadImage = require("../utils/cloudinary");

usersRouter.get("/", async (request, response) => {
  const users = await User.find({}).populate("blogs");
  response.json(users);
});

usersRouter.post("/", async (request, response) => {
  const { username, password } = request.body;

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const user = new User({
    username,
    passwordHash,
    profilePicture: `https://res.cloudinary.com/${process.env.CLOUD_NAME}/image/upload/v1688302908/Cloudinary-React/Franc%CC%A7ais_2_edtndr.jpg`,
  });

  const savedUser = await user.save();

  response.status(201).json(savedUser);
});

usersRouter.put("/:id", async (request, response, next) => {
  const body = request.body;
  const user = {
    username: body.username,
    passwordHash: body.passwordHash,
  };

  User.findByIdAndUpdate(request.params.id, user, { new: true })
    .then((updatedUser) => {
      response.json(updatedUser);
    })
    .catch((error) => next(error));
});

usersRouter.post("/uploadImage/:id", async (req, res, next) => {
  try {
    const url = uploadImage(req.body.image);
    const user = {
      profilePicture: url,
    };

    const updatedUser = await User.findByIdAndUpdate(req.params.id, user, {
      new: true,
    });

    // CORS headers
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.json(updatedUser);
  } catch (error) {
    next(error);
  }
});

module.exports = usersRouter;
