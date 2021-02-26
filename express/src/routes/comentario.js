const router = require('express').Router();
const comentarioController = require('../controller/comentarioController');

router.get('/', comentarioController.ListarComentarios);
router.get('/:id', comentarioController.ListarComentario);
router.delete('/:id', comentarioController.EliminarComentario);
router.put('/:id', comentarioController.ModificarComentario);
router.post('/', comentarioController.AgregarComentario);

module.exports = router;