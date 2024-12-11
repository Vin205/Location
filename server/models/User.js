const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    auth0Id: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);