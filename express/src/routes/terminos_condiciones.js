const router = require('express').Router();
const terminos_condicionesController = require('../controller/terminos_condicionesController');

router.get('/', terminos_condicionesController.ListarTerminos_condiciones);
router.get('/:id', terminos_condicionesController.ListarTerminos_condicione);
router.delete('/:id', terminos_condicionesController.EliminarTerminos_condicione);
router.put('/:id', terminos_condicionesController.ModificarTerminos_condicione);
router.post('/', terminos_condicionesController.AgregarTerminos_condicione);

module.exports = router;