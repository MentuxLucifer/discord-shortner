const express = require("express");
const session = require("express-session");
const app = express();
const http = require("http").Server(app);
const bodyparser = require("body-parser");
const path = require("path");

module.exports.load = async(client) => {

  http.port = process.env.PORT || 8080;
  http.client = client;

  app
  .use(bodyparser.json())
  .use(bodyparser.urlencoded({ extended: true }))
  .engine("html", require("ejs").renderFile)
  .set("view engine", "ejs")
  .use(session({
    secret: "sdfsefsdcEfawefwegewfsefwefsefsefsefsfse2342342ep[23e223ec23e5243e",
    resave: false,
    saveUninitialized: false
  }))
  .use("/", require("./router/index"))

  http.listen(http.port, function(err) {
    if (err) throw err;
    console.log(`Dashboard is online at the port: ${http.port}`);
  });
  
  process.on("unhandledRejection", (r) => {
    console.dir(r);
  });  
};

