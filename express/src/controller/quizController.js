const database = require('../database');

exports.Listarquiz = async (req,res) => {
    try {
        const user = await database.query("select u.nombre, po.nombre_producto, pe.cantidad, v.total from usuarios u, producto po, pedidos pe, ventas v where v.id_usuarios = u.id_usuarios and v.id_productos = po.id_productos and v.id_pedido = pe.id_pedido;");
        res.status(200).json({ user });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}