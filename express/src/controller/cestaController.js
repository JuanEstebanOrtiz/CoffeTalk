const database = require('../database');

exports.ListarCestas = async (req,res) => {
    try {
        const cestas = await database.query("select c.idcesta, c.cantidad, c.total, p.nombre as nombre_producto, u.nombre as nombre_usuario from cesta c, productos p, usuario u where c.idproductos = p.idproductos and c.idusuario = u.idusuario");
        res.status(200).json({ cestas });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}

exports.ListarCesta = async (req,res) => {
    try {
        const { id } = req.params;
        const cesta = await database.query("SELECT * FROM cesta WHERE idcesta = ?", [id]);
        res.status(200).json({ cesta });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}

exports.EliminarCesta = async (req,res) => {
    try {
        const { id } = req.params;
        await database.query("DELETE FROM cesta WHERE idcesta = ?", [id]);
        res.status(200).json({ msg: "Cesta eliminado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}

exports.ModificarCesta = async (req,res) => {
    try {
        const { id } = req.params;
        const { cantidad, total } = req.body;
        await database.query("UPDATE cesta SET cantidad = ?, total = ? WHERE idcesta = ?", [cantidad, total, id]);
        res.status(200).json({ msg: "Cesta modificado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}