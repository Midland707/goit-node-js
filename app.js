const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const contactsRouter = require("./routes/api/contacts");
const usersRouter = require("./routes/api/users");
require("dotenv").config();
const path = require("path");
const avatarsPath = path.resolve("public", "avatars");
const app = express();

app.use(morgan("combined"));
app.use(cors());
app.use(express.json());

app.use("/avatars", express.static(avatarsPath));
app.use("/api/contacts", contactsRouter);
app.use("/users", usersRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not Found" });
});

app.use((error, req, res, next) => {
  const { status = 500, message = "Server error" } = error;
  res.status(status).json({ message });
});

module.exports = app;
