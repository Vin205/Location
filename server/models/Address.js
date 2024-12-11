const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    houseNo: String,
    area: String,
    category: String,
    lat: Number,
    lng: Number,
});

module.exports = mongoose.model('Address', addressSchema);