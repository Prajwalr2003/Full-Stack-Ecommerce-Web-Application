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

app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true, limit: "2mb" }));
app.use(express.static("public"));
app.use(cookieParse());

const userRouter = require('./routes/user.route');
app.use("/api/v1/user", userRouter);

const productRouter = require('./routes/product.route');
app.use("/api/v1/product", productRouter);

const categoryRouter = require('./routes/category.route');
app.use("/api/v1/category", categoryRouter);

module.exports = app;
