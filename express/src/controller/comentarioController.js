const database = require('../database');

exports.ListarComentarios = async (req,res) => {
    try {
        const comentarios = await database.query("SELECT * FROM comentario");
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

exports.ModificarComentario = async (req,res) => {
    try {
        const { id } = req.params;
        const { nombre, comentario } = req.body;
        await database.query("UPDATE comentario SET nombre = ?, comentario = ? WHERE idcomentario = ?", [nombre, comentario, id]);
        res.status(200).json({ msg: "Comentario modificado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}

exports.AgregarComentario = async (req,res) => {
    try {
        const { nombre, comentario } = req.body;
        await database.query("INSERT INTO comentario(nombre, comentario) VALUES (?,?)", [nombre, comentario]);
        res.status(200).json({ msg: "Comentario agregado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}