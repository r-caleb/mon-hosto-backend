const app = require("./app");
const http = require("http").Server(app);


http.listen(process.env.PORT || 5000, () =>
  console.log("Adresse du serveur : http://localhost:5000")
);