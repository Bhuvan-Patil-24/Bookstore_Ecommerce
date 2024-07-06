import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
dotenv.config({ path: "./.env" });

// Import routes
import userRoutes from "./Routes/userRoutes.js";
import bookRoutes from "./Routes/bookRoutes.js";
import userAddressRoutes from "./Routes/userAddressRoutes.js";

const app = express();

// Increase limit to store image in database
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

app.use(cors());
app.use(express.json());

// Use routes
app.use("/ecommerce/user", userRoutes);
app.use("/ecommerce/books", bookRoutes);
app.use("/ecommerce/user-address", userAddressRoutes);

// Database connection and server start
const port = process.env.PORT;
const url = process.env.MONGO_URL;

mongoose.connect(url)
    .then(() => app.listen(port))
    .then(() => console.log(`Connected to DB at port ${port}`))
    .catch((err) => console.log(`${err} is error`));
