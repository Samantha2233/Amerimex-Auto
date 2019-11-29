var Car = require('../models/car');

module.exports = {
  create
}

async function create(req, res) {
  const car = await Car.create(req.body);
  console.log(car);
  res.status(201).json(car);
}