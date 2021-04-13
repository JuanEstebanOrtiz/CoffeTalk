const database = require('../database');

exports.ListarGalerias = async (req,res) => {
    try {
        const galerias = await database.query("SELECT * FROM galeria");
        res.status(200).json({ galerias });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}

exports.ListarGaleria = async (req,res) => {
    try {
        const { id } = req.params;
        const gale = await database.query("SELECT * FROM galeria WHERE idgaleria = ?", [id]);
        res.status(200).json({ gale });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}

exports.EliminarGaleria = async (req,res) => {
    try {
        const { id } = req.params;
        await database.query("DELETE FROM galeria WHERE idgaleria = ?", [id]);
        res.status(200).json({ msg: "Galeria eliminado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}

exports.ModificarGaleria = async (req,res) => {
    try {
        const { id } = req.params;
        const { imagen } = req.body;
        await database.query("UPDATE galeria SET imagen = ? WHERE idgaleria = ?", [imagen, id]);
        res.status(200).json({ msg: "Galeria modificado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}

exports.AgregarGaleria = async (req,res) => {
    try {
        const { imagen } = req.body;
        await database.query("INSERT INTO galeria( imagen) VALUES (?)", [imagen]);
        res.status(200).json({ msg: "Galeria agregado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}