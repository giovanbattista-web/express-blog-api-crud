// IMPORTO EXPRESS
const express = require('express');

// IMPORTO LA CLASSE ROUTER DI EXPRESS
const router = express.Router();

// IMPORTO IL CONTROLLER
const postController = require('../controllers/postController.js');

// DEFINIAMO LE ROTTE PER I POST 

/*
// INDEX
router.get('/', (req, res) => {
    res.send('Elenco dei post');
});

// SHOW 
router.get('/:id', (req, res) => {
    res.send(`Post con id : ${res.params.id}`);
});

// STORE 
router.post('/', (req, res) => {
    res.send('Inserimento di un nuovo post');
});

//UPDATE
router.put('/:id', (req, res) => {
    res.send(`Modifica totale del post con id : ${res.params.id}`);
});

// MODIFY
router.patch('/:id', (req, res) => {
    res.send(`Modifica parziale del post con id : ${req.params.id} `);
});

// DESTROY
router.delete('/:id', (req, res) => {
    res.send(`Cancellazione del post con id : ${req.params.id} `);
});
*/

// INDEX
router.get('/', postController.index);

// SHOW 
router.get('/:id', postController.show);

// STORE 
router.post('/', postController.store);

//UPDATE
router.put('/:id', postController.update);

// MODIFY
router.patch('/:id', postController.modify);

// DESTROY
router.delete('/:id', postController.destroy);

// ESPORTO IL ROUTER 
module.exports = router;

