const router = require('express').Router();
const usuarioController = require('../controller/usuarioController');

router.get('/', usuarioController.ListarUsuarios);
router.get('/:id', usuarioController.ListarUsuario);
router.delete('/:id', usuarioController.EliminarUsuario);
router.put('/:id', usuarioController.ModificarUsuario);
router.post('/', usuarioController.AgregarUsuario);
router.post('/login',usuarioController.LoginUsuario);

module.exports = router;