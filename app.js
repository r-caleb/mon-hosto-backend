const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
const serviceRoutes = require("./routes/service");
const managerRoutes = require("./routes/manager");
const townRoutes = require("./routes/town");
const hospitalRoutes = require("./routes/hospital");

const app = express();

mongoose.set("strictQuery", true);
mongoose
  .connect(
    "mongodb+srv://caleb:katrylianmespotes@cluster0.51aqkoz.mongodb.net/monHosto?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});
app.use("/", userRoutes);
app.use("/", managerRoutes);
app.use("/", serviceRoutes);
app.use("/", townRoutes);
app.use("/", hospitalRoutes);

module.exports = app;
