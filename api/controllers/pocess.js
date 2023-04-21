const Pocess = require("../models/Pocess");

exports.createPocess = (req, res, next) => {
  const pocess = new Pocess({
    ...req.body,
  });
  pocess.save()
    .then(() => res.status(201).json({ message: "Pocess enregistré" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.modifyPocess = (req, res, next) => {
  Pocess.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: "Pocess modifié !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.deletePocess = (req, res, next) => {
  Pocess.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Pocess supprimé !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.getOnePocess = (req, res, next) => {
  Pocess.findOne({ _id: req.params.id })
    .then((pocess) => res.status(200).json(pocess))
    .catch((error) => res.status(404).json({ error }));
};

exports.getAllPocess = (req, res, next) => {
  Pocess.find()
    .populate("hospitalID")
    .populate("serviceID")
    .then((pocess) => res.status(200).json(pocess))
    .catch((error) => res.status(401).json({ error }));
};
