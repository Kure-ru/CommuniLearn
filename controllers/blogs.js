const blogsRouter = require("express").Router();
const Blog = require("../models/blogModel");
const User = require("../models/userModel");
const jwt = require('jsonwebtoken')

const { userExtractor } = require("../utils/middleware");

const getTokenFrom = (request) => {
  const authorization = request.get("authorization");
  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    return authorization.substring(7);
  }
  return null;
};

blogsRouter.get("/", async (request, response) => {
 const blogs = await Blog
 .find({}).populate('user', { username: 1, name: 1 })
 response.json(blogs)
});

blogsRouter.get("/:id", async (request, response) => {
 const blog = await Blog.findById(request.params.id)
 if (blog){
  response.json(blog)
 } else {
  response.status(404).end()
 }
});

blogsRouter.post("/", userExtractor, async (request, response) => {

  const { title, content } = request.body;

  const blog = new Blog({
   title,
   content,
  });
  
  const token = getTokenFrom(request)
 
  const decodedToken = jwt.verify(token, process.env.SECRET)
  if (!token || !decodedToken.id){
    return response.status(401).json({ error: 'token invalid' })
  }

  const user = await User.findById(decodedToken.id);

  if (!user) {
    return response.status(401).json({ error: "operation not permitted" });
  }

  blog.user = user._id;

  const savedBlog = await blog.save();
  user.blogs = user.blogs.concat(savedBlog._id);
  await user.save();

  response.status(201).json(savedBlog);
});

blogsRouter.delete("/:id", async (request, response) => {
  await Blog.findByIdAndRemove(request.params.id)
  response.status(204).end()
});


module.exports = blogsRouter;
