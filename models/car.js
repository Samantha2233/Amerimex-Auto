const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  purchaseDate: { type: Date, default: Date.now },
  purchaseDescription: String,
  vehicleCost: Number,
  regAndTax: Number,
  repairAndInitExpense: Number
}, {
    timestamps: true
  })

module.exports = mongoose.model('Car', carSchema);