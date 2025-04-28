const express = require('express');

const router = express.Router();

const pietanze = require('../data/posts_data.js');

const controller_dolce = require('../controllers/controller_dolce');

router.get('/', (req, res) => {
    res.json(pietanze);
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const pietanza = pietanze.find(pietanza => pietanza.id === id);

    if (!pietanza) {
        res.status(404);
        return res.json({
            error: "Not Found",
            message: "Pietanza non trovata"
        })
    }
    res.json(pietanza);
});

router.post('/', controller_dolce.store);

router.put('/:id', controller_dolce.update);

router.patch('/:id', controller_dolce.modify);

router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const pietanza = pietanze.find(pietanza => pietanza.id === id);
    if (!pietanza) {
        res.status(404);
        return res.json({
            error: "Not Found",
            message: "Pietanza non trovata"
        })
    }
    pietanze.splice(pietanze.indexOf(pietanza), 1);
    res.sendStatus(204);
    console.log(pietanze);


});

module.exports = router;

