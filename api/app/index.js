const error = require("debug")("api:error");

const express = require("express");

const morganDebug = require("morgan-debug");

const app = express();

app.use(morganDebug("api:request", "dev"));

app.use((err, req, res, next) => {
  error("ERROR FOUND:", err);
  res.sendStatus(500);
});

module.exports = app;
