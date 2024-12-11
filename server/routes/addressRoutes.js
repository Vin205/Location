// server/routes/addressRoutes.js
const express = require('express');
const Address = require('../models/Address');
const router = express.Router();

// Save address route for authenticated users only.
router.post('/', async (req, res) => {
    try {
        const newAddress = new Address({ ...req.body });
        await newAddress.save();
        res.status(201).json(newAddress);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all addresses route for authenticated users only.
router.get('/', async (req, res) => {
    try {
        const addresses = await Address.find();
        res.json(addresses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
