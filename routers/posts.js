const express = require('express');

const router = express.Router();

const controller_dolce = require ('../controllers/controller_dolce');

router.get('/', controller_dolce.index);
   
router.get('/:id', controller_dolce.show);

router.post('/', controller_dolce.store);

router.put('/:id', controller_dolce.update);

router.patch('/:id', controller_dolce.modify);

router.delete('/:id', controller_dolce.destroy);

module.exports = router;

