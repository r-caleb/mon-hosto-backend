const Hospital = require("../models/Hospital");

exports.createHospital = (req, res, next) => {
  const hosto = new Hospital({
    ...req.body,
  });
  hosto
    .save()
    .then(() => res.status(201).json({ message: "hopital enregistré" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.modifyHospital = (req, res, next) => {
  Hospital.updateOne(
    { _id: req.params.id },
    { ...req.body, _id: req.params.id }
  )
    .then(() => res.status(200).json({ message: "Hôpital modifié !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.deleteHospital = (req, res, next) => {
  Hospital.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Objet supprimé !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.getOneHospital = (req, res, next) => {
  Hospital.findOne({ _id: req.params.id })
    .populate("townID")
    .then((hosto) => res.status(200).json(hosto))
    .catch((error) => res.status(404).json({ error }));
};

exports.getAllHospital = (req, res, next) => {
  Hospital.find()
    .populate("townID")
    .then((hostos) => res.status(200).json(hostos))
    .catch((error) => res.status(401).json({ error }));
};
