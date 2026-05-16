const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res, next) => {
  res.setHeader("Content-type", "text/html");
  res.send(`
    <html>
      <head>
        <title>Node Js Web Server</title>
      </head>
    </html>
    <body>
      <h1>Hello world! I'm a Node/Express Js web server...</h1>
      <p>And This is Example program for CI/CD learning..</p>
    </body>
    `);
  next();
});

module.exports = app;
