const coursesRouter = require("express").Router();
const Course = require("../models/courseModel");
const Blog = require("../models/blogModel");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const { userExtractor } = require("../utils/middleware");

const getTokenFrom = (request) => {
  const authorization = request.get("authorization");
  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    return authorization.substring(7);
  }
  return null;
};

coursesRouter.get("/", async (request, response) => {
  const courses = await Course.find({}).populate("user", { username: 1, name: 1 });
  response.json(courses);
});

coursesRouter.post("/", userExtractor, async (request, response) => {
    const { title, category } = request.body;
    const course = new Course({
      title,
      category,
    });
  
    const token = getTokenFrom(request);
  
    const decodedToken = jwt.verify(token, process.env.SECRET);
    if (!token || !decodedToken.id) {
      return response.status(401).json({ error: "token invalid" });
    }
  
    const user = await User.findById(decodedToken.id);
  
    if (!user) {
      return response.status(401).json({ error: "operation not permitted" });
    }
  
    course.user = user._id;
  
    const savedCourse = await course.save();

    user.courses = user.blogs.concat(savedCourse._id);
    await user.save();
  
    response.status(201).json(savedCourse);
  });

  coursesRouter.get("/:id", async (request, response) => {
    const course = await Course.findById(request.params.id);
    if (course) {
      response.json(course);
    } else {
      response.status(404).end();
    }
  });

  coursesRouter.delete("/:id", async (request, response) => {
    await Course.findByIdAndRemove(request.params.id);
    response.status(204).end();
  });

module.exports = coursesRouter;