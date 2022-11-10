const express = require("express");

const app = express();

const port = process.env.PORT || 8080;

app.get("/", (_, res) => {
  res.send(`[HTTP(S)] :: Beating from ${Date.now()}`);
});

app.listen(port);
