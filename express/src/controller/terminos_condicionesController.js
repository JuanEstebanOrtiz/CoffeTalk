const database = require('../database');

exports.ListarTerminos_condiciones = async (req,res) => {
    try {
        const terminos_condiciones = await database.query("SELECT * FROM terminos_condiciones");
        res.status(200).json({ terminos_condiciones});
    } catch (err) {
        res.status(401).json({ err: err });
    }
}

exports.ListarTerminos_condicione = async (req,res) => {
    try {
        const { id } = req.params;
        const tc = await database.query("SELECT * FROM terminos_condiciones WHERE idterminos_condiciones = ?", [id]);
        res.status(200).json({ tc });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}

exports.EliminarTerminos_condicione = async (req,res) => {
    try {
        const { id } = req.params;
        await database.query("DELETE FROM terminos_condiciones WHERE idterminos_condiciones = ?", [id]);
        res.status(200).json({ msg: "Terminos_condiciones eliminado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}

exports.ModificarTerminos_condicione = async (req,res) => {
    try {
        const { id } = req.params;
        const { politicas } = req.body;
        await database.query("UPDATE terminos_condiciones SET politicas = ? WHERE idterminos_condiciones = ?", [politicas, id]);
        res.status(200).json({ msg: "Terminos_condiciones modificado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}

exports.AgregarTerminos_condicione = async (req,res) => {
    try {
        const { politicas } = req.body;
        await database.query("INSERT INTO terminos_condiciones(politicas) VALUES (?)", [politicas]);
        res.status(200).json({ msg: "Terminos_condiciones agregado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}