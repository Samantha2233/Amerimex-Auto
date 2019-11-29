const express = require('express');
const router = express.Router();
const carsCtrl = require('../../controllers/cars');

router.get('/', carsCtrl.index);
router.post('/', carsCtrl.create);

module.exports = router;