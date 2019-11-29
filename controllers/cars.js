var Car = require('../models/car');

module.exports = {
  index,
  create
}

async function index(req, res) {
  const cars = await Car.find({});
  res.json(cars);
}

async function create(req, res) {
  const car = await Car.create(req.body);
  console.log(car);
  res.status(201).json(car);
}