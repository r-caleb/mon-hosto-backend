const Service = require("../models/Service");

exports.createService = (req, res, next) => {
  const service = new Service({
    ...req.body,
  });
  service
    .save()
    .then(() => res.status(201).json({ message: "Service enregistré" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.modifyService = (req, res, next) => {
  Service.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: "Service modifié !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.deleteService = (req, res, next) => {
  Service.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "service supprimé !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.getOneService = (req, res, next) => {
  Service.findOne({ _id: req.params.id })
    .then((service) => res.status(200).json(service))
    .catch((error) => res.status(404).json({ error }));
};

exports.getAllService = (req, res, next) => {
  Service.find()
    .then((services) => res.status(200).json(services))
    .catch((error) => res.status(401).json({ error }));
};
