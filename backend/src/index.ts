require('dotenv').config()
import express from "express";
import cors from "cors";
const app = express();

app.use(cors({
    origin: ["https://brainly-fullstack.vercel.app", "http://localhost:5173"], // Allow frontend origins
    methods: "GET,POST,PUT,DELETE", 
    credentials: true // Allow cookies/auth headers
}));
app.use(express.json());

import rootRouter from "./routes/index";

app.use("/api/v1", rootRouter);


app.listen(process.env.PORT!);