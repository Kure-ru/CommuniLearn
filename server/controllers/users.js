const bcrypt = require("bcrypt");
const usersRouter = require("express").Router();
const User = require("../server/models/userModel");
const upload = require('../server/utils/multer');
const cloudinary = require('../server/utils/cloudinary')
const path = require("path");


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
    profilePicture: `https://res.cloudinary.com/${process.env.REACT_APP_CLOUD_NAME}/image/upload/v1687872804/teacher_profile_wutgwf.jpg`
  });

  const savedUser = await user.save();

  response.status(201).json(savedUser);
});



usersRouter.put("/:id", upload.single("profilePicture"), async (request, response, next) => {
  const body = request.body;
  const data = JSON.stringify(request.body)

  // const result = await cloudinary.uploader.upload(request.file);

  const user = {
    // username: body.username,
    // passwordHash: body.passwordHash,
    profilePicture: request.body.profilePicture
  };

  console.log(`user values
  ${JSON.stringify(user)} `)
  console.log(`request params id 
  ${request.params.id} `)
  User.findByIdAndUpdate(request.params.id, user, { new: true })  
  .then((updatedUser) => {
      response.json(updatedUser);
    })
    .catch((error) => next(error));
});

module.exports = usersRouter;
