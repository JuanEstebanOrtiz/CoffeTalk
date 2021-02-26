const router = require('express').Router();
const galeriaController = require('../controller/galeriaController');

router.get('/', galeriaController.ListarGalerias);
router.get('/:id', galeriaController.ListarGaleria);
router.delete('/:id', galeriaController.EliminarGaleria);
router.put('/:id', galeriaController.ModificarGaleria);
router.post('/', galeriaController.AgregarGaleria);

module.exports = router;