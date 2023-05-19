const router = require('express').Router();
const { Location, Traveller, Trip } = require('../../models');

//GET all locations

router.get('/', async (req, res) => {
    try {
        const locationData = await Location.findAll();
        res.status(200).json(locationData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET a single location

router.get('/:id', async (req, res) => {
    try {
        const locationData = await Location.findByPk(req.params.id, {
            //JOIN with travellers, using the Trip through table
            include: [{ model: Traveller, through: Trip, as: 'location_travellers' }]
        });
        if (!locationData) {
            res.status(404).json({ message: 'No location found with this is!' });
            return;
        }
        res.status(200).json(locationData);
    } catch (err) {
        res.status(500).json(err);
    }
});