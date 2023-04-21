const Town = require("../models/Town");

exports.createTown = (req, res, next) => {
  const town = new Town({
    ...req.body,
  });
  town
    .save()
    .then(() => res.status(201).json({ message: "Ville enregistré" }))
    .catch((error) => res.status(400).json({ error }));
};
