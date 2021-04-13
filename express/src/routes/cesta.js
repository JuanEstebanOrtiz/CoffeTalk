const router = require('express').Router();
const cestaController = require('../controller/cestaController');

router.get('/', cestaController.ListarCestas);
router.get('/:id', cestaController.ListarCesta);
router.delete('/:id', cestaController.EliminarCesta);

module.exports = router;