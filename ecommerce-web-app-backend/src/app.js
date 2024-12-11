const express = require("express");
const cookieParse = require("cookie-parser");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParse());

const userRouter = require('./routes/user.route');
app.use("/api/v1/users", userRouter);

module.exports = app;
