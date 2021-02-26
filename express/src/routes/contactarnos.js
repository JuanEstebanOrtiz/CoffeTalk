const router = require('express').Router();
const contactarnosController = require('../controller/contactarnosController');

router.get('/', contactarnosController.ListarContactarnos);
router.get('/:id', contactarnosController.ListarContactarno);
router.delete('/:id', contactarnosController.EliminarContactarno);
router.put('/:id', contactarnosController.ModificarContactarno);
router.post('/', contactarnosController.AgregarContactarno);

module.exports = router;