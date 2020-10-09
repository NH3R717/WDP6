const error = require("debug")("api:error");
const express = require("express");
// const bodyParser = require("body-parser");
const morganDebug = require("morgan-debug");
// const cors = require("cors");
const app = express();
// takes the place of body-parser
app.use(express.json)
// app.use(bodyParser.json());
// app.use(cors());
app.use(morganDebug("api:request", "dev"));

const postRouter = require("./routes/posts");
const tagRouter = require("./routes/tags");
const userRouter = require("./routes/users");

// routers

app.use("/api/posts", postRouter); r
app.use("/api/tags", tagRouter);
app.use("/api/users", userRouter);

app.use((err, req, res, next) => {
  error("ERROR FOUND:", err);
  // res.sendStatus(error.code || 500).json({
  res.status(err.code || 500).json({
    message: error.message,
    error,
  });
});

module.exports = app;
