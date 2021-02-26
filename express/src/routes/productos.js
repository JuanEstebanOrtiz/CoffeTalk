const router = require('express').Router();
const productosController = require('../controller/productosController');

router.get('/', productosController.ListarProductos);
router.get('/:id', productosController.ListarProducto);
router.delete('/:id', productosController.EliminarProducto);
router.put('/:id', productosController.ModificarProducto);
router.post('/', productosController.AgregarProducto);

module.exports = router;