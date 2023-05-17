import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

const port = process.env.PORT || 3000;

connectDB();
const app = express();

// Get data from request body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cookieParser());

app.use("/api/users", userRoutes);

app.get("/", (req, res) => res.send("Server is ready"));

// error middleware
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`server started on port ${port}`));
