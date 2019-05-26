const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// load routes
const categories = require("./routes/api/categories");
const topic = require("./routes/api/topic");
const tag = require("./routes/api/tag");

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

app.get("/", (req, res) => res.send("Hello World!1"));

app.use("/api/categories", categories);
app.use("/api/topic", topic);
app.use("/api/tag", tag);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Example app listening on port ${port}`));
