// ToDO
// !
// *
// ?

// ! imports
const error = require("debug")("api:error");
const express = require("express");
const morganDebug = require("morgan-debug");
const cors = require("cors");
const path = require("path")

// ! the express app
const app = express();

// ! routes
const postRouter = require("./routes/posts");
const tagRouter = require("./routes/tags");
const userRouter = require("./routes/users");

const authRouter = require("./routes/auth");
// const bodyParser = require("body-parser");

// ! takes the place of body-parser
app.use(express.json());
// app.use(bodyParser.json());

app.use(morganDebug("api:request", "dev"));
app.use(cors());

// ! routes (unused)
// app.use("/api/posts", postRouter);
// app.use("/api/tags", tagRouter);
// app.use("/api/users", userRouter);

// ! routes
app.use("/posts", postRouter);
app.use("/tags", tagRouter);
app.use("/users", userRouter);
app.use("/auth", authRouter);

// ! look in react build folder for static assets

app.use(express.static(path.join(__dirname, '../../reactjs/build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../reactjs/build', index.html));
});

// eslint-disable-next-line no-unsaved-vars
app.use((err, req, res, next) => {
  error("ERROR FOUND:", err);
  res.status(err.code || 500).json({
    message: error.message,
    error,
  });
});

module.exports = app;