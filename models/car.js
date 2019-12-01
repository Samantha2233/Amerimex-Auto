const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const connection = mongoose.createConnection(process.env.DATABASE_URL);
autoIncrement.initialize(connection);

const carSchema = new mongoose.Schema({
  purchaseDate: { type: Date, default: Date.now },
  purchaseDescription: String,
  vehicleCost: Number,
  regAndTax: Number,
  repairAndInitExpense: Number
}, {
    timestamps: true
  })

carSchema.plugin(autoIncrement.plugin, 'Car');
let Car = connection.model('Car', carSchema);

module.exports = mongoose.model('Car', carSchema);