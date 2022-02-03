import express from 'express';
import { Router, Response, Request } from "express";
import connectDB from "../config/db";
import user from "../src/routes/profile.routes";
import bodyParser from "body-parser";
import auth from "../config/auth";

const app = express();

// Connect to MongoDB
connectDB();

app.use(bodyParser.json());
app.use("/api/auth", auth);

app.use("/api", user);
// app.use("/api/profile", profile);

const port:number = 3000;
const server = app.listen(port, () => {
    console.log('The application is listening on port',`${port}`);
})

// export default server;