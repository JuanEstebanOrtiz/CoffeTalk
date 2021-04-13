const database = require('../database');

exports.ListarComentarios = async (req,res) => {
    try {
        const comentarios = await database.query("select c.idcomentario, c.comentario, p.nombre as nombre_producto, u.nombre as nombre_usuario from comentario c, productos p, usuario u where c.idproductos = p.idproductos and c.idusuario = u.idusuario");
        res.status(200).json({ comentarios });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}

exports.ListarComentario = async (req,res) => {
    try {
        const { id } = req.params;
        const comen = await database.query("SELECT * FROM comentario WHERE idcomentario = ?", [id]);
        res.status(200).json({ comen });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}

exports.EliminarComentario = async (req,res) => {
    try {
        const { id } = req.params;
        await database.query("DELETE FROM comentario WHERE idcomentario = ?", [id]);
        res.status(200).json({ msg: "Comentario eliminado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}

exports.AgregarComentario = async (req,res) => {
    try {
        const { comentario, idproductos, idusuario } = req.body;
        await database.query("INSERT INTO comentario(comentario, idproductos, idusuario) VALUES (?,?,?)", [comentario, idproductos, idusuario]);
        res.status(200).json({ msg: "Comentario agregado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}