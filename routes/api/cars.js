const express = require('express');
const router = express.Router();
const carCtrl = require('../../controllers/cars');

router.post('/', carCtrl.create);

module.exports = router;