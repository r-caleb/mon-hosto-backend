const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./api/routes/user");
const serviceRoutes = require("./api/routes/service");
const managerRoutes = require("./api/routes/manager");
const townRoutes = require("./api/routes/town");
const hospitalRoutes = require("./api/routes/hospital");
const pocessRoutes = require("./api/routes/pocess");

const app = express();

mongoose.set("strictQuery", true);
mongoose
  .connect(
    "mongodb+srv://caleb:katrylianmespotes@cluster0.51aqkoz.mongodb.net/monHosto?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));
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
app.use(express.json());
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname, "public") });
});
app.use("/", userRoutes);
app.use("/", managerRoutes);
app.use("/", serviceRoutes);
app.use("/", townRoutes);
app.use("/", hospitalRoutes);
app.use("/", pocessRoutes);

module.exports = app;
