const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router.get('/', controller.example)

/*
? Delete a flight
*/
router.delete('/:flightId', async (req, res) => {
    try {
        const removedflight = await flight.remove({_Id:req.params.flightId});
        res.json(removedflight);
    } catch (err) {
        res.json({message:err});
    });





module.exports = router;

