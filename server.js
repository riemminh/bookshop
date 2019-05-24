const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// load routes
const category = require("./routes/api/category");
const groups = require("./routes/api/groups");
const genre = require("./routes/api/genre");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// db config
const db = require("./config/keys").mongoURI;
// Connect MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Use Routes
app.use("/api/category", category);
app.use("/api/groups", groups);
app.use("/api/genre", genre);

app.get("/", (req, res) => res.send("Hello World!1"));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Example app listening on port ${port}`));
