const error = require("debug")("api:error");

const express = require("express");

// const bodyParser = require("body-parser");

const morganDebug = require("morgan-debug");

// const cors = require("cors");

const app = express();

// app.use(bodyParser.json());

// app.use(cors());

app.use(morganDebug("api:request", "dev"));

// routers

app.use("/api/posts", postRouter);
app.use("/api/tags", tagRouter);
app.use("/api/users", userRouter);

app.use((err, req, res, next) => {
  error("ERROR FOUND:", err);
  res.sendStatus(500);
});

module.exports = app;
